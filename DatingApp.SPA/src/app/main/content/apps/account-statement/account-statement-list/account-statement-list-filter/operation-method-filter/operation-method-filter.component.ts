import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../../../../../../node_modules/@angular/forms';
import { FilterAccountStatement } from '../../../../../../_models/Filters/FilterAccountStatement';
import { ISubscription } from '../../../../../../../../../node_modules/rxjs/Subscription';
import { AccountStatementListFilterService } from '../account-statement-list-filter.service';
import { ReferentialService } from '../../../../../../_services/referential.service';
import { NotificationsService } from '../../../../../../../../../node_modules/angular2-notifications';
import { ISelect } from '../../../../../../_models/Select';

@Component({
  selector: 'operation-method-filter',
  templateUrl: './operation-method-filter.component.html',
  styleUrls: ['./operation-method-filter.component.scss']
})
export class OperationMethodFilterComponent implements OnInit {

  // @Input() openFilter: boolean;
  
  operationMethodForm: FormGroup;
  filter: FilterAccountStatement;
  operationMethods: ISelect[];
  // $filter: ISubscription;


  constructor(
    private formBuilder: FormBuilder,
    private accountStatementListFilterService: AccountStatementListFilterService,
    private referentialService: ReferentialService,
    private notificationService: NotificationsService
  ) { 

    this.operationMethodForm = this.formBuilder.group({
      operationMethod: [undefined]
    });
    
    this.accountStatementListFilterService.filter
      .subscribe(filter => {
        this.filter = filter;
        console.log('FILTER',filter);
        this.operationMethodForm.controls['operationMethod'].setValue(filter.operationMethodSelected);
        this.getOperationMethodList();
      });

  }

  getOperationMethodList() {
    this.referentialService.GetOperationMethodSelectList(2)
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
// console.log('this.openFilter',this.openFilter);
//     if(this.openFilter && this.triggerMenu) {
//       console.log('this.triggerMenu',this.triggerMenu);
//        this.triggerMenu.openMenu();
//      }
   }

   onTypeChanged(evt): void {
    console.log('operation changed');
   }

   updateAsif(){
    console.log('checked',this.operationMethodForm.value.operationMethod);
    this.filter.operationMethodSelected = this.operationMethodForm.value.operationMethod;
        
    if (this.filter.operationMethodSelected != undefined) {
        this.filter.pagination.currentPage = 1;
        this.filter.operationSelected=null;

        this.accountStatementListFilterService.changeFilter(this.filter);
    }

     console.log('click submit filter');
   }

   compareObjects(o1: ISelect, o2: ISelect) {
     return o1 && o2 ? o1.id === o2.id : o1 === o2;

  }

  getFontSize() {
    return Math.max(10, 10);
  }

}
