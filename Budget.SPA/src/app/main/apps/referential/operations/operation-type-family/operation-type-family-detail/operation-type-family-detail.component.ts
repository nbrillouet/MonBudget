import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { fuseAnimations } from '@fuse/animations';
import { OtfDetailState } from 'app/main/_ngxs/referential/operation-type-family/operation-type-family-detail/operation-type-family-detail.state';
import { Observable } from 'rxjs';
import { DataInfo } from 'app/main/_models/generics/detail-info.model';
import { OtfDetail } from 'app/main/_models/referential/operation-type-family.model';
import { LoadOtfDetail, LoadOtfDetailSuccess, ClearOtfDetail } from 'app/main/_ngxs/referential/operation-type-family/operation-type-family-detail/operation-type-family-detail.action';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { OtfService } from '../operation-type-family.service';
import { LoadOtfTableDatas } from 'app/main/_ngxs/referential/operation-type-family/operation-type-family-list/operation-type-family-list.action';
import { FilterOtfTable } from 'app/main/_models/filters/operation-type-family.filter';
import { OtfTableFilterState } from 'app/main/_ngxs/referential/operation-type-family/operation-type-family-list-filter/operation-type-family-list-filter.state';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';

@Component({
  selector: 'operation-type-family-detail',
  templateUrl: './operation-type-family-detail.component.html',
  styleUrls: ['./operation-type-family-detail.component.scss'],
  animations   : fuseAnimations
})
export class OperationTypeFamilyDetailComponent implements OnInit, OnDestroy {
@Select(OtfDetailState.get) otfDetail$: Observable<DataInfo<OtfDetail>>;
@Select(OtfTableFilterState.get) otfTableFilter$: Observable<FilterInfo<FilterOtfTable>>;

idOperationTypeFamily: number;
filterOtf: FilterOtfTable;
otfDetail: OtfDetail;
firstLoad: boolean=true;
formLoaded: boolean;

otfDetailForm: FormGroup;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _store: Store,
    private _formBuilder: FormBuilder,
    private _notificationService: NotificationsService,
    private _otfService: OtfService
  ) { 

    this.otfTableFilter$.subscribe(otfTableFilter=>{
      this.filterOtf = JSON.parse(JSON.stringify(otfTableFilter.filters));
    });


    this.otfDetail$.subscribe(otfDetail=>{
   
      if(otfDetail.loadingInfo.loaded) {

        this.otfDetail = JSON.parse(JSON.stringify(otfDetail.datas));
 
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

      this.idOperationTypeFamily = routeParams['idOperationTypeFamily']=='new' ? -1 : routeParams['idOperationTypeFamily'];
      this._store.dispatch(new LoadOtfDetail(this.idOperationTypeFamily));
    });
  }

  ngOnDestroy() {
    this._store.dispatch(new ClearOtfDetail());
  }

  createForms() {
    
    this.otfDetailForm = this._formBuilder.group({
        label: [this.otfDetail.label, [Validators.required]],
        logoClassName: [this.otfDetail.logoClassName.selected, [Validators.required]],
        movement: [this.otfDetail.movement.selected, [Validators.required]],
      });
     
    this.otfDetailForm.valueChanges.subscribe(val=>{
        this.otfDetail.label = val.label;
        this.otfDetail.logoClassName.selected = val.logoClassName;
        this.otfDetail.movement.selected = val.movement;

        this._store.dispatch(new LoadOtfDetailSuccess(this.otfDetail));
      });
 
  }  

  
  saveOtf() {
    this._otfService.saveOtfDetail(this.otfDetail)
      .subscribe(resp=> {
        if(resp)
        {
          this._notificationService.success('Enregistrement effectué', `La catégorie d'opération est enregistrée`);
          this._store.dispatch(new LoadOtfTableDatas(this.filterOtf.selected));
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
