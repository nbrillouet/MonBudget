import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { FilterAccountStatement } from '../../../../../../_models/Filters/FilterAccountStatement';
import { AccountStatementListFilterService } from '../account-statement-list-filter.service';
import { FilterAccountStatement, AsFilter } from 'app/main/_models/Filters/filter-account-statement';
import { Select, Store } from '@ngxs/store';
// import { AsFilterState } from 'app/main/_ngxs/account-statement/account-statement-filter/account-statement-filter.state';
import { Observable } from 'rxjs';
import { AsListState } from 'app/main/_ngxs/account-statement/account-statement-list/account-statement-list.state';
import { ChangeAsFilter } from 'app/main/_ngxs/account-statement/account-statement-list/account-statement-list.action';
// import { ChangeAsFilter } from 'app/main/_ngxs/account-statement/account-statement-filter/account-statement-filter.action';

@Component({
  selector: 'amount-filter',
  templateUrl: './amount-filter.component.html',
  styleUrls: ['./amount-filter.component.scss']
})
export class AmountFilterComponent implements OnInit {
  @Select(AsListState.getFilter) filter$: Observable<AsFilter>;
  stopPropagation:boolean=true;
  amountForm: FormGroup;
  filter: FilterAccountStatement;

  constructor(
    private formBuilder: FormBuilder,
    private accountStatementListFilterService: AccountStatementListFilterService,
    private store: Store
  ) {

    this.filter$.subscribe(filter=> {
      this.filter = filter;
    })

    // this.accountStatementListFilterService.filter
    //   .subscribe(filter => {
    //     this.filter = filter;
 
    //   });

  }

  ngOnInit() {
    this.stopPropagation=true;
    this.amountForm = this.formBuilder.group({
      amountMin: [this.filter.amountMin],
      amountMax: [this.filter.amountMax]
      });

  }
  
  ngOnDestroy() {

  }
  ngOnChanges(){

   }

  //  onTypeChanged(evt): void {
   //  }

   applyFilter(){

    //  this.stopPropagation=false;
    let amountMin: number = this.amountForm.value.amountMin;
    let amountMax: number = this.amountForm.value.amountMax;
    var element=document.getElementsByClassName("content-filter").item(0);
    element.removeAttribute('click');


    this.filter.amountMin = amountMin;
    this.filter.amountMax = amountMax;
    this.filter.pagination.currentPage=0;

    // if (this.filter.amountMin != undefined) {
        // this.filter.pagination.currentPage = 1;
        // this.accountStatementListFilterService.changeFilter(this.filter);
        this.store.dispatch(new ChangeAsFilter(this.filter));

    // }

   }

   stopPropagationFct(value: boolean){

    this.stopPropagation=value;
   }

   testStopPropagation($event){
     if(this.stopPropagation)
      $event.stopPropagation();
   }


}
