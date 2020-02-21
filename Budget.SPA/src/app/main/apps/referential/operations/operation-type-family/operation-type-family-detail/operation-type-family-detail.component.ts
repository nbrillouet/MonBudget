import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { fuseAnimations } from '@fuse/animations';
import { Observable } from 'rxjs';
import { OtfDetail } from 'app/main/_models/referential/operation-type-family.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { OtfService } from '../operation-type-family.service';
import { FilterSelected } from 'app/main/_models/generics/filter.info.model';
import { Datas } from 'app/main/_models/generics/detail-info.model';
import { OtfDetailState } from 'app/main/_ngxs/referential/operation-type-family/otf-detail/otf-detail.state';
import { FilterOtfTableSelected } from 'app/main/_models/filters/operation-type-family.filter';
import { OtfTableFilterSelectedState } from 'app/main/_ngxs/referential/operation-type-family/otf-table/otf-table-filter-selected/otf-table-filter-selected.state';
import { LoadOtfDetail, ClearOtfDetail } from 'app/main/_ngxs/referential/operation-type-family/otf-detail/otf-detail.action';
import { SynchronizeOtfTableFilterSelected } from 'app/main/_ngxs/referential/operation-type-family/otf-table/otf-table-filter-selected/otf-table-filter-selected.action';

@Component({
  selector: 'operation-type-family-detail',
  templateUrl: './operation-type-family-detail.component.html',
  styleUrls: ['./operation-type-family-detail.component.scss'],
  animations   : fuseAnimations
})
export class OperationTypeFamilyDetailComponent implements OnInit, OnDestroy {
@Select(OtfDetailState.get) otfDetail$: Observable<Datas<OtfDetail>>;
@Select(OtfTableFilterSelectedState.get) otfTableFilterSelected$: Observable<FilterSelected<FilterOtfTableSelected>>;

idOperationTypeFamily: number;
filterOtfSelected: FilterOtfTableSelected;
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

    this.otfTableFilterSelected$.subscribe(selected=>{
      this.filterOtfSelected = selected.selected; // JSON.parse(JSON.stringify(otfTableFilter.filters));
    });


    this.otfDetail$.subscribe(otfDetail=>{
   
      if(otfDetail?.loader['datas']?.loaded) {

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
        //TODO synchronize
        // this._store.dispatch(new LoadOtfDetailSuccess(this.otfDetail));
      });
 
  }  

  
  saveOtf() {
    this._otfService.saveOtfDetail(this.otfDetail)
      .subscribe(resp=> {
        if(resp)
        {
          this._notificationService.success('Enregistrement effectué', `La catégorie d'opération est enregistrée`);
          this._store.dispatch(new SynchronizeOtfTableFilterSelected(this.filterOtfSelected));
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
