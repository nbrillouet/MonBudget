// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';
// import { ISelectGroup, ISelect } from 'app/main/_models/generics/select.model';
// import { Store, Select } from '@ngxs/store';
// import { FilterAsTable } from 'app/main/_models/filters/account-statement.filter';
// import { AsTableFilterState } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.state';
// import { Observable } from 'rxjs';
// import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
// import { LoadAsTableFilter } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.action';

// @Component({
//   selector: 'operation-type-family-filter',
//   templateUrl: './operation-type-family-filter.component.html',
//   styleUrls: ['./operation-type-family-filter.component.scss']
// })
// export class OperationTypeFamilyFilterComponent implements OnInit {
//   @Select(AsTableFilterState.get) asTableFilter$: Observable<FilterInfo<FilterAsTable>>;
  
//   asTableFilter: FilterAsTable;
//   operationTypeFamilyForm: FormGroup;

//   stopPropagation:boolean=true;

//   constructor(
//     private _formBuilder: FormBuilder,
//     private _store: Store
//   ) { 

//     this.asTableFilter$.subscribe(filter => {
//       this.asTableFilter = filter.filters;
//     });
//   }

//   ngOnInit() {
//     this.operationTypeFamilyForm = this._formBuilder.group({
//       operationTypeFamilies: [this.asTableFilter.selected.operationTypeFamilies]
//     });
//   }
  
//   applyFilter() {
//     //suppression du menu
//     var element=document.getElementsByClassName("content-filter").item(0);
//     element.parentElement.remove();

//     this.asTableFilter.selected.operationTypeFamilies = this.operationTypeFamilyForm.value.operationTypeFamilies;
//     this.asTableFilter.selected.pagination.currentPage = 0;

//     this._store.dispatch(new LoadAsTableFilter(this.asTableFilter));

//    }

//    compareObjects(o1: ISelect, o2: ISelect) {
//     return o1 && o2 ? o1.id === o2.id : o1 === o2;
//   }
  
//   stopPropagationFct(value: boolean){
//     this.stopPropagation=value;
//    }
//   // testStopPropagation($event){
//   //   if(this.stopPropagation)
//   //    $event.stopPropagation();
//   // }

// }
