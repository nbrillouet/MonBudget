import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { FilterSelected } from 'app/main/_models/generics/filter.info.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { OtDetailState } from 'app/main/_ngxs/referential/operation-type/ot-detail/ot-detail.state';
import { OtTableFilterSelectedState } from 'app/main/_ngxs/referential/operation-type/ot-table/ot-table-filter-selected/ot-table-filter-selected.state';
import { FilterOtTableSelected, FilterOtDetail } from 'app/main/_models/filters/operation-type.filter';
import { LoadOtDetail, ClearOtDetail, SynchronizeOtDetail } from 'app/main/_ngxs/referential/operation-type/ot-detail/ot-detail.action';
import { SynchronizeOtTableFilterSelected } from 'app/main/_ngxs/referential/operation-type/ot-table/ot-table-filter-selected/ot-table-filter-selected.action';
import { OtService } from 'app/main/_services/Referential/operation-type.service';
import { OtDetailFilterState } from 'app/main/_ngxs/referential/operation-type/ot-detail/ot-detail-filter/ot-detail-filter.state';
import { DetailInfo, DataInfo } from 'app/main/_models/generics/detail-info.model';
import { OtForDetail } from 'app/main/_models/referential/operation-type.model';
import { FilterForDetail } from 'app/main/_models/filters/shared/filterDetail.filter';

@Component({
  selector: 'operation-type-detail',
  templateUrl: './operation-type-detail.component.html',
  styleUrls: ['./operation-type-detail.component.scss'],
  animations   : fuseAnimations
})
export class OperationTypeDetailComponent implements OnInit, OnDestroy {
  @Select(OtDetailState.get) detailInfo$: Observable<DetailInfo<OtForDetail, FilterForDetail>>;
  @Select(OtDetailFilterState.get) detailFilterInfo$: Observable<DataInfo<FilterOtDetail>>;

  @Select(OtTableFilterSelectedState.get) otTableFilterSelected$: Observable<FilterSelected<FilterOtTableSelected>>;

$DetailInfo$: Subscription;
otForDetail: OtForDetail

filterOtSelected: FilterOtTableSelected;
firstLoad: boolean=true;
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

    this.$DetailInfo$ = this.detailInfo$.subscribe(x => {
      if(x?.loader['datas']?.loaded) {
        this.otForDetail = x.datas;
        if(this.firstLoad) {
          //creation du formulaire
          this.createForms();
          this.firstLoad=false;
        }
        // this.formLoaded=true;
      }
    });

    this.detailFilterInfo$.subscribe(x=> {

    })
    // this.otDetail$.subscribe(otDetail=>{
    //   if(otDetail?.loader['datas']?.loaded) {
    //     this.otDetail = JSON.parse(JSON.stringify(otDetail.datas));
    //     if(this.firstLoad) {
    //       //creation du formulaire
    //       this.createForms();
    //       this.firstLoad=false;
    //     }

    //     this.formLoaded=true;
    //   }
    // });
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(routeParams => {
      let idOt = routeParams['idOperationType']=='new' ? null : routeParams['idOperationType'];
      this._store.dispatch(new LoadOtDetail(<FilterForDetail>{id:idOt}));
    });
  }

  ngOnDestroy() {
    this._store.dispatch(new ClearOtDetail());
  }

  createForms() {
    
    this.otDetailForm = this._formBuilder.group({
        label: [this.otForDetail.label, [Validators.required]],
        operationTypeFamily: [this.otForDetail.operationTypeFamily, [Validators.required]],
      });
     
    this.otDetailForm.valueChanges.subscribe(val=>{
        this.otForDetail.label = val.label;
        this.otForDetail.operationTypeFamily = val.operationTypeFamily;
        
        this._store.dispatch(new SynchronizeOtDetail(this.otForDetail));
      });
 
  }  

  
  save() {
    this._otService.saveOtDetail(this.otForDetail)
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
