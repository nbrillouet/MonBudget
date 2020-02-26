import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fuseAnimations } from '@fuse/animations';
import { UserTable } from 'app/main/_models/user.model';
import { Select, Store } from '@ngxs/store';
import { FilterSelection, FilterSelected } from 'app/main/_models/generics/filter.info.model';
import { FilterUserTableSelected, FilterUserTableSelection } from 'app/main/_models/filters/user.filter';
import { Datas } from 'app/main/_models/generics/detail-info.model';
import { Column, EnumFilterType, EnumStyleType } from 'app/main/apps/web-component/mat-table-filter/model/mat-table-filter.model';
import { Router } from '@angular/router';
import { UserTableFilterSelectionState } from 'app/main/_ngxs/user/user-table/user-table-filter-selection/user-table-filter-selection.state';
import { UserTableFilterSelectedState } from 'app/main/_ngxs/user/user-table/user-table-filter-selected/user-table-filter-selected.state';
import { UserTableState } from 'app/main/_ngxs/user/user-table/user-table.state';
import { LoadUserTable } from 'app/main/_ngxs/user/user-table/user-table.action';
import { SynchronizeUserTableFilterSelected } from 'app/main/_ngxs/user/user-table/user-table-filter-selected/user-table-filter-selected.action';
import { LoadUserTableFilterSelection } from 'app/main/_ngxs/user/user-table/user-table-filter-selection/user-table-filter-selection.action';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  animations : fuseAnimations
})
export class UserTableComponent implements OnInit {
  @Select(UserTableFilterSelectionState.get) userTableFilterSelection$: Observable<FilterSelection<FilterUserTableSelection>>;
  @Select(UserTableFilterSelectedState.get) userTableFilterSelected$: Observable<FilterSelected<FilterUserTableSelected>>;
  @Select(UserTableState.get) userTable$: Observable<Datas<UserTable[]>>;

  filterUserSelected: FilterUserTableSelected = new FilterUserTableSelected();
  columns : Column[]=
     [ 
        {index:0, field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
        {index:1, field: 'avatarUrl',label:'avatar',isSortable:false,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type: EnumStyleType.image,datas:null}},
        {index:2, field: 'lastName',label:'nom',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null}},
        {index:3, field: 'firstName',label:'prénom',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.none, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
        {index:4, field: 'userName',label:'pseudonyme',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.none, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}}
    ];
    
  constructor(
    private _router: Router,
    private _store: Store
    ) {
      this._store.dispatch(new SynchronizeUserTableFilterSelected(new FilterUserTableSelected()));
      this._store.dispatch(new LoadUserTableFilterSelection(new FilterUserTableSelected()));
      
      this.userTableFilterSelected$.subscribe(selected=>{
        if(selected?.loader['filters-selected']?.loaded) {
          this.filterUserSelected = selected.selected;
        }
      });

    }
  ngOnInit(){

  }

  onRowClick($event) {
    this._router.navigate([`apps/referential/users/${$event.id}/detail`]);
  }

  applyFilterSelected(selected: FilterUserTableSelected) {
    this._store.dispatch(new LoadUserTable(selected));
  }

  applyFilterSelection(selection: FilterUserTableSelection) { 

  }

}

//   @Select(UserTableFilterState.get) userTableFilter$: Observable<FilterInfo<FilterUserTable>>;
//   @Select(UserTableState.get) userTable$: Observable<Datas<UserTable[]>>;
  
//   @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
//   @ViewChild(MatSort, { static: false }) sort: MatSort;

//   dataSource : UserDataSource;
//   filterUser: FilterUserTable;
//   displayedColumns = ['id','avatar','lastName','firstName','userName','button'];
  
//   formSearch: FormGroup;

  
//   constructor(
//     private _formBuilder: FormBuilder,
//     private _store: Store
//   ) {
//       this.formSearch = this._formBuilder.group({
//         keyword: [null, []]
//       });

//       this.formSearch.get('keyword').valueChanges
//         .subscribe(val => {
  
//             this.filterUser.selected.keyword=val;
//             this.dataSource.load(this.filterUser);
  
//         });

//       this.filterUser = new FilterUserTable();
//       this.dataSource = new UserDataSource(this._store);
//       this.dataSource.load(this.filterUser);

//   }

//   ngOnInit() {
//     this.userTableFilter$.subscribe(userTableFilter=>{
//       this.filterUser = JSON.parse(JSON.stringify(userTableFilter.filters));
//     });

//   }

//   onPageChangeEvent($event) {
//     this.filterUser.selected.pagination.currentPage = this.paginator.pageIndex;
//     this.loadPage();
//   }
  
//   onSortChangeEvent($event): void {

//     this.filterUser.selected.pagination.currentPage=0;
//     this.loadPage();
//   }

//   loadPage() {
//     this.filterUser.selected.pagination.nbItemsPerPage = this.paginator.pageSize;
//     this.filterUser.selected.pagination.sortColumn = this.sort.active;
//     this.filterUser.selected.pagination.sortDirection = this.sort.direction;

//     this.dataSource.load(this.filterUser);
//   }
 
// }

// export class UserDataSource extends DataSource<Datas<UserTable>> {
//   @Select(UserTableState.get) asifTable$: Observable<Datas<UserTable[]>>;

//   constructor (
//     private _store: Store
//     ) {
//     super();
//   }

//   connect(collectionViewer: CollectionViewer): Observable<any[]> {
//     return this.asifTable$.map(x=>x.datas);
//   }

//   disconnect(collectionViewer: CollectionViewer): void {
//   }
  
//   clear()
//   {
//   }

//   load(filter: FilterUserTable) {
//     this._store.dispatch(new ChangeUserTableFilter(filter));
//     }
//   }

