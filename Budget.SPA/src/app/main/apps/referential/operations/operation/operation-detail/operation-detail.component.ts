import { Component, OnInit, OnDestroy } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { OperationForDetail } from 'app/main/_models/referential/operation.model';
import { OperationForDetailState } from 'app/main/_ngxs/referential/operation/operation-detail/operation-detail.state';
import { Observable } from 'rxjs';
import { OperationTableFilterState } from 'app/main/_ngxs/referential/operation/operation-list-filter/operation-list-filter.state';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { FilterOperationTable } from 'app/main/_models/filters/operation.filter';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { NotificationsService } from 'angular2-notifications';
import { OperationService } from 'app/main/_services/Referential/operation.service';
import { LoadOperationForDetail, ClearOperationForDetail } from 'app/main/_ngxs/referential/operation/operation-detail/operation-detail.action';
import { LoadOperationTableDatas } from 'app/main/_ngxs/referential/operation/operation-list/operation-list.action';
import { Datas } from 'app/main/_models/generics/detail-info.model';

@Component({
  selector: 'operation-detail',
  templateUrl: './operation-detail.component.html',
  styleUrls: ['./operation-detail.component.scss'],
  animations   : fuseAnimations
})

export class OperationDetailComponent implements OnInit, OnDestroy {

@Select(OperationForDetailState.get) operationDetail$: Observable<Datas<OperationForDetail>>;
@Select(OperationTableFilterState.get) operationTableFilter$: Observable<FilterInfo<FilterOperationTable>>;

idOperation: number;
filterOperation: FilterOperationTable;
operationDetail: OperationForDetail;
firstLoad: boolean=true;
formLoaded: boolean;

operationDetailForm: FormGroup;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _store: Store,
    private _formBuilder: FormBuilder,
    private _notificationService: NotificationsService,
    private _operationService: OperationService
  ) { 

    this.operationTableFilter$.subscribe(operationTableFilter=>{
      this.filterOperation = JSON.parse(JSON.stringify(operationTableFilter.filters));
    });


    this.operationDetail$.subscribe(operationDetail=>{
  
      if(operationDetail.loader['datas'].loaded) {

        this.operationDetail = JSON.parse(JSON.stringify(operationDetail.datas));

        if(this.firstLoad) {
          //creation du formulaire
          this.createForms();
          this.firstLoad=false;
        }

        this.formLoaded=true;
      }
    });

  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(routeParams => {
 
      this.idOperation = routeParams['idOperation']=='new' ? -1 : routeParams['idOperation'];
      this._store.dispatch(new LoadOperationForDetail(this.idOperation));
    });
  }

  ngOnDestroy() {
    this._store.dispatch(new ClearOperationForDetail());
  }

  createForms() {
    
    this.operationDetailForm = this._formBuilder.group({
        label: [this.operationDetail.label, [Validators.required]],
        operationMethod: [this.operationDetail.operationMethod.selected, [Validators.required]],
        operationType: [this.operationDetail.operationType.selected, [Validators.required]]
      });
     
    this.operationDetailForm.valueChanges.subscribe(val=>{
        this.operationDetail.label = val.label;
        this.operationDetail.operationMethod.selected = val.operationMethod;
        this.operationDetail.operationType.selected = val.operationType;

        //TODO synchronize
        // this._store.dispatch(new LoadOperationForDetailSuccess(this.operationDetail));
      });
 
  }  

  
  saveOt() {
    this._operationService.saveDetail(this.operationDetail)
      .subscribe(resp=> {
        if(resp)
        {
          this._notificationService.success('Enregistrement effectué', `L'opération est enregistrée`);
          this._store.dispatch(new LoadOperationTableDatas(this.filterOperation.selected));
        }
        else {
          this._notificationService.error('Echec de l\'enregistrement');
        }
      });
  }

  compareObjects(o1: any, o2: any) {
    if(o1.label == o2.label && o1.id == o2.id )
    return true;
    else return false;
  }

}
