import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { fuseAnimations } from '@fuse/animations';
import { ValidateIsUnknown, ValidatorIfLocalisable } from './asif-detail.validator';
import { Store, Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { FilterInfo, FilterSelected } from 'app/main/_models/generics/filter.info.model';
import { FilterAsifDetail, FilterAsifTableSelected } from 'app/main/_models/filters/account-statement-import-file.filter';
import { LoadAsifDetail, ClearAsifDetail } from 'app/main/_ngxs/account-statement-import-file/asif-detail/asif-detail.action';
import { AsifDetailState } from 'app/main/_ngxs/account-statement-import-file/asif-detail/asif-detail.state';
import { AsifDetail, AsifForDetail } from 'app/main/_models/account-statement-import/account-statement-import-file.model';
import { IOperation } from 'app/main/_models/referential/operation.model';
import { GMapSearchInfo } from 'app/main/_models/g-map.model.';
import { ISelect } from 'app/main/_models/generics/select.model';
import { ReferentialService } from 'app/main/_services/Referential/referential.service';
import { NotificationsService } from 'angular2-notifications';
import { AsifService } from '../asif.service';
import { UserForDetail } from 'app/main/_models/user.model';
import { OperationTransverse } from 'app/main/_models/referential/operation-transverse.model';
import * as moment from 'moment';
import { FuseConfigService } from '@fuse/services/config.service';
import { Datas, DataInfo, DetailInfo } from 'app/main/_models/generics/detail-info.model';
import { AsifTableFilterSelectedState } from 'app/main/_ngxs/account-statement-import-file/asif-table/asif-table-filter-selected/asif-table-filter-selected.state';
import { LoadAsifTable } from 'app/main/_ngxs/account-statement-import-file/asif-table/asif-table.action';
import { HelperService } from 'app/main/_services/helper.service';
import { FilterOperationType } from 'app/main/_models/filters/operation.filter';
import { UserDetailState } from 'app/main/_ngxs/user/user-detail/user-detail.state';
import { AsDetailGenericComponent } from '../../shared/as-detail-generic/as-detail-generic.component';
import { AsService } from '../../account-statement/account-statement.service';
import { FilterForDetail } from 'app/main/_models/filters/shared/filterDetail.filter';
import { ClearAsifDetailFilter } from 'app/main/_ngxs/account-statement-import-file/asif-detail/asif-detail-filter/asif-detail-filter.action';
import { AsifDetailFilterState } from 'app/main/_ngxs/account-statement-import-file/asif-detail/asif-detail-filter/asif-detail-filter.state';

// templateUrl: './asif-detail.component.html',
// styleUrls: ['./asif-detail.component.scss'],
@Component({
  selector: 'asif-detail',
  templateUrl: '../../shared/as-detail-generic/as-detail-generic.component.html',
  styleUrls: ['../../shared/as-detail-generic/as-detail-generic.component.scss'],
  animations : fuseAnimations
})
export class AsifDetailComponent extends AsDetailGenericComponent implements OnInit, OnDestroy {
  @Select(AsifDetailState.get) detailInfo$: Observable<DetailInfo<AsifForDetail, FilterForDetail>>;
  @Select(AsifDetailFilterState.get) detailFilterInfo$: Observable<DataInfo<FilterAsifDetail>>;
  
  $DetailInfo$: Subscription;
  $detailFilterInfo$: Subscription;

  constructor(
    public _formBuilder: FormBuilder,
    public _helperService: HelperService,
    public _referentialService: ReferentialService,
    public _notificationService: NotificationsService,
    public _router: Router,
    public _store : Store,
    public _asService: AsService,
    public _asifService: AsifService,

    private _activatedRoute: ActivatedRoute,
  ) {
    super(_formBuilder, _helperService, _referentialService, _notificationService, _router, _store, _asService, _asifService);

    this.$DetailInfo$ = this.detailInfo$.subscribe(x => {
      if(x?.loader['datas']?.loaded) {
        this.asGenForDetail = x.datas;
        
        if(this.firstLoad) {
          //creation du formulaire
          this.createForms();
          this.firstLoad=false;
        }
      }
    });

    this.$detailFilterInfo$ = this.detailFilterInfo$.subscribe(x=> {
      if(x?.loader['datas']?.loaded) { 
        this.asGenDetailFilter = x.datas;
      }
    })
  }
  
  ngOnInit() {
    this._activatedRoute.params.subscribe(routeParams => {
      this.from = 'ASIF';
      this.idImport = routeParams['idImport'];
      let idAsif = routeParams['idAsif'];
      this._store.dispatch(new LoadAsifDetail(<FilterForDetail>{id:idAsif}));
    });
  }
    
  ngOnDestroy() {
    this._store.dispatch(new ClearAsifDetail());
    this._store.dispatch(new ClearAsifDetailFilter());
  }  
  
  
//   @Select(AsifTableFilterSelectedState.get) asifTableFilterSelected$: Observable<FilterSelected<FilterAsifTableSelected>>;
//   @Select(AsifDetailState.get) asifDetail$: Observable<Datas<AsifDetail>>;
//   @Select(UserDetailState.getUser) user$: Observable<IUser>;

// currentUser: IUser;
// filterAsifSelected: FilterAsifTableSelected;
// formLoaded: boolean;
// asifDetail: AsifDetail;
// idImport: number;
// asifDetailForm: FormGroup;
// operationAddForm: FormGroup;
// operationTransverseAddForm: FormGroup;
// isNewOperationTemplate: boolean;
// isNewOperationTransverseTemplate: boolean;
// firstLoad: boolean=true;
// fullscreen: boolean;

//   constructor(
//     private _activatedRoute: ActivatedRoute,
//     private _formBuilder: FormBuilder,
//     private _datePipe: DatePipe,
//     private _router: Router,
//     private _store: Store,
//     private _referentialService: ReferentialService,
//     private _notificationService: NotificationsService,
//     private _asifService: AsifService,
//     private _fuseConfigService: FuseConfigService,
//     private _helperService: HelperService
//   ) {
//     this.user$.subscribe((user:IUser) => {
//         this.currentUser = user;
//     });

//     this.asifTableFilterSelected$.subscribe(selected=>{
//       this.filterAsifSelected = selected.selected;
//     });

//     this.asifDetail$.subscribe(asifDetail=>{
//       if(asifDetail?.loader['datas']?.loaded) {
//         this.asifDetail = this._helperService.getDeepClone(asifDetail.datas);// JSON.parse(JSON.stringify(asifDetail.datas));
//         if(this.firstLoad) {
//           //creation du formulaire
//           this.createForms();
//           this.firstLoad=false;
//         }
//         this.formLoaded=true;
//       }
//     });

//     // Subscribe to the config changes
//     this._fuseConfigService.config
//     // .pipe(takeUntil(this._unsubscribeAll))
//     .subscribe((settings) => {
//         this.fullscreen = settings.layout.toolbar.fullscreen;
//     });
    
//    }

//   ngOnInit() {

//     this._activatedRoute.params.subscribe(routeParams => {
//       this.idImport = routeParams['idImport'];
//       let idAccountStatementFile = routeParams['idImportFile'];

//       this._store.dispatch(new LoadAsifDetail(<FilterAsifDetail> {idAsif:idAccountStatementFile}));
//     });

//   }

//   ngOnDestroy() {
//     this._store.dispatch(new ClearAsifDetail());
//   }

//   bindAsifDetail(value: any) {
//     this.asifDetail.operationTransverse.listSelected = this.asifDetailForm.controls['operationTransverse'].value; 

//   }

//   createForms() {

//     this.asifDetailForm = this._formBuilder.group({
//         operationMethod: [this.asifDetail.operationMethod.selected, [Validators.required]],
//         operationTypeFamily: [this.asifDetail.operationTypeFamily.selected, [Validators.required, ValidateIsUnknown]],
//         operationType: [this.asifDetail.operationType.selected, [Validators.required, ValidateIsUnknown]],
//         operation: [this.asifDetail.operation.selected,[Validators.required, ValidateIsUnknown]],
//         operationTransverse: [this.asifDetail.operationTransverse.listSelected],
//         amountOperation: [this.asifDetail.amountOperation,[Validators.required]],
//         labelOperation: [this.asifDetail.labelOperation,[Validators.required]],
//         dateIntegration: [this._datePipe.transform(this.asifDetail.dateIntegration,"dd/MM/yyyy"),[Validators.required]],
//         operationKeywordTemp: [this.asifDetail.operationKeywordTemp,[Validators.required]],
//         placeKeywordTemp: [this.asifDetail.placeKeywordTemp,[ValidatorIfLocalisable(this.asifDetail.operationPlace.selected,this.asifDetail.isLocalisable)]],
//         operationPlace: [this.asifDetail.operationPlace.selected,[Validators.required, ValidateIsUnknown]]
//       });

//       this.asifDetailForm.get('operationMethod').valueChanges
//         .subscribe(val => {
//           this.asifDetailForm.controls['operation'].setValue({id:1,label:'INCONNU'});
//         });

//       this.asifDetailForm.get('operationTypeFamily').valueChanges
//         .subscribe(val => {
//           this._store.dispatch(new asifDetailChangeOperationTypeFamily(val));
//           this.asifDetailForm.controls['operationType'].setValue({id:1,label:'INCONNU'});
//         });
      
//       this.asifDetailForm.get('operationType').valueChanges
//         .subscribe(val => {
//           let operationFilter=<FilterOperationType> { operationType: val, operationMethod:this.asifDetail.operationMethod.selected}
          
//           this._store.dispatch(new asifDetailChangeOperationType(operationFilter));
//           this.asifDetailForm.controls['operation'].setValue({id:1,label:'INCONNU'});
//         });

//       this.asifDetailForm.get('operation').valueChanges
//         .subscribe(val => {
//           if(this.asifDetail.isLocalisable)
//             this.asifDetailForm.controls['operationPlace'].setValue({id:1,label:'INCONNU'});
//           else
//             this.asifDetailForm.controls['operationPlace'].setValue({id:2,label:'NA'});
//           });

//       this.asifDetailForm.get('operationPlace')
//         .valueChanges
//         .subscribe(val => {
//           this.asifDetail.operationPlace.selected=val;
//           this.asifDetail.gMapSearchInfo=null;
//           if(this.asifDetail.operationPlace.selected.id==4)
//           {
//             this.asifDetail.gMapSearchInfo = <GMapSearchInfo> { 
//               idGMapAddress: this.asifDetail.operationDetail.gMapAddress.id>4 ? this.asifDetail.operationDetail.gMapAddress.id : 1, 
//               operationPositionSearch: this.asifDetail.operationLabelTemp,
//               operationPlaceSearch: this.asifDetail.placeLabelTemp
//             };
//           }
//           this._store.dispatch(new SynchronizeAsifDetail(this.asifDetail));
//         });
     
//       this.asifDetailForm.valueChanges.subscribe(val=>{
        
//         this.asifDetail.operationMethod.selected = val.operationMethod;
//         this.asifDetail.operationTypeFamily.selected = val.operationTypeFamily;
//         this.asifDetail.operationType.selected = val.operationType;
//         this.asifDetail.operation.selected = val.operation;
//         this.asifDetail.operationTransverse.listSelected = val.operationTransverse;
//         this.asifDetail.amountOperation = val.amountOperation;
//         this.asifDetail.labelOperation = val.labelOperation;
//         this.asifDetail.dateIntegration = moment(val.dateIntegration,'DD/MM/YYYY').toDate();
//         this.asifDetail.operationKeywordTemp = val.operationKeywordTemp;
//         this.asifDetail.placeKeywordTemp = val.placeKeywordTemp;
//         this.asifDetail.placeKeywordTemp = val.placeKeywordTemp;
//         this.asifDetail.operationPlace.selected = val.operationPlace;

//         this._store.dispatch(new SynchronizeAsifDetail(this.asifDetail));
//       });
 
//       this.operationAddForm = this._formBuilder.group({
//         operationLabelTemp: [this.asifDetail.operationLabelTemp,[Validators.required]]
//       });

//       this.operationTransverseAddForm = this._formBuilder.group({
//         operationTransverse: [null,[Validators.required]]
//       });
//   }  

//   addOperation() {
//     const operationMethod:ISelect = this.asifDetailForm.value.operationMethod;
//     const operationType: ISelect  = this.asifDetailForm.value.operationType;
//     const keyword: string = this.operationAddForm.value.operationKeywordTemp;
//     const label: string = this.operationAddForm.value.operationLabelTemp;
    
//     const operation: IOperation = <IOperation> {
//       id:0,
//       idOperationMethod: operationMethod.id,
//       idOperationType: operationType.id,
//       keyword: keyword,
//       label: label,
//       reference: null
//     };
    
//     this._referentialService.operationService.Create(operation)
//       .subscribe(operation => {
//           let operationSelect = <ISelect>{id:operation.id,label:operation.label};
//           //maj du data avec les infos operation
//           this.asifDetail.operation.selected = operationSelect;
//           this.asifDetailForm.controls['operation'].setValue(this.asifDetail.operation.selected);
//           this.asifDetailForm.markAsDirty();

//           //Ajout de la nouvelle opération dans la liste Operation
//           this.asifDetail.operation.list.push(operationSelect);
//           this.isNewOperationTemplate=false;
                      
//           this._notificationService.success('Enregistrement effectué', `L'opération est enregistrée`);
//       });

//   }

//   addOperationTransverse() {
//     const label: string = this.operationTransverseAddForm.value.operationTransverse;
    
//     const operationTransverse: OperationTransverse = <OperationTransverse> {
//       id:0,
//       label:label,
//       idUser:this.currentUser.id
//     };
    
//     this._referentialService.operationTransverseService.Create(operationTransverse)
//       .subscribe(operationTransverse => {
//           let operationTransverseSelect = <ISelect>{id:operationTransverse.id,label:operationTransverse.label};
//           //maj du data avec les infos operation transverse
//           this.asifDetail.operationTransverse.listSelected.push(operationTransverseSelect); // = <ISelect>{id:operationTransverseSelect.id,label:operationTransverse.label};
//           this.asifDetailForm.controls['operationTransverse'].setValue(this.asifDetail.operationTransverse.listSelected);
//           this.asifDetailForm.markAsDirty();

//           //Ajout de la nouvelle opération transverse dans la liste Operation transverse
//           this.asifDetail.operationTransverse.list.push(operationTransverseSelect);
//           this.isNewOperationTransverseTemplate=false;

//           this._notificationService.success('Enregistrement effectué', `L'opération transverse est enregistrée`);
//       });

//   }

//   updateAsif() {

//     this._asifService.update(this.asifDetail)
//     .subscribe(resp=> {
//       if(resp==true)
//       {
//         this._notificationService.success('Enregistrement effectué', `Le relevé est enregistré`);
//         this._store.dispatch(new LoadAsifTable(this.filterAsifSelected));
//       }
//       else {
//         this._notificationService.error('Echec de l\'enregistrement');
//       }
//     });


//   }

//   compareObjects(o1: any, o2: any) {
//     if(o1.label == o2.label && o1.id == o2.id )
//     return true;
//     else return false;
//   }

//   onChangeGMapAddress($event) {
//     this.asifDetail.operationDetail.gMapAddress=$event;
//     this.asifDetail.gMapSearchInfo.idGMapAddress = $event.id;
    
//     //TODO synchronize
//     // this._store.dispatch(new LoadAsifDetailSuccess(this.asifDetail));
    
//   }

//   movePrevious() {
//     this._router.navigate(
//       [`apps/account-statement-imports/${this.idImport}/account-statement-import-files`]);
//   }



  

}
