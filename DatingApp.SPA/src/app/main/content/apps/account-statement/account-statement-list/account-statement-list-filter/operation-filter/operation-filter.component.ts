import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../../../../../../node_modules/@angular/forms';
import { FilterAccountStatement } from '../../../../../../_models/Filters/FilterAccountStatement';
import { AccountStatementListFilterService } from '../account-statement-list-filter.service';
import { ISelect, EnumSelectType } from '../../../../../../_models/Select';
import { ISubscription } from '../../../../../../../../../node_modules/rxjs/Subscription';
import { NotificationsService } from '../../../../../../../../../node_modules/angular2-notifications';
import { ReferentialService } from '../../../../../../_services/referential.service';

@Component({
  selector: 'operation-filter',
  templateUrl: './operation-filter.component.html',
  styleUrls: ['./operation-filter.component.scss']
})
export class OperationFilterComponent implements OnInit, OnDestroy {

  @Input() openFilter: boolean;
  
  operationForm: FormGroup;
  filter: FilterAccountStatement;
  $filter: ISubscription;
  operations : ISelect[];
  isLoaded: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private accountStatementListFilterService: AccountStatementListFilterService,
    private referentialService: ReferentialService,
    private notificationService: NotificationsService
  ) { 

    this.operationForm = this.formBuilder.group({
      operation: [undefined]
    });

    this.accountStatementListFilterService.filter
      .subscribe(filter => {
        this.filter = filter;
        console.log('FILTER',filter);
        this.operationForm.controls['operation'].setValue(filter.operationSelected);
        this.getOperationList();
      });

  }

  getOperationList() {
    let operationMethodSelected : ISelect[] = this.filter.operationMethodSelected == null ? [] : this.filter.operationMethodSelected;

    this.referentialService.GetOperationSelectListByOperationMethods(operationMethodSelected)
      .subscribe(response => {
        this.operations = response;
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
    console.log('operation changed');
   }

   applyFilter(){
    console.log('checked',this.operationForm.value.operation);
    this.filter.operationSelected = this.operationForm.value.operation;
        
    if (this.filter.operationSelected != undefined) {
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
