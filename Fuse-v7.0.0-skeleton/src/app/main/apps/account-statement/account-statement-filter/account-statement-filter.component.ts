import { Component, OnInit } from '@angular/core';
// import { IMonth, DateTimeFactory } from '../../../../_models/date-time.model';
// import { FilterAccountStatement } from '../../../../_models/Filters/FilterAccountStatement';
import { AccountStatementListFilterService } from '../account-statement-list/account-statement-list-filter/account-statement-list-filter.service';
import { DateTimeFactory } from 'app/main/_models/date-time.model';
import { FilterAccountStatement, AsFilter } from 'app/main/_models/Filters/filter-account-statement';
import { Select, Store } from '@ngxs/store';
// import { AsFilterState } from 'app/main/_ngxs/account-statement/account-statement-filter/account-statement-filter.state';
import { Observable } from 'rxjs';
import { AsListState } from 'app/main/_ngxs/account-statement/account-statement-list/account-statement-list.state';
// import { GridInfo, AsGrid } from 'app/main/_models/account-statement.model';
import { ChangeAsFilter } from 'app/main/_ngxs/account-statement/account-statement-list/account-statement-list.action';
import { AsTable } from 'app/main/_models/account-statement.model';
import { TableInfo } from 'app/main/_models/generics/table-info.model';
import { ISelect } from 'app/main/_models/generics/select.model';
import { ChangeAsSoldeFilter } from 'app/main/_ngxs/account-statement/account-statement-solde/account-statement-solde.action';
// import { ChangeAsFilter } from 'app/main/_ngxs/account-statement/account-statement-filter/account-statement-filter.action';

@Component({
  selector: 'account-statement-filter',
  templateUrl: './account-statement-filter.component.html',
  styleUrls: ['./account-statement-filter.component.scss']
})
export class AccountStatementFilterComponent implements OnInit {
  @Select(AsListState.get) tableInfo$: Observable<TableInfo<AsTable,AsFilter>>;

  filter: FilterAccountStatement;
  months: ISelect[];
  years: number[]=[2015,2016,2017,2018,2019];

  constructor(
      private store: Store
  ) { 
    this.months = DateTimeFactory.getMonths;

    this.tableInfo$.subscribe(gridInfo=> {
      this.filter = gridInfo.filter;
    })
  }

  ngOnInit() {

  }

  updateMonthsSelected(month: ISelect){

    this.filter.monthYearSelected.month = month;
    this.store.dispatch(new ChangeAsSoldeFilter(this.filter));
    this.store.dispatch(new ChangeAsFilter(this.filter));
  }

  updateYearSelected(year: number) {
    this.filter.monthYearSelected.year = year;
    this.store.dispatch(new ChangeAsSoldeFilter(this.filter));
    this.store.dispatch(new ChangeAsFilter(this.filter));
  }

  isInMonthSelected(month: ISelect) {
    return month.id==this.filter.monthYearSelected.month.id;
  }

}
