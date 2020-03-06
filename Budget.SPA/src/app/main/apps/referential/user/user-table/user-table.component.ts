import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fuseAnimations } from '@fuse/animations';
import { UserTable } from 'app/main/_models/user.model';
import { Select, Store } from '@ngxs/store';
import { FilterSelection, FilterSelected } from 'app/main/_models/generics/filter.info.model';
import { FilterUserTableSelected, FilterUserTableSelection } from 'app/main/_models/filters/user.filter';
import { Datas } from 'app/main/_models/generics/detail-info.model';
import { Column, MatTableFilter } from 'app/main/apps/web-component/mat-table-filter/model/mat-table-filter.model';
import { Router } from '@angular/router';
import { UserTableFilterSelectionState } from 'app/main/_ngxs/user/user-table/user-table-filter-selection/user-table-filter-selection.state';
import { UserTableFilterSelectedState } from 'app/main/_ngxs/user/user-table/user-table-filter-selected/user-table-filter-selected.state';
import { UserTableState } from 'app/main/_ngxs/user/user-table/user-table.state';
import { LoadUserTable } from 'app/main/_ngxs/user/user-table/user-table.action';
import { SynchronizeUserTableFilterSelected } from 'app/main/_ngxs/user/user-table/user-table-filter-selected/user-table-filter-selected.action';
import { LoadUserTableFilterSelection } from 'app/main/_ngxs/user/user-table/user-table-filter-selection/user-table-filter-selection.action';
import { USER_COLUMNS } from 'app/main/_constants/mat-table-filter-column.const';

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
  matTableFilter: MatTableFilter = {
    columns: USER_COLUMNS,
    filterSelection$: this.userTableFilterSelection$,
    filterSelected$: this.userTableFilterSelected$,
    table$: this.userTable$,
    toolbar: {buttonAdd: {enabled:true}, buttonDelete:{enabled:true}}
  };
  
  constructor(
    private _router: Router,
    private _store: Store
    ) {
      this._store.dispatch(new SynchronizeUserTableFilterSelected(new FilterUserTableSelected()));
      this._store.dispatch(new LoadUserTableFilterSelection(new FilterUserTableSelected()));
      
      this.userTableFilterSelected$.subscribe(selected=>{
        if(selected?.loader['filter-selected']?.loaded) {
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