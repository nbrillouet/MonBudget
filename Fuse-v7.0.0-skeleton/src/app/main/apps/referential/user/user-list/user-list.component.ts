import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { CollectionViewer } from '@angular/cdk/collections';
import { fuseAnimations } from '@fuse/animations';
import { UserTable } from 'app/main/_models/user.model';
import { UserTableFilterState } from 'app/main/_ngxs/user/user-list-filter/user-list-filter.state';
import { Select, Store } from '@ngxs/store';
import { UserTableState } from 'app/main/_ngxs/user/user-list/user-list.state';
import { DataInfos } from 'app/main/_models/generics/table-info.model';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { FilterUserTable } from 'app/main/_models/filters/user.filter';
import { ChangeUserTableFilter } from 'app/main/_ngxs/user/user-list-filter/user-list-filter.action';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-userList',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations : fuseAnimations
})
export class UserListComponent implements OnInit {
  @Select(UserTableFilterState.get) userTableFilter$: Observable<FilterInfo<FilterUserTable>>;
  @Select(UserTableState.get) userTable$: Observable<DataInfos<UserTable>>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource : UserDataSource;
  filterUser: FilterUserTable;
  displayedColumns = ['id','avatar','lastName','firstName','userName','button'];
  
  formSearch: FormGroup;


  // dataSource : UserDataSource;
  // displayedColumns = ['id','avatar','lastName','firstName','userName','button'];
  // pagination: Pagination;

  // matPagination: MatPagination;


  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  
  constructor(
    // private userService: UserService,
    // private notificationService: NotificationsService,
    // private route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _store: Store
  ) {
      this.formSearch = this._formBuilder.group({
        keyword: [null, []]
      });

      this.formSearch.get('keyword').valueChanges
        .subscribe(val => {
          // if(val && val.length>=2) {
            this.filterUser.selected.keyword=val;
            this.dataSource.load(this.filterUser);
          // }
        });

      this.filterUser = new FilterUserTable();
      this.dataSource = new UserDataSource(this._store);
      this.dataSource.load(this.filterUser);
      // this.filterAsif.selected.idImport=routeParams['idImport'];
      // this._store.dispatch(new ChangeUserTableFilter(this.filterUser));
  }

  ngOnInit() {
    // this.dataSource = new UserDataSource(this.userService, this.route);
    // this.dataSource.loadUsers(new Pagination());
    this.userTableFilter$.subscribe(userTableFilter=>{
      this.filterUser = JSON.parse(JSON.stringify(userTableFilter.filters));
    });

  }

  onPageChangeEvent($event) {
    this.filterUser.selected.pagination.currentPage = this.paginator.pageIndex;
    this.loadPage();
  }
  
  onSortChangeEvent($event): void {

    this.filterUser.selected.pagination.currentPage=0;
    this.loadPage();
  }

  loadPage() {
    this.filterUser.selected.pagination.nbItemsPerPage = this.paginator.pageSize;
    this.filterUser.selected.pagination.sortColumn = this.sort.active;
    this.filterUser.selected.pagination.sortDirection = this.sort.direction;

    this.dataSource.load(this.filterUser);
  }

  // detail(data) {
  //   this.router.navigate(
  //     [`apps/account-statement-imports/${this.filterAsif.selected.idImport}/account-statement-import-files/${data.id}/detail`]);
  // }

  // loadUsersPage() {
  //   this.pagination.currentPage = this.paginator.pageIndex + 1;
  //   this.pagination.itemsPerPage = this.paginator.pageSize;
  //   this.pagination.sortColumn = this.sort.active;
  //   this.pagination.sortDirection = this.sort.direction;

  //   this.dataSource.loadUsers(this.pagination);
  // }
 
}

export class UserDataSource extends DataSource<DataInfos<UserTable>> {
  @Select(UserTableState.get) asifTable$: Observable<DataInfos<UserTable>>;

  constructor (
    private _store: Store
    ) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return this.asifTable$.map(x=>x.datas);
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }
  
  clear()
  {
  }

  load(filter: FilterUserTable) {
    this._store.dispatch(new ChangeUserTableFilter(filter));
    }
  }



// export class UserDataSource extends DataSource<IUser> {
//   private usersSubject = new BehaviorSubject<IUser[]>([]);
//   private paginationSubject = new BehaviorSubject<Pagination>(null);
//   private loadingSubject = new BehaviorSubject<boolean>(false);

//   public loading$ = this.loadingSubject.asObservable();
//   public pagination$ = this.paginationSubject.asObservable();

//   constructor (
//     private userService: UserService,
//     private route: ActivatedRoute
//   ) {
//     super();
//   }

//   connect(collectionViewer: CollectionViewer): Observable<IUser[]> {
//       return this.usersSubject.asObservable();
//   }

//   disconnect(collectionViewer: CollectionViewer): void {
//       this.usersSubject.complete();
//       this.loadingSubject.complete();
//       this.paginationSubject.complete();
//   }
  
//   loadUsers(pagination: Pagination) {

//     this.loadingSubject.next(true);

//     this.userService.getUsers(pagination)
//       .subscribe((res: PaginatedResult<IUser[]>) => {
//         this.usersSubject.next(res.result);
//         this.paginationSubject.next(res.pagination);
//         this.loadingSubject.next(false);
//       });

//     }


    
// }