import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ISelect, EnumSelectType } from 'app/main/_models/generics/select.model';
import { Store, Select } from '@ngxs/store';
import { FilterAsTable } from 'app/main/_models/filters/account-statement.filter';
import { AsTableFilterState } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.state';
import { Observable } from 'rxjs';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { LoadAsTableFilter } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.action';
import { ComboSimple } from 'app/main/_models/generics/combo.model';


@Component({
  selector: 'filter-movement',
  templateUrl: './filter-movement.component.html',
  styleUrls: ['./filter-movement.component.scss']
})
export class FilterMovementComponent implements OnInit {
  @Input() movement: ComboSimple<ISelect>;
  @Output() applyFilterMovement=new EventEmitter<ISelect>();

  movementForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { 

  }

  ngOnInit() {

    this.movementForm = this._formBuilder.group({
      movement: [this.movement.selected]
    });

    this.movementForm.valueChanges.subscribe(val=>{
      this.movement.selected = val.movement;
    });

  }
  

  applyFilter(){
    this.applyFilterMovement.emit(this.movement.selected);

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
