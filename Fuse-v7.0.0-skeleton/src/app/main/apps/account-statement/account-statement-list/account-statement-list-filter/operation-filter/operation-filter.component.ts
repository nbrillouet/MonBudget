import { Component, OnInit, Input, OnDestroy, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountStatementListFilterService } from '../account-statement-list-filter.service';
import { ISubscription } from 'rxjs/Subscription';
import { NotificationsService } from 'angular2-notifications';
import { FilterAccountStatement } from 'app/main/_models/Filters/filter-account-statement';
// import { ReferentialService } from 'app/main/_services/referential.service';
import { ISelect } from 'app/main/_models/generics/select.model';
import { ReferentialService } from 'app/main/_services/Referential/referential.service';
// import { ReferentialTestService } from 'app/main/_services/Referential/referential.service';

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
    private _referentialService: ReferentialService,
    private notificationService: NotificationsService
  ) { 

    this.operationForm = this.formBuilder.group({
      operation: [undefined]
    });

    this.accountStatementListFilterService.filter
      .subscribe(filter => {
        this.filter = filter;
  
        this.operationForm.controls['operation'].setValue(filter.operationSelected);
        this.getOperationList();
      });

  }

  getOperationList() {
    let operationMethodSelected : ISelect[] = this.filter.operationMethodSelected == null ? [] : this.filter.operationMethodSelected;

    this._referentialService.operationService.GetSelectListByOperationMethods(operationMethodSelected)
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
 

   onTypeChanged(evt): void {
 
   }

   applyFilter(){
    
    this.filter.operationSelected = this.operationForm.value.operation;
        
    if (this.filter.operationSelected != undefined) {
        this.filter.pagination.currentPage = 1;
        // this.filter.position='operation';
        this.accountStatementListFilterService.changeFilter(this.filter);
    }

   
   }

   compareObjects(o1: ISelect, o2: ISelect) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;

 }

}
