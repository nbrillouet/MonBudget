import { Component, OnInit, OnDestroy } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { Select, Store } from '@ngxs/store';
import { OtDetailState } from 'app/main/_ngxs/referential/operation-type/operation-type-detail/operation-type-detail.state';
import { Observable } from 'rxjs';
import { DataInfo } from 'app/main/_models/generics/detail-info.model';
import { OtDetail } from 'app/main/_models/referential/operation-type.model';
import { OtTableFilterState } from 'app/main/_ngxs/referential/operation-type/operation-type-list-filter/operation-type-list-filter.state';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { FilterOtTable } from 'app/main/_models/filters/operation-type.filter';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { OtService } from '../operation-type.service';
import { LoadOtDetail, ClearOtDetail, LoadOtDetailSuccess } from 'app/main/_ngxs/referential/operation-type/operation-type-detail/operation-type-detail.action';
import { LoadOtTableDatas } from 'app/main/_ngxs/referential/operation-type/operation-type-list/operation-type-list.action';

@Component({
  selector: 'operation-type-detail',
  templateUrl: './operation-type-detail.component.html',
  styleUrls: ['./operation-type-detail.component.scss'],
  animations   : fuseAnimations
})
export class OperationTypeDetailComponent implements OnInit, OnDestroy {

@Select(OtDetailState.get) otDetail$: Observable<DataInfo<OtDetail>>;
@Select(OtTableFilterState.get) otTableFilter$: Observable<FilterInfo<FilterOtTable>>;

idOperationType: number;
filterOt: FilterOtTable;
otDetail: OtDetail;
firstLoad: boolean=true;
formLoaded: boolean;

otDetailForm: FormGroup;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _store: Store,
    private _formBuilder: FormBuilder,
    private _notificationService: NotificationsService,
    private _otService: OtService
  ) { 

    this.otTableFilter$.subscribe(otTableFilter=>{
      this.filterOt = JSON.parse(JSON.stringify(otTableFilter.filters));
    });


    this.otDetail$.subscribe(otDetail=>{
      console.log('otDetail',otDetail);
      if(otDetail.loadingInfo.loaded) {

        this.otDetail = JSON.parse(JSON.stringify(otDetail.datas));
        console.log('firstLoad',this.firstLoad);
        console.log('this.otDetail',this.otDetail);
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
      console.log('routeParams',routeParams);
      this.idOperationType = routeParams['idOperationType']=='new' ? -1 : routeParams['idOperationType'];
      this._store.dispatch(new LoadOtDetail(this.idOperationType));
    });
  }

  ngOnDestroy() {
    this._store.dispatch(new ClearOtDetail());
  }

  createForms() {
    
    this.otDetailForm = this._formBuilder.group({
        label: [this.otDetail.label, [Validators.required]],
        operationTypeFamily: [this.otDetail.operationTypeFamily.selected, [Validators.required]],
      });
     
    this.otDetailForm.valueChanges.subscribe(val=>{
        this.otDetail.label = val.label;
        this.otDetail.operationTypeFamily.selected = val.operationTypeFamily;

        this._store.dispatch(new LoadOtDetailSuccess(this.otDetail));
      });
 
  }  

  
  saveOt() {
    this._otService.saveOtDetail(this.otDetail)
      .subscribe(resp=> {
        if(resp)
        {
          this._notificationService.success('Enregistrement effectué', `Le type d'opération est enregistré`);
          this._store.dispatch(new LoadOtTableDatas(this.filterOt.selected));
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
