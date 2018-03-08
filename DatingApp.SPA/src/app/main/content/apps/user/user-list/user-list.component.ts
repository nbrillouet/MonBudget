import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { User } from '../../../../_models/User';
// import { PaginatedResult } from '../../../_models/IPagination';
import { IPagination, Pagination, MatPagination, PaginatedResult } from '../../../../_models/IPagination';
import { UserService } from '../user.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
import { fuseAnimations } from '../../../../../core/animations';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CollectionViewer } from '@angular/cdk/collections';
import { map, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-userList',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations : fuseAnimations
})
export class UserListComponent implements AfterViewInit, OnInit {
  // test: any;
  
  // users: User[];
  dataSource : UserDataSource;
  // dataSource : MatTableDataSource<User[]> 
  displayedColumns = ['id','avatar'];
  // Ipagination: IPagination;
  pagination: Pagination;
  matPagination: MatPagination;
  loading: any;

  // dataSource : any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private userService: UserService,
    private notificationService: NotificationsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.dataSource = new UserDataSource(this.userService, this.route);
    this.dataSource.loadUsers(new Pagination());


    this.dataSource.pagination$
      .subscribe(res=>{
        
        this.pagination = res;
        console.log(this.pagination);
      });

    // this.route.data
    // .subscribe(data => {
    //   this.matPagination = new MatPagination();
    //   this.matPagination.length = data['users'].pagination.totalPages;
    //   this.matPagination.pageSize = data['users'].pagination.itemsPerPage;
    //   this.matPagination.pageIndex = data['users'].pagination.currentPage;
    //   console.log(this.matPagination);

      // this.paginator.length = data['users'].pagination.totalPages;
      // this.paginator.pageSize= data['users'].pagination.itemsPerPage;
      // this.paginator.pageIndex = data['users'].pagination.currentPage;
      
      // this.dataSource=new MatTableDataSource<User[]>(data['users'].result);
      
          // }) 
    


    // this.dataSource = new UserDataSource(this.userService, this.route);
        
    // this.pagination = new Pagination();
    // this.pagination.totalItems = 15;
    // this.pagination.itemsPerPage = 5;
    
    // this.dataSource.loadUsers(new Pagination());
  }
// 
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;

      this.paginator.page
        .pipe(
            tap(() => this.loadUsersPage())
        )
        .subscribe();
    // console.log(this.dataSource.pagination$);
    
    // });
    
    // this.route.data
    // .subscribe(data => {
    //   this.dataSource=new MatTableDataSource<User[]>(data['users'].result);
    //   this.dataSource.paginator = this.paginator;
    //       }) 
          
      

    
  }

  loadUsersPage() {
    this.pagination.currentPage = this.paginator.pageIndex;
    this.pagination.itemsPerPage = this.paginator.pageSize;
    this.dataSource.loadUsers(this.pagination);
    
    
    
    // this.paginationSubject.next(data['users'].pagination);
      
      // 'asc',
        // this.paginator.pageIndex,
        // this.paginator.pageSize
      // );
  }

}

export class UserDataSource extends DataSource<User> {
  private usersSubject = new BehaviorSubject<User[]>([]);
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

  connect(collectionViewer: CollectionViewer): Observable<User[]> {
      return this.usersSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
      this.usersSubject.complete();
      this.loadingSubject.complete();
      this.paginationSubject.complete();
  }
  
  loadUsers(pagination: Pagination) {

    this.loadingSubject.next(true);

    this.userService.getUsers(pagination.currentPage,pagination.itemsPerPage)
      .subscribe((res: PaginatedResult<User[]>)=> {
        this.usersSubject.next(res.result);
        this.paginationSubject.next(res.pagination);
        this.loadingSubject.next(false);
      });

    // this.route.data
    //   .subscribe(data => {
    //           this.usersSubject.next(data['users'].result);
    //           this.paginationSubject.next(data['users'].pagination);
    //           console.log(data['users'].pagination);
    //           this.loadingSubject.next(false);
    //         }) 

    }
    





}