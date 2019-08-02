import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FilterNumberRange } from 'app/main/_models/filters/mini-filter/number-range.filter';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'filter-number-range',
  templateUrl: './filter-number-range.component.html',
  styleUrls: ['./filter-number-range.component.scss']
})
export class FilterNumberRangeComponent implements OnInit {

  @Input() filterNumberRange: FilterNumberRange;
  @Output() applyFilterNumberRange=new EventEmitter<FilterNumberRange>();

  numberRangeForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder

  ) {

  }

  ngOnInit() {
    // this.stopPropagation=true;
    this.numberRangeForm = this._formBuilder.group({
      numberMin: [this.filterNumberRange.numberMin],
      numberMax: [this.filterNumberRange.numberMax]
      });

    this.numberRangeForm.valueChanges.subscribe(val=>{
      this.filterNumberRange.numberMin = val.numberMin;
      this.filterNumberRange.numberMax = val.numberMax;
    });

  }
  
   applyFilter(){
    this.applyFilterNumberRange.emit(this.filterNumberRange);

    //suppression du menu
    var element=document.getElementsByClassName("content-filter").item(0);
    element.parentElement.remove();


   }

}
