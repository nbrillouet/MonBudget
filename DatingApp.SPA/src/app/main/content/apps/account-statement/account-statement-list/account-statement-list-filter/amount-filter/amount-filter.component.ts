import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '../../../../../../../../../node_modules/@angular/forms';
import { FilterAccountStatement } from '../../../../../../_models/Filters/FilterAccountStatement';
import { AccountStatementListFilterService } from '../account-statement-list-filter.service';

@Component({
  selector: 'amount-filter',
  templateUrl: './amount-filter.component.html',
  styleUrls: ['./amount-filter.component.scss']
})
export class AmountFilterComponent implements OnInit {

  amountForm: FormGroup;
  filter: FilterAccountStatement;

  constructor(
    private formBuilder: FormBuilder,
    private accountStatementListFilterService: AccountStatementListFilterService,
  ) { 

    this.accountStatementListFilterService.filter
      .subscribe(filter => {
        this.filter = filter;
        console.log('FILTER',filter);

      });

  }

  ngOnInit() {

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
  //   console.log('operation type changed');
  //  }

   applyFilter(){
    let amountMin: number = this.amountForm.value.amountMin;
    let amountMax: number = this.amountForm.value.amountMax;
    
    this.filter.amountMin = amountMin;
    this.filter.amountMax = amountMax;
    console.log('this.filter.amountMin',this.filter.amountMin);
    console.log('this.filter.amountMax',this.filter.amountMax);
    // if (this.filter.amountMin != undefined) {
        this.filter.pagination.currentPage = 1;
        this.accountStatementListFilterService.changeFilter(this.filter);
    // }

   }

//    compareObjects(o1: ISelect, o2: ISelect) {
//     return o1 && o2 ? o1.id === o2.id : o1 === o2;

//  }

}
