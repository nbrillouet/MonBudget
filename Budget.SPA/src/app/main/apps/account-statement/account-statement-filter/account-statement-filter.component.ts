import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DateTimeFactory } from 'app/main/_models/generics/date-time.model';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ISelect } from 'app/main/_models/generics/select.model';
import { FilterAsTableSelected } from 'app/main/_models/filters/account-statement.filter';
import { AsSoldeState } from 'app/main/_ngxs/account-statement/account-statement-solde/account-statement-solde.state';
import { DetailInfo } from 'app/main/_models/generics/detail-info.model';
import { AsSolde } from 'app/main/_models/account-statement/account-statement-solde.model';

@Component({
  selector: 'account-statement-filter',
  templateUrl: './account-statement-filter.component.html',
  styleUrls: ['./account-statement-filter.component.scss']
})
export class AccountStatementFilterComponent implements OnInit {
  // @Select(AsTableFilterState.get) asTableFilter$: Observable<FilterInfo<FilterAsTable>>;
  
  @Select(AsSoldeState.get) asTableFilter$: Observable<DetailInfo<AsSolde,FilterAsTableSelected>>;
  asTableFilterSelected: FilterAsTableSelected;

  // asTableFilter: FilterAsTable;
  months: ISelect[];
  years: number[]=[2015,2016,2017,2018,2019];

  @Output() changeFilter = new EventEmitter<FilterAsTableSelected>();
  
  constructor(
      private _store: Store
  ) { 
    this.months = DateTimeFactory.getMonths;

    // this.asTableFilter$.subscribe(filter => {
    //   this.asTableFilter = filter.filters;
    // });

    this.asTableFilter$.subscribe(filter => {
      this.asTableFilterSelected = filter.filter;
    });

    // this.tableInfo$.subscribe(gridInfo=> {
    //   this.filter = gridInfo.filter;
    // })
  }

  ngOnInit() {

  }

  updateMonthsSelected(month: ISelect){
    this.asTableFilterSelected.monthYear.month = month;
    this.changeFilter.emit(this.asTableFilterSelected);
  }

  updateYearSelected(year: number) {
    this.asTableFilterSelected.monthYear.year = year;
    this.changeFilter.emit(this.asTableFilterSelected);
  
  }

  isInMonthSelected(month: ISelect) {
    if(this.asTableFilterSelected)
      return month.id==this.asTableFilterSelected.monthYear.month.id;

      return 0;
  }

}
