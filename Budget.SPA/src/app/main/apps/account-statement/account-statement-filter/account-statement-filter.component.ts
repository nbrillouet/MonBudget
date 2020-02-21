import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DateTimeFactory } from 'app/main/_models/generics/date-time.model';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ISelect } from 'app/main/_models/generics/select.model';
import { FilterAsTableSelected } from 'app/main/_models/filters/account-statement.filter';
import { FilterSelected } from 'app/main/_models/generics/filter.info.model';
import { AsTableFilterSelectedState } from 'app/main/_ngxs/account-statement/as-table/as-table-filter-selected/as-table-filter-selected.state';
import { SynchronizeAsTableFilterSelected } from 'app/main/_ngxs/account-statement/as-table/as-table-filter-selected/as-table-filter-selected.action';
import { LoadAsSolde } from 'app/main/_ngxs/account-statement/account-statement-solde/account-statement-solde.action';

@Component({
  selector: 'account-statement-filter',
  templateUrl: './account-statement-filter.component.html',
  styleUrls: ['./account-statement-filter.component.scss']
})
export class AccountStatementFilterComponent implements OnInit {
  @Select(AsTableFilterSelectedState.get) asTableFilterSelected$: Observable<FilterSelected<FilterAsTableSelected>>;
 
  asTableFilterSelected: FilterAsTableSelected;

  months: ISelect[];
  years: number[]=[2015,2016,2017,2018,2019];

  // @Output() changeFilter = new EventEmitter<FilterAsTableSelected>();
  
  constructor(
      private _store: Store
  ) { 
    this.months = DateTimeFactory.getMonths;

    // this.asTableFilter$.subscribe(filter => {
    //   this.asTableFilter = filter.filters;
    // });

    this.asTableFilterSelected$
      .subscribe(filter => {
        this.asTableFilterSelected = filter.selected;
      });

    // this.tableInfo$.subscribe(gridInfo=> {
    //   this.filter = gridInfo.filter;
    // })
  }

  ngOnInit() {

  }

  updateMonthsSelected(month: ISelect) {
    this.asTableFilterSelected.monthYear.month = month;
    this._store.dispatch(new SynchronizeAsTableFilterSelected(this.asTableFilterSelected));
    this._store.dispatch(new LoadAsSolde(this.asTableFilterSelected));
  }

  updateYearSelected(year: number) {
    this.asTableFilterSelected.monthYear.year = year;
    this._store.dispatch(new SynchronizeAsTableFilterSelected(this.asTableFilterSelected));
    this._store.dispatch(new LoadAsSolde(this.asTableFilterSelected));
  }

  isInMonthSelected(month: ISelect) {
    if(this.asTableFilterSelected)
      return month.id==this.asTableFilterSelected.monthYear.month.id;

      return 0;
  }

}
