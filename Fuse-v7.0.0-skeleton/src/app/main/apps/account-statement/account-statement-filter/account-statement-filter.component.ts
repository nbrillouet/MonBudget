import { Component, OnInit } from '@angular/core';
import { DateTimeFactory } from 'app/main/_models/date-time.model';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AsTable } from 'app/main/_models/account-statement.model';
import { TableInfo } from 'app/main/_models/generics/table-info.model';
import { ISelect } from 'app/main/_models/generics/select.model';
import { ChangeAsSoldeFilter, LoadAsSolde } from 'app/main/_ngxs/account-statement/account-statement-solde/account-statement-solde.action';
import { AsTableFilterState } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.state';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { FilterAsTable } from 'app/main/_models/filters/account-statement.filter';
import { LoadAsTableFilter } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.action';

@Component({
  selector: 'account-statement-filter',
  templateUrl: './account-statement-filter.component.html',
  styleUrls: ['./account-statement-filter.component.scss']
})
export class AccountStatementFilterComponent implements OnInit {
  @Select(AsTableFilterState.get) asTableFilter$: Observable<FilterInfo<FilterAsTable>>;
  
  // @Select(AsListState.get) tableInfo$: Observable<TableInfo<AsTable,AsFilter>>;

  asTableFilter: FilterAsTable;
  months: ISelect[];
  years: number[]=[2015,2016,2017,2018,2019];

  constructor(
      private _store: Store
  ) { 
    this.months = DateTimeFactory.getMonths;

    this.asTableFilter$.subscribe(filter => {
      this.asTableFilter = filter.filters;
    });

    // this.tableInfo$.subscribe(gridInfo=> {
    //   this.filter = gridInfo.filter;
    // })
  }

  ngOnInit() {

  }

  updateMonthsSelected(month: ISelect){

    this.asTableFilter.selected.monthYear.month = month;
    this._store.dispatch(new LoadAsSolde(this.asTableFilter.selected));
    this._store.dispatch(new LoadAsTableFilter(this.asTableFilter));

  }

  updateYearSelected(year: number) {
    this.asTableFilter.selected.monthYear.year = year;
    this._store.dispatch(new LoadAsSolde(this.asTableFilter.selected));
    this._store.dispatch(new LoadAsTableFilter(this.asTableFilter));
  }

  isInMonthSelected(month: ISelect) {
    if(this.asTableFilter)
      return month.id==this.asTableFilter.selected.monthYear.month.id;

      return 0;
  }

}
