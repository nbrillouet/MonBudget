import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FilterAccountStatement } from '../../../../../../_models/Filters/FilterAccountStatement';
import { ISelect } from '../../../../../../_models/select.model';
import { AccountStatementListFilterService } from '../account-statement-list-filter.service';
import { ReferentialService } from '../../../../../../_services/referential.service';
import { NotificationsService } from 'angular2-notifications';
import { OperationTypeService } from '../../../../../../_services/Referential/operation-type.service';

@Component({
  selector: 'operation-type-filter',
  templateUrl: './operation-type-filter.component.html',
  styleUrls: ['./operation-type-filter.component.scss']
})
export class OperationTypeFilterComponent implements OnInit {

  operationTypeForm: FormGroup;
  filter: FilterAccountStatement;
  // $filter: ISubscription;
  operationTypes : ISelect[];
  isLoaded: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private accountStatementListFilterService: AccountStatementListFilterService,
    private operationTypeService: OperationTypeService,
    private notificationService: NotificationsService
  ) { 

    this.operationTypeForm = this.formBuilder.group({
      operationType: [undefined]
    });

    this.accountStatementListFilterService.filter
      .subscribe(filter => {
        this.filter = filter;
        console.log('FILTER',filter);
        this.operationTypeForm.controls['operationType'].setValue(filter.operationTypeSelected);
        this.getOperationTypeList();
      });

  }

  getOperationTypeList() {
    let operationTypeFamilySelected : ISelect[] = this.filter.operationTypeFamilySelected == null ? [] : this.filter.operationTypeFamilySelected;

    this.operationTypeService.GetSelectListByOperationTypeFamily(operationTypeFamilySelected)
      .subscribe(response => {
        this.operationTypes = response;
        this.isLoaded=true;
      },
      error => {
          this.notificationService.error('Echec de chargement', error);
      });
  }

  ngOnInit() {

  }
  
  ngOnDestroy() {

  }
  ngOnChanges(){

   }

   onTypeChanged(evt): void {
    console.log('operation type changed');
   }

   applyFilter(){
    console.log('checked',this.operationTypeForm.value.operationType);
    this.filter.operationTypeSelected = this.operationTypeForm.value.operationType;
        
    if (this.filter.operationTypeSelected != undefined) {
        this.filter.pagination.currentPage = 1;
        // this.filter.position='operation';
        this.accountStatementListFilterService.changeFilter(this.filter);
    }

     console.log('click submit filter');
   }

   compareObjects(o1: ISelect, o2: ISelect) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;

 }

}
