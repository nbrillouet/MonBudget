import { Component, OnInit } from '@angular/core';
import { ISelect, ISelectGroup } from '../../../../../../_models/select.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FilterAccountStatement } from '../../../../../../_models/Filters/FilterAccountStatement';
import { AccountStatementListFilterService } from '../account-statement-list-filter.service';
import { ReferentialService } from '../../../../../../_services/referential.service';
import { NotificationsService } from 'angular2-notifications';
import { OperationTypeFamilyService } from '../../../../../../_services/Referential/operation-type-family.service';

@Component({
  selector: 'operation-type-family-filter',
  templateUrl: './operation-type-family-filter.component.html',
  styleUrls: ['./operation-type-family-filter.component.scss']
})
export class OperationTypeFamilyFilterComponent implements OnInit {

  operationTypeFamilyForm: FormGroup;
  filter: FilterAccountStatement;
  operationTypeFamilies : ISelectGroup[];

  constructor(
    private formBuilder: FormBuilder,
    private accountStatementListFilterService: AccountStatementListFilterService,
    private operationTypeFamilyService: OperationTypeFamilyService,
    private notificationService: NotificationsService
  ) { 

    this.operationTypeFamilyForm = this.formBuilder.group({
      operationTypeFamily: [undefined]
    });

    this.accountStatementListFilterService.filter
      .subscribe(filter => {
        this.filter = filter;
        console.log('FILTER',filter);
        this.operationTypeFamilyForm.controls['operationTypeFamily'].setValue(filter.operationTypeFamilySelected);
        
      });
  }

  getOperationTypeFamilyList() {

    this.operationTypeFamilyService.GetSelectGroupList()
      .subscribe(response => {
        console.log('this.operationTypeFamilies',response);
        this.operationTypeFamilies = response;
      },
      error => {
          this.notificationService.error('Echec de chargement', error);
      });
  }

  ngOnInit() {
    this.getOperationTypeFamilyList();
  }
  
  

   onTypeChanged(evt): void {
    console.log('operation type family changed');
   }

   applyFilter() {
    console.log('checked',this.operationTypeFamilyForm.value.operationTypeFamily);
    this.filter.operationTypeFamilySelected = this.operationTypeFamilyForm.value.operationTypeFamily;
        
    if (this.filter.operationTypeFamilySelected != undefined) {
      console.log('applyFilter Operation Type Family',this.filter.pagination) ;
      this.filter.pagination.currentPage = 1;
      this.accountStatementListFilterService.changeFilter(this.filter);
    }

   }

   compareObjects(o1: ISelect, o2: ISelect) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;

  }

}
