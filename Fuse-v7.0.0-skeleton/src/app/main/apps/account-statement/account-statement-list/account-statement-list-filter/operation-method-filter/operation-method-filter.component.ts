import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountStatementListFilterService } from '../account-statement-list-filter.service';
import { NotificationsService } from 'angular2-notifications';
import { FilterAccountStatement } from 'app/main/_models/Filters/filter-account-statement';
// import { ReferentialService } from 'app/main/_services/referential.service';
import { ISelect, EnumSelectType } from 'app/main/_models/generics/select.model';
import { OperationMethodService } from 'app/main/_services/Referential/operation-method.service';
import { ReferentialService } from 'app/main/_services/Referential/referential.service';
// import { ReferentialTestService } from 'app/main/_services/Referential/referential.service';


@Component({
  selector: 'operation-method-filter',
  templateUrl: './operation-method-filter.component.html',
  styleUrls: ['./operation-method-filter.component.scss']
})
export class OperationMethodFilterComponent implements OnInit {

 
  operationMethodForm: FormGroup;
  filter: FilterAccountStatement;
  operationMethods: ISelect[];


  constructor(
    private formBuilder: FormBuilder,
    private accountStatementListFilterService: AccountStatementListFilterService,
    private notificationService: NotificationsService,
    // private _operationMethodService: OperationMethodService
    private _referentialService: ReferentialService

  ) { 

    this.operationMethodForm = this.formBuilder.group({
      operationMethod: [undefined]
    });
    
    this.accountStatementListFilterService.filter
      .subscribe(filter => {
        this.filter = filter;

        this.operationMethodForm.controls['operationMethod'].setValue(filter.operationMethodSelected);
        this.getOperationMethodList();
      });

  }
  

  getOperationMethodList() {
    this._referentialService.operationMethodService.GetSelectList(EnumSelectType.empty)
    .subscribe(response => {
        this.operationMethods=response;
    },
    error => {
        this.notificationService.error('Echec de chargement', error);
    });
  }

  ngOnInit() {
 

  }
  
  ngOnDestroy() {
    // this.$filter.unsubscribe();
  }

  ngOnChanges(){

//     if(this.openFilter && this.triggerMenu) {

//        this.triggerMenu.openMenu();
//      }
   }

   onTypeChanged(evt): void {
 
   }

   updateAsif(){
  
    this.filter.operationMethodSelected = this.operationMethodForm.value.operationMethod;
    
    if (this.filter.operationMethodSelected != undefined) {
        this.filter.pagination.currentPage = 1;
        this.filter.operationSelected=null;

        this.accountStatementListFilterService.changeFilter(this.filter);
    }


   }

   compareObjects(o1: ISelect, o2: ISelect) {
     return o1 && o2 ? o1.id === o2.id : o1 === o2;

  }

  getFontSize() {
    return Math.max(10, 10);
  }

}
