// import { Component, OnInit} from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';
// import { ISelect, EnumSelectType } from 'app/main/_models/generics/select.model';
// import { Store, Select } from '@ngxs/store';
// import { FilterAsTable } from 'app/main/_models/filters/account-statement.filter';
// import { AsTableFilterState } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.state';
// import { Observable } from 'rxjs';
// import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
// import { LoadAsTableFilter } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.action';


// @Component({
//   selector: 'operation-method-filter',
//   templateUrl: './operation-method-filter.component.html',
//   styleUrls: ['./operation-method-filter.component.scss']
// })
// export class OperationMethodFilterComponent implements OnInit {
//   @Select(AsTableFilterState.get) asTableFilter$: Observable<FilterInfo<FilterAsTable>>;
  
//   asTableFilter: FilterAsTable;
//   operationMethodForm: FormGroup;

//   constructor(
//     private _formBuilder: FormBuilder,
//     private _store: Store

//   ) { 

//     this.asTableFilter$.subscribe(filter => {
//         this.asTableFilter = filter.filters;
//       });

//   }

//   ngOnInit() {

//     this.operationMethodForm = this._formBuilder.group({
//       operationMethod: [this.asTableFilter.selected.operationMethods]
//     });

//   }
  

//   applyFilter(){
  
//     this.asTableFilter.selected.operationMethods = this.operationMethodForm.value.operationMethod;
//     this.asTableFilter.selected.pagination.currentPage = 0;

//     this._store.dispatch(new LoadAsTableFilter(this.asTableFilter));

//     //suppression du menu
//     var element=document.getElementsByClassName("content-filter").item(0);
//     element.parentElement.remove();
//   }

//    compareObjects(o1: ISelect, o2: ISelect) {
//      return o1 && o2 ? o1.id === o2.id : o1 === o2;

//   }

//   getFontSize() {
//     return Math.max(10, 10);
//   }

// }
