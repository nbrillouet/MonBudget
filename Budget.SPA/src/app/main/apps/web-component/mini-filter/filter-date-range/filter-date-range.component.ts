import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { Moment } from 'moment';
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
  // events: [string, MatDatepickerInputEvent<Date>][] = []
  
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
      this.filterDateRange.dateMin= val.dateRangeMin!=null ? this.getDate(val.dateRangeMin) : null;
      this.filterDateRange.dateMax= val.dateRangeMax!=null ? this.getDate(val.dateRangeMax) : null;
      this.applyFilterDateRange.emit(this.filterDateRange);
    });

  }
  
  // datepickerFilterMin = (d: Date): boolean => {
  //   let dateMax = this.events['changeMax']
  //   return dateMax ? d <= dateMax : true
  // }

  // applyFilter(){

  //   this.applyFilterDateRange.emit(this.filterDateRange);

  //   //suppression du menu
  //   var element=document.getElementsByClassName("content-filter").item(0);
  //   element.parentElement.remove();

  // }

  clearMin() {
    this.dateRangeForm.controls['dateRangeMin'].reset()

    this.filterDateRange.dateMin = null
    this.applyFilterDateRange.emit(this.filterDateRange)
  }

  clearMax() {
      this.dateRangeForm.controls['dateRangeMax'].reset()

      this.filterDateRange.dateMax = null
      this.applyFilterDateRange.emit(this.filterDateRange)
  }

  getDate(myDate){
    var mt:Moment = <Moment>myDate;
    var dt = mt.toDate();
    dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
    return dt;
  }

}
