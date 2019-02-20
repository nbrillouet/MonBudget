import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// import { IUser } from '../../../../../_models/user.model';
// import { PaginatedResult } from '../../../_models/IPagination';
// import { IPagination, Pagination, MatPagination, PaginatedResult } from '../../../../../_models/pagination.model';
import { UserService } from '../user.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
// import { fuseAnimations } from '../../../../../../core/animations';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CollectionViewer } from '@angular/cdk/collections';
import { map, filter, tap } from 'rxjs/operators';
import { merge } from 'rxjs/observable/merge';
import { fuseAnimations } from '@fuse/animations';
import { Pagination, PaginatedResult } from 'app/main/_models/pagination.model';
import { IUser } from 'app/main/_models/user.model';


@Component({
  selector: 'app-userList',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations : fuseAnimations
})
export class UserListComponent implements OnInit {
  dataSource : UserDataSource;
  displayedColumns = ['id','avatar','lastName','firstName','userName','button'];
  pagination: Pagination;

  // matPagination: MatPagination;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(
    private userService: UserService,
    private notificationService: NotificationsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.dataSource = new UserDataSource(this.userService, this.route);
    this.dataSource.loadUsers(new Pagination());

    // this.dataSource.pagination$
    //   .subscribe(res=>{
        
    //     this.pagination = res;

    //   });
  }

  // ngAfterViewInit() {
  //   // reset the paginator after sorting
  //   this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

  //   merge(this.sort.sortChange, this.paginator.page)
  //     .pipe(
  //         tap(() => this.loadUsersPage())
  //     )
  //     .subscribe();

  //   // this.paginator.page
  //   //   .pipe(
  //   //       tap(() => this.loadUsersPage())
  //   //   )
  //   //   .subscribe();
  // }

  loadUsersPage() {
    this.pagination.currentPage = this.paginator.pageIndex + 1;
    this.pagination.itemsPerPage = this.paginator.pageSize;
    this.pagination.sortColumn = this.sort.active;
    this.pagination.sortDirection = this.sort.direction;

    this.dataSource.loadUsers(this.pagination);
  }

  

}

export class UserDataSource extends DataSource<IUser> {
  private usersSubject = new BehaviorSubject<IUser[]>([]);
  private paginationSubject = new BehaviorSubject<Pagination>(null);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();
  public pagination$ = this.paginationSubject.asObservable();

  constructor (
    private userService: UserService,
    private route: ActivatedRoute
  ) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<IUser[]> {
      return this.usersSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
      this.usersSubject.complete();
      this.loadingSubject.complete();
      this.paginationSubject.complete();
  }
  
  loadUsers(pagination: Pagination) {

    this.loadingSubject.next(true);

    // this.userService.getUsers(pagination.currentPage,pagination.itemsPerPage)
    this.userService.getUsers(pagination)
      .subscribe((res: PaginatedResult<IUser[]>) => {
        this.usersSubject.next(res.result);
        this.paginationSubject.next(res.pagination);
        this.loadingSubject.next(false);
      });

    }


    
}