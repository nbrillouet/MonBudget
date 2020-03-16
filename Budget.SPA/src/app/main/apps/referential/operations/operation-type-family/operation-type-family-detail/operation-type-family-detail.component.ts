import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { fuseAnimations } from '@fuse/animations';
import { Observable, Subscription } from 'rxjs';
import { OtfForDetail } from 'app/main/_models/referential/operation-type-family.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { FilterSelected } from 'app/main/_models/generics/filter.info.model';
import { Datas, DetailInfo, DataInfo } from 'app/main/_models/generics/detail-info.model';
import { OtfDetailState } from 'app/main/_ngxs/referential/operation-type-family/otf-detail/otf-detail.state';
import { FilterOtfTableSelected, FilterOtfDetail } from 'app/main/_models/filters/operation-type-family.filter';
import { OtfTableFilterSelectedState } from 'app/main/_ngxs/referential/operation-type-family/otf-table/otf-table-filter-selected/otf-table-filter-selected.state';
import { LoadOtfDetail, ClearOtfDetail, SynchronizeOtfDetail } from 'app/main/_ngxs/referential/operation-type-family/otf-detail/otf-detail.action';
import { SynchronizeOtfTableFilterSelected } from 'app/main/_ngxs/referential/operation-type-family/otf-table/otf-table-filter-selected/otf-table-filter-selected.action';
import { OtfService } from 'app/main/_services/Referential/operation-type-family.service';
import { OtfDetailFilterState } from 'app/main/_ngxs/referential/operation-type-family/otf-detail/otf-detail-filter/otf-detail-filter.state';
import { FilterForDetail } from 'app/main/_models/filters/shared/filterDetail.filter';

@Component({
  selector: 'operation-type-family-detail',
  templateUrl: './operation-type-family-detail.component.html',
  styleUrls: ['./operation-type-family-detail.component.scss'],
  animations   : fuseAnimations
})
export class OperationTypeFamilyDetailComponent implements OnInit, OnDestroy {
  @Select(OtfDetailState.get) detailInfo$: Observable<DetailInfo<OtfForDetail, FilterForDetail>>;
  @Select(OtfDetailFilterState.get) detailFilterInfo$: Observable<DataInfo<FilterOtfDetail>>;

  @Select(OtfTableFilterSelectedState.get) otfTableFilterSelected$: Observable<FilterSelected<FilterOtfTableSelected>>;

$DetailInfo$: Subscription;
otfForDetail: OtfForDetail

filterOtfSelected: FilterOtfTableSelected;
firstLoad: boolean=true;
otfDetailForm: FormGroup;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _store: Store,
    private _formBuilder: FormBuilder,
    private _notificationService: NotificationsService,
    private _otfService: OtfService
  ) { 

    this.otfTableFilterSelected$.subscribe(selected=>{
      if(selected?.loader['filter-selected']?.loaded) {
        this.filterOtfSelected = selected.selected; 
      }
    });

    this.$DetailInfo$ = this.detailInfo$.subscribe(x => {
      if(x?.loader['datas']?.loaded) {
        console.log('x',x);
        this.otfForDetail = x.datas;
        if(this.firstLoad) {
          //creation du formulaire
          this.createForms();
          this.firstLoad=false;
          console.log('firstLoad',this.firstLoad);
        }
      }
    });

  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(routeParams => {
      let idOtf = routeParams['idOperationTypeFamily']=='new' ? 0 : routeParams['idOperationTypeFamily'];
      this._store.dispatch(new LoadOtfDetail(<FilterForDetail>{ id:idOtf }));
    });
  }

  ngOnDestroy() {
    this._store.dispatch(new ClearOtfDetail());
  }

  createForms() {
    
    this.otfDetailForm = this._formBuilder.group({
        label: [this.otfForDetail.label, [Validators.required]],
        asset: [this.otfForDetail.asset, [Validators.required]],
        movement: [this.otfForDetail.movement, [Validators.required]],
      });
     
    this.otfDetailForm.valueChanges.subscribe(val=>{
        this.otfForDetail.label = val.label;
        this.otfForDetail.asset = val.asset;
        this.otfForDetail.movement = val.movement;
        
        this._store.dispatch(new SynchronizeOtfDetail(this.otfForDetail));
      });
 
  }  

  
  save() {
    this._otfService.save(this.otfForDetail)
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
