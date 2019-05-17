import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import { Moment } from 'moment';
import { ISelect } from 'app/main/_models/generics/select.model';
import { FilterAsTable } from 'app/main/_models/filters/account-statement.filter';
import { AsTableFilterState } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.state';
import { Observable } from 'rxjs';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { Select, Store } from '@ngxs/store';
import { LoadAsTableFilter } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.action';
import { FilterDateRange } from 'app/main/_models/filters/mini-filter/date-range.filter';

@Component({
  selector: 'filter-date-range',
  templateUrl: './filter-date-range.component.html',
  styleUrls: ['./filter-date-range.component.scss'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'fr'},

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class FilterDateRangeComponent implements OnInit {
  @Input() filterDateRange: FilterDateRange;
  @Output() applyFilterDateRange=new EventEmitter<FilterDateRange>();
  
  dateRangeForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder

  ) { 

  }

  ngOnInit() {

    this.dateRangeForm = this._formBuilder.group({
        dateRangeMin: [this.filterDateRange.dateMin],
        dateRangeMax: [this.filterDateRange.dateMax]
      });

    this.dateRangeForm.valueChanges.subscribe(val=>{
      
      if(val.dateRangeMin!=null) {
        this.filterDateRange.dateMin= this.getDate(val.dateRangeMin);

      }
      if(val.dateRangeMax!=null) {
        this.filterDateRange.dateMax= this.getDate(val.dateRangeMax);
      }
    });

  }
    

  applyFilter(){

  this.applyFilterDateRange.emit(this.filterDateRange);

  //suppression du menu
  var element=document.getElementsByClassName("content-filter").item(0);
  element.parentElement.remove();

  }

  getDate(myDate){
    var mt:Moment = <Moment>myDate;
    var dt = mt.toDate();
    dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
    return dt;
  }

}
