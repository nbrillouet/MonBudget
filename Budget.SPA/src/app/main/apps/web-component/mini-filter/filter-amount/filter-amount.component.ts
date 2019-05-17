import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FilterAmount } from 'app/main/_models/filters/mini-filter/amount.filter';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'filter-amount',
  templateUrl: './filter-amount.component.html',
  styleUrls: ['./filter-amount.component.scss']
})
export class FilterAmountComponent implements OnInit {
  @Input() filterAmount: FilterAmount;
  @Output() applyFilterAmount=new EventEmitter<FilterAmount>();

  amountForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder

  ) {

  }

  ngOnInit() {
    // this.stopPropagation=true;
    this.amountForm = this._formBuilder.group({
      amountMin: [this.filterAmount.amountMin],
      amountMax: [this.filterAmount.amountMax]
      });

    this.amountForm.valueChanges.subscribe(val=>{

      this.filterAmount = val;

    });

  }
  
   applyFilter(){
    this.applyFilterAmount.emit(this.filterAmount);

    //suppression du menu
    var element=document.getElementsByClassName("content-filter").item(0);
    element.parentElement.remove();


   }

}
