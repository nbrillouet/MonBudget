import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AccountStatementListFilterService } from '../account-statement-list-filter.service';
import { NotificationsService } from 'angular2-notifications';
import { FilterAccountStatement } from 'app/main/_models/Filters/filter-account-statement';
import { OperationTypeFamilyService } from 'app/main/_services/Referential/operation-type-family.service';
import { ISelectGroup, ISelect } from 'app/main/_models/generics/select.model';
import { ReferentialService } from 'app/main/_services/Referential/referential.service';
// import { ReferentialService } from 'app/main/_services/referential.service';
// import { ReferentialTestService } from 'app/main/_services/Referential/referential.service';

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
    // private operationTypeFamilyService: OperationTypeFamilyService,
    private _referentialService: ReferentialService,
    private notificationService: NotificationsService
  ) { 

    this.operationTypeFamilyForm = this.formBuilder.group({
      operationTypeFamily: [undefined]
    });

    this.accountStatementListFilterService.filter
      .subscribe(filter => {
        this.filter = filter;
 
        this.operationTypeFamilyForm.controls['operationTypeFamily'].setValue(filter.operationTypeFamilySelected);
        
      });
  }

  getOperationTypeFamilyList() {

    this._referentialService.operationTypeFamilyService.GetSelectGroupList()
      .subscribe(response => {
     
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
   
   }

   applyFilter() {
    
    this.filter.operationTypeFamilySelected = this.operationTypeFamilyForm.value.operationTypeFamily;

    if (this.filter.operationTypeFamilySelected != undefined) {
 
      this.filter.pagination.currentPage = 1;
      this.accountStatementListFilterService.changeFilter(this.filter);
    }

   }

   compareObjects(o1: ISelect, o2: ISelect) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;

  }

}
