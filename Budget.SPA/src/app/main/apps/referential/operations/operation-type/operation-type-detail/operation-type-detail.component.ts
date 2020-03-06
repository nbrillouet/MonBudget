import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { OtDetail } from 'app/main/_models/referential/operation-type.model';
import { FilterSelected } from 'app/main/_models/generics/filter.info.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { OtService } from '../operation-type.service';
import { Datas } from 'app/main/_models/generics/detail-info.model';
import { OtDetailState } from 'app/main/_ngxs/referential/operation-type/ot-detail/ot-detail.state';
import { OtTableFilterSelectedState } from 'app/main/_ngxs/referential/operation-type/ot-table/ot-table-filter-selected/ot-table-filter-selected.state';
import { FilterOtTableSelected } from 'app/main/_models/filters/operation-type.filter';
import { LoadOtDetail, ClearOtDetail } from 'app/main/_ngxs/referential/operation-type/ot-detail/ot-detail.action';
import { SynchronizeOtTableFilterSelected } from 'app/main/_ngxs/referential/operation-type/ot-table/ot-table-filter-selected/ot-table-filter-selected.action';

@Component({
  selector: 'operation-type-detail',
  templateUrl: './operation-type-detail.component.html',
  styleUrls: ['./operation-type-detail.component.scss'],
  animations   : fuseAnimations
})
export class OperationTypeDetailComponent implements OnInit, OnDestroy {
@Select(OtTableFilterSelectedState.get) otTableFilterSelected$: Observable<FilterSelected<FilterOtTableSelected>>;
@Select(OtDetailState.get) otDetail$: Observable<Datas<OtDetail>>;

idOperationType: number;
filterOtSelected: FilterOtTableSelected;
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

    this.otTableFilterSelected$.subscribe(otTableFilter=>{
      if(otTableFilter?.loader['filter-selected']?.loaded) {
        this.filterOtSelected = otTableFilter.selected;
      }
    });


    this.otDetail$.subscribe(otDetail=>{
      if(otDetail?.loader['datas']?.loaded) {
        this.otDetail = JSON.parse(JSON.stringify(otDetail.datas));
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
      this.idOperationType = routeParams['idOperationType']=='new' ? 0 : routeParams['idOperationType'];
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
        //TODO synchronize
        // this._store.dispatch(new LoadOtDetailSuccess(this.otDetail));
      });
 
  }  

  
  saveOt() {
    this._otService.saveOtDetail(this.otDetail)
      .subscribe(resp=> {
        if(resp)
        {
          this._notificationService.success('Enregistrement effectué', `Le type d'opération est enregistré`);
          this._store.dispatch(new SynchronizeOtTableFilterSelected(this.filterOtSelected));
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
