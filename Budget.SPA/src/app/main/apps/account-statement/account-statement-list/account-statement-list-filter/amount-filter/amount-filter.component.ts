// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';
// import { Select, Store } from '@ngxs/store';
// import { Observable } from 'rxjs';
// import { AsTableFilterState } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.state';
// import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
// import { FilterAsTable } from 'app/main/_models/filters/account-statement.filter';
// import { LoadAsTableFilter } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.action';

// @Component({
//   selector: 'amount-filter',
//   templateUrl: './amount-filter.component.html',
//   styleUrls: ['./amount-filter.component.scss']
// })
// export class AmountFilterComponent implements OnInit {
//   @Select(AsTableFilterState.get) asTableFilter$: Observable<FilterInfo<FilterAsTable>>;

//   stopPropagation:boolean=true;
//   amountForm: FormGroup;
//   asTableFilter: FilterAsTable;

//   constructor(
//     private _formBuilder: FormBuilder,
//     private _store: Store
//   ) {

//     this.asTableFilter$.subscribe(filter=> {
//       this.asTableFilter = filter.filters;
//     })

//   }

//   ngOnInit() {
//     // this.stopPropagation=true;
//     this.amountForm = this._formBuilder.group({
//       amountMin: [this.asTableFilter.selected.amountMin],
//       amountMax: [this.asTableFilter.selected.amountMax]
//       });

//   }
  
//    applyFilter(){

//     let amountMin: number = this.amountForm.value.amountMin;
//     let amountMax: number = this.amountForm.value.amountMax;
//     var element=document.getElementsByClassName("content-filter").item(0);
//     // element.removeAttribute('click');
//     element.parentElement.remove();

//     this.asTableFilter.selected.amountMin = amountMin;
//     this.asTableFilter.selected.amountMax = amountMax;
//     this.asTableFilter.selected.pagination.currentPage=0;

//     this._store.dispatch(new LoadAsTableFilter(this.asTableFilter));

//    }

//    stopPropagationFct(value: boolean){
//     this.stopPropagation=value;
//    }

//   //  testStopPropagation($event){
//   //    if(this.stopPropagation)
//   //     $event.stopPropagation();
//   //  }


// }
