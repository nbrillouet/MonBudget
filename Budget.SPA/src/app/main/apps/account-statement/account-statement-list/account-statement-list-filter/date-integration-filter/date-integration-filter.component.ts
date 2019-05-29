// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
// import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
// import { Moment } from 'moment';
// import { ISelect } from 'app/main/_models/generics/select.model';
// import { FilterAsTable } from 'app/main/_models/filters/account-statement.filter';
// import { AsTableFilterState } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.state';
// import { Observable } from 'rxjs';
// import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
// import { Select, Store } from '@ngxs/store';
// import { LoadAsTableFilter } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.action';

// @Component({
//   selector: 'date-integration-filter',
//   templateUrl: './date-integration-filter.component.html',
//   styleUrls: ['./date-integration-filter.component.scss'],
//   providers: [
//     // The locale would typically be provided on the root module of your application. We do it at
//     // the component level here, due to limitations of our example generation script.
//     {provide: MAT_DATE_LOCALE, useValue: 'fr'},

//     // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
//     // `MatMomentDateModule` in your applications root module. We provide it at the component level
//     // here, due to limitations of our example generation script.
//     {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
//     {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
//   ]
// })
// export class DateIntegrationFilterComponent implements OnInit {
//   @Select(AsTableFilterState.get) asTableFilter$: Observable<FilterInfo<FilterAsTable>>;
  
//   dateIntegrationForm: FormGroup;
//   asTableFilter: FilterAsTable;

//   constructor(
//     private _formBuilder: FormBuilder,
//     private _store: Store
//   ) { 

//     this.asTableFilter$.subscribe(filter => {
//       this.asTableFilter = filter.filters;
//     });

//   }

//   ngOnInit() {

//     this.dateIntegrationForm = this._formBuilder.group({
//         dateIntegrationMin: [this.asTableFilter.selected.dateIntegrationMin],
//         dateIntegrationMax: [this.asTableFilter.selected.dateIntegrationMax]
//       });

//   }
    

//    applyFilter(){
//     if (this.dateIntegrationForm.value.dateIntegrationMin!=null){
//       var mt:Moment = <Moment>this.dateIntegrationForm.value.dateIntegrationMin;
      
//       var dt = mt.toDate();
//       dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
//       this.asTableFilter.selected.dateIntegrationMin = dt;
//     }
    
//     if(this.dateIntegrationForm.value.dateIntegrationMax) {
//       mt = this.dateIntegrationForm.value.dateIntegrationMax;
//       dt = mt.toDate();
//       dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
//       this.asTableFilter.selected.dateIntegrationMax = dt;
//     }

//     // if (this.asTableFilter.selected.dateIntegrationMin != null || this.asTableFilter.selected.dateIntegrationMax !=null) {
//     this.asTableFilter.selected.pagination.currentPage = 0;
//     this._store.dispatch(new LoadAsTableFilter(this.asTableFilter));
//     // }

//     //suppression du menu
//     var element=document.getElementsByClassName("content-filter").item(0);
//     element.parentElement.remove();

//    }

//    compareObjects(o1: ISelect, o2: ISelect) {
//     return o1 && o2 ? o1.id === o2.id : o1 === o2;
//   }

// }
