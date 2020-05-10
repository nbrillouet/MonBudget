import { Component, OnInit, OnDestroy } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { OperationForDetail } from 'app/main/_models/referential/operation.model';
import { Observable, Subscription } from 'rxjs';
import { FilterSelected } from 'app/main/_models/generics/filter.info.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { NotificationsService } from 'angular2-notifications';
import { OperationService } from 'app/main/_services/Referential/operation.service';
import { DetailInfo, DataInfo } from 'app/main/_models/generics/detail-info.model';
import { OperationDetailState } from 'app/main/_ngxs/referential/operation/operation-detail/operation-detail.state';
import { OperationTableFilterSelectedState } from 'app/main/_ngxs/referential/operation/operation-table/operation-table-filter-selected/operation-table-filter-selected.state';
import { FilterOperationTableSelected, FilterOperationDetail } from 'app/main/_models/filters/operation.filter';
import { LoadOperationDetail, SynchronizeOperationDetail, ClearOperationDetail } from 'app/main/_ngxs/referential/operation/operation-detail/operation-detail.action';
import { LoadOperationTable } from 'app/main/_ngxs/referential/operation/operation-table/operation-table.action';
import { FilterForDetail } from 'app/main/_models/filters/shared/filterDetail.filter';
import { OperationDetailFilterState } from 'app/main/_ngxs/referential/operation/operation-detail/operation-detail-filter/operation-detail-filter.state';
import { SynchronizeOperationTableFilterSelected } from 'app/main/_ngxs/referential/operation/operation-table/operation-table-filter-selected/operation-table-filter-selected.action';

@Component({
  selector: 'operation-detail',
  templateUrl: './operation-detail.component.html',
  styleUrls: ['./operation-detail.component.scss'],
  animations   : fuseAnimations
})

export class OperationDetailComponent implements OnInit, OnDestroy {
  @Select(OperationDetailState.get) detailInfo$: Observable<DetailInfo<OperationForDetail, FilterForDetail>>;
  @Select(OperationDetailFilterState.get) detailFilterInfo$: Observable<DataInfo<FilterOperationDetail>>;

  @Select(OperationTableFilterSelectedState.get) operationTableFilterSelected$: Observable<FilterSelected<FilterOperationTableSelected>>;

  $DetailInfo$: Subscription;
  operationDetail: OperationForDetail;

filterOperationSelected: FilterOperationTableSelected;
firstLoad: boolean=true;

operationDetailForm: FormGroup;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _store: Store,
    private _formBuilder: FormBuilder,
    private _notificationService: NotificationsService,
    private _operationService: OperationService
  ) { 

    this.operationTableFilterSelected$.subscribe(selected=>{
      if(selected?.loader['filter-selected']?.loaded) {
        this.filterOperationSelected = selected.selected;
      }
    });

    this.$DetailInfo$ = this.detailInfo$.subscribe(x => {
    // this.operationDetail$.subscribe(operationDetail=>{
      if(x?.loader['datas']?.loaded) {
        this.operationDetail = x.datas; //JSON.parse(JSON.stringify(x.datas));
        if(this.firstLoad) {
          //creation du formulaire
          this.createForms();
          this.firstLoad=false;
        }
        // this.formLoaded=true;
      }
    });

  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(routeParams => {
      let idOperation = routeParams['idOperation']=='new' ? null : routeParams['idOperation'];
      this._store.dispatch(new LoadOperationDetail(<FilterForDetail>{id:idOperation}));
    });
  }

  ngOnDestroy() {
    this.$DetailInfo$.unsubscribe();
    this._store.dispatch(new ClearOperationDetail());
  }

  createForms() {
    
    this.operationDetailForm = this._formBuilder.group({
        label: [this.operationDetail.label, [Validators.required]],
        operationMethod: [this.operationDetail.operationMethod, [Validators.required]],
        operationType: [this.operationDetail.operationType, [Validators.required]]
    });
     
    this.operationDetailForm.valueChanges.subscribe(val=>{
        this.operationDetail.label = val.label;
        this.operationDetail.operationMethod = val.operationMethod;
        this.operationDetail.operationType = val.operationType;

        this._store.dispatch(new SynchronizeOperationDetail(this.operationDetail));
      });
 
  }  

  
  save() {
    this._operationService.saveDetail(this.operationDetail)
      .subscribe(resp=> {
        if(resp)
        {
          this._notificationService.success('Enregistrement effectué', `Opération enregistrée`);
          this._store.dispatch(new SynchronizeOperationTableFilterSelected(this.filterOperationSelected));
          // this._store.dispatch(new LoadOperationTable(this.filterOperationSelected));
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

  // displayFn(state:ISelect){
  //   return state ? state.label : null;
  // }

}
