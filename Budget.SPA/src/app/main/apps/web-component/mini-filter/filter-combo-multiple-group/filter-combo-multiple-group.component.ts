import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ISelect } from 'app/main/_models/generics/select.model';
import { FilterComboMultiple, FilterComboMultipleGroup } from 'app/main/_models/filters/mini-filter/combo-multiple.filters';

@Component({
  selector: 'filter-combo-multiple-group',
  templateUrl: './filter-combo-multiple-group.component.html',
  styleUrls: ['./filter-combo-multiple-group.component.scss']
})
export class FilterComboMultipleGroupComponent implements OnInit {
  @Input() filterComboMultipleGroup: FilterComboMultipleGroup;
  @Output() applyFilterComboMultipleGroup=new EventEmitter<ISelect[]>();

  comboMultipleGroupForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { 

  }

  ngOnInit() {
    
    this.comboMultipleGroupForm = this._formBuilder.group({
      comboMultipleGroup: [this.filterComboMultipleGroup.combos.listSelected]
    });

    this.comboMultipleGroupForm.valueChanges.subscribe(val=>{
      this.filterComboMultipleGroup.combos.listSelected = val.comboMultipleGroup;
    });

  }
  

  applyFilter(){
    this.applyFilterComboMultipleGroup.emit(this.filterComboMultipleGroup.combos.listSelected);

    //suppression du menu
    var element=document.getElementsByClassName("content-filter").item(0);
    element.parentElement.remove();
  }

   compareObjects(o1: ISelect, o2: ISelect) {
     return o1 && o2 ? o1.id === o2.id : o1 === o2;

  }

  getFontSize() {
    return Math.max(10, 10);
  }

}
