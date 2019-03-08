import { Component, OnInit, Input, } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ISelect } from 'app/main/_models/generics/select.model';
import { Select, Store } from '@ngxs/store';
import { AsTableFilterState } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.state';
import { Observable } from 'rxjs';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { FilterAsTable } from 'app/main/_models/filters/account-statement.filter';
import { LoadAsTableFilter } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.action';

@Component({
  selector: 'operation-filter',
  templateUrl: './operation-filter.component.html',
  styleUrls: ['./operation-filter.component.scss']
})
export class OperationFilterComponent implements OnInit {
  @Select(AsTableFilterState.get) asTableFilter$: Observable<FilterInfo<FilterAsTable>>;
  
  asTableFilter: FilterAsTable;
  operationForm: FormGroup;
  
  constructor(
    private _formBuilder: FormBuilder,
    private _store: Store
  ) { 
    
    this.asTableFilter$.subscribe(filter => {
      this.asTableFilter = filter.filters;
    });

  }

  ngOnInit() {
    this.operationForm = this._formBuilder.group({
      operations: [this.asTableFilter.selected.operations]
    });
  }
  
  
   applyFilter(){
    
    this.asTableFilter.selected.operations = this.operationForm.value.operations;
    this.asTableFilter.selected.pagination.currentPage = 0;
    
    this._store.dispatch(new LoadAsTableFilter(this.asTableFilter));

    //suppression du menu
    var element=document.getElementsByClassName("content-filter").item(0);
    element.parentElement.remove();
   }

   compareObjects(o1: ISelect, o2: ISelect) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;

 }

}
