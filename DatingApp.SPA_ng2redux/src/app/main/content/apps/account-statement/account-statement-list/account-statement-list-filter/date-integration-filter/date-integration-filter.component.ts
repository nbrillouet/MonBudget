import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FilterAccountStatement } from '../../../../../../_models/Filters/FilterAccountStatement';
import { AccountStatementListFilterService } from '../account-statement-list-filter.service';
import { NotificationsService } from 'angular2-notifications';
import { ISelect } from '../../../../../../_models/select.model';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import { Moment } from 'moment';

@Component({
  selector: 'date-integration-filter',
  templateUrl: './date-integration-filter.component.html',
  styleUrls: ['./date-integration-filter.component.scss'],
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
export class DateIntegrationFilterComponent implements OnInit {

  dateIntegrationForm: FormGroup;
  filter: FilterAccountStatement;

  constructor(
    private formBuilder: FormBuilder,
    private accountStatementListFilterService: AccountStatementListFilterService,

    private notificationService: NotificationsService
  ) { 


    this.accountStatementListFilterService.filter
      .subscribe(filter => {
        this.filter = filter;
        console.log('FILTER',filter);

      });

  }

  ngOnInit() {

    this.dateIntegrationForm = this.formBuilder.group({
        dateIntegrationMin: [this.filter.dateIntegrationMin],
        dateIntegrationMax: [this.filter.dateIntegrationMax]
      });

  }
  
  ngOnDestroy() {

  }
  ngOnChanges(){

   }

   onTypeChanged(evt): void {
    console.log('operation type changed');
   }

   applyFilter(){
    var mt:Moment = <Moment>this.dateIntegrationForm.value.dateIntegrationMin;
    
    console.log(mt);
    var dt = mt.toDate();
    dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
    this.filter.dateIntegrationMin = dt;
    
    mt = this.dateIntegrationForm.value.dateIntegrationMax;
    dt = mt.toDate();
    dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
    this.filter.dateIntegrationMax = dt;

    if (this.filter.dateIntegrationMin != undefined) {
        this.filter.pagination.currentPage = 1;
        this.accountStatementListFilterService.changeFilter(this.filter);
    }

   }

   compareObjects(o1: ISelect, o2: ISelect) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;

 }

}
