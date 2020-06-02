import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { ReferentialService } from 'app/main/_services/Referential/referential.service';
import { AsService } from '../account-statement.service';
import { FilterAsDetail, FilterAsTableSelected } from 'app/main/_models/filters/account-statement.filter';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { AsForDetail } from 'app/main/_models/account-statement/account-statement-detail.model';
import * as moment from 'moment';
import { Datas, DetailInfo, DataInfo } from 'app/main/_models/generics/detail-info.model';
import { HelperService } from 'app/main/_services/helper.service';
import { AsDetailFilterState } from 'app/main/_ngxs/account-statement/account-statement-detail/as-detail-filter/as-detail-filter.state';
import { FilterForDetail } from 'app/main/_models/filters/shared/filterDetail.filter';
import { AsDetailState } from 'app/main/_ngxs/account-statement/account-statement-detail/as-detail.state';
import { LoadAsDetail, ClearAsDetail } from 'app/main/_ngxs/account-statement/account-statement-detail/as-detail.action';
import { AsDetailGenericComponent } from '../../shared/as-detail-generic/as-detail-generic.component';
import { ClearAsDetailFilter } from 'app/main/_ngxs/account-statement/account-statement-detail/as-detail-filter/as-detail-filter.action';
import { AsifService } from '../../account-statement-import-file/asif.service';
import { AsifForDetail } from 'app/main/_models/account-statement-import/account-statement-import-file.model';

// templateUrl: './account-statement-detail.component.html',
// styleUrls: ['./account-statement-detail.component.scss'],
@Component({
  selector: 'account-statement-detail',
  templateUrl: '../../shared/as-detail-generic/as-detail-generic.component.html',
  styleUrls: ['../../shared/as-detail-generic/as-detail-generic.component.scss'],
  animations : fuseAnimations
})
export class AccountStatementDetailComponent extends AsDetailGenericComponent implements OnInit {
  @Select(AsDetailState.get) detailInfo$: Observable<DetailInfo<AsForDetail, FilterForDetail>>;
  @Select(AsDetailFilterState.get) detailFilterInfo$: Observable<DataInfo<FilterAsDetail>>;
  
  $DetailInfo$: Subscription;
  $detailFilterInfo$: Subscription;
  // asForDetail: AsForDetail;

  // user: IUser= JSON.parse(localStorage.getItem('currentUser'));
  // filterAsTableSelected: FilterAsTableSelected;
  // asDetail: AsDetail;
  // formLoaded: boolean;

  // idAccount: number;
     
  // asDetailForm: FormGroup;
  // operationAddForm: FormGroup;
  // operationTransverseAddForm: FormGroup;
  
  // isNewOperationTemplate: boolean;
  // isNewOperationTransverseTemplate: boolean;
  // firstLoad: boolean=true;

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
            this.asGenForDetail = <AsifForDetail>x.datas;
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

      // this.asTableFilterSelected$.subscribe(selected=>{
      //   if(selected?.loader['filter-selected']?.loaded) {
      //     this.filterOperationSelected = selected.selected;
      //   }
      // });
  
      // this.$DetailInfo$ = this.detailInfo$.subscribe(x => {
      // // this.operationDetail$.subscribe(operationDetail=>{
      //   if(x?.loader['datas']?.loaded) {
      //     this.operationDetail = x.datas; //JSON.parse(JSON.stringify(x.datas));
      //     if(this.firstLoad) {
      //       //creation du formulaire
      //       this.createForms();
      //       this.firstLoad=false;
      //     }
      //     // this.formLoaded=true;
      //   }
      // });

    }
  
    ngOnInit() {
      this._activatedRoute.params.subscribe(routeParams => {
        this.from = 'AS';
        this.idAccount = routeParams['idAccount'];
        let idAccountStatement = routeParams['idAccountStatement'];
        this._store.dispatch(new LoadAsDetail(<FilterForDetail>{id:idAccountStatement}));
      });

      // this._activatedRoute.params.subscribe(routeParams => {
      //   this.idAccount = routeParams['idAccount'];
      //   let idAccountStatement = routeParams['idAccountStatement'];
  
      //   this._store.dispatch(new LoadAsDetail(<FilterAsDetail> {idAs:idAccountStatement}));

      //   //chargement si page chargé directement sans passer par la liste
      //   if(this.filterAsTableSelected && this.filterAsTableSelected.idAccount==null && this.idAccount!=null) {
      //     this.filterAsTableSelected = new FilterAsTableSelected();
      //     this.filterAsTableSelected.idAccount = this.idAccount;
      //   }
      // });
    }
    
    ngOnDestroy() {
      this._store.dispatch(new ClearAsDetail());
      this._store.dispatch(new ClearAsDetailFilter());
    }
    
    // public dispatch(){

    // }
    // bindAsDetail(value: any) {
      
    //   this.asForDetail.operationTransverse.listSelected = this.asDetailForm.controls['operationTransverse'].value; 
    // }

    // createForms() {
    //   this.asDetailForm = this._formBuilder.group({
    //       operationMethod: [this.asForDetail.operationMethod, [Validators.required]],
    //       operationTypeFamily: [this.asForDetail.operationTypeFamily, [Validators.required, ValidateIsUnknown]],
    //       operationType: [this.asForDetail.operationType, [Validators.required, ValidateIsUnknown]],
    //       operation: [this.asForDetail.operation,[Validators.required, ValidateIsUnknown]],
    //       operationTransverse: [this.asForDetail.operationTransverse],
    //       amountOperation: [this.asForDetail.amountOperation,[Validators.required]],
    //       labelOperation: [this.asForDetail.labelOperation,[Validators.required]],
    //       dateIntegration: [this.asForDetail.dateIntegration, [Validators.required]],
    //       operationKeywordTemp: [this.asForDetail.operationDetail.keywordOperation,[Validators.required]],
    //       placeKeywordTemp: [this.asForDetail.operationDetail.keywordPlace,[ValidatorIfLocalisable(this.asForDetail.isLocalisable)]],
    //       operationPlace: [this.asForDetail.operationPlace,[Validators.required, ValidateIsUnknown]]
    //     });
  
    //   this.asDetailForm.get('operationMethod').valueChanges
    //     .subscribe(val => {
    //       this.asDetailForm.controls['operation'].setValue({id:0,label:'INCONNU'});
    //     });

    //   this.asDetailForm.get('operationTypeFamily').valueChanges
    //     .subscribe(val => {
    //       //TODO REMAKE
    //       // this._store.dispatch(new asDetailChangeOperationTypeFamily(val));
    //       this.asDetailForm.controls['operationType'].setValue({id:0,label:'INCONNU'});
    //     });
      
    //   this.asDetailForm.get('operationType').valueChanges
    //     .subscribe(val => {
    //       let operationFilter=<FilterOperation> { operationType: val, operationMethod:this.asForDetail.operationMethod}
    //       //TODO REMAKE
    //       // this._store.dispatch(new asDetailChangeOperationType(operationFilter));
    //       this.asDetailForm.controls['operation'].setValue({id:0,label:'INCONNU'});
    //     });

    //   this.asDetailForm.get('operation').valueChanges
    //     .subscribe(val => {
    //       if(this.asForDetail.isLocalisable)
    //         this.asDetailForm.controls['operationPlace'].setValue({id:1,label:'INCONNU'});
    //       else
    //         this.asDetailForm.controls['operationPlace'].setValue({id:2,label:'NA'});
    //     });
      
    //   this.asDetailForm.get('operationPlace')
    //     .valueChanges
    //     .subscribe(val => {
    //       this.asForDetail.operationPlace=val;
    //       this.asForDetail.gMapSearchInfo=null;
    //       if(this.asForDetail.operationPlace.id==4)
    //       {
    //         this.asForDetail.gMapSearchInfo = <GMapSearchInfo> { 
    //           idGMapAddress: this.asForDetail.operationDetail.gMapAddress.id>4 ? this.asForDetail.operationDetail.gMapAddress.id  : 1,
    //           operationPositionSearch: this.asForDetail.operationDetail.keywordOperation,
    //           operationPlaceSearch: this.asForDetail.operationDetail.keywordPlace
    //         };
    //       } 
    //     });
      
    //   this.asDetailForm.valueChanges.subscribe(val=>{

    //     this.asForDetail.operationMethod = val.operationMethod;
    //     this.asForDetail.operationTypeFamily = val.operationTypeFamily;
    //     this.asForDetail.operationType = val.operationType;
    //     this.asForDetail.operation = val.operation;
    //     this.asForDetail.operationTransverse = val.operationTransverse;
    //     this.asForDetail.amountOperation = val.amountOperation;
    //     this.asForDetail.labelOperation = val.labelOperation;

    //     console.log('val.dateIntegration', val.dateIntegration);
    //     this.asForDetail.dateIntegration = val.dateIntegration != null ? this._helperService.getUtc(val.dateIntegration) : null;
    //     this.asForDetail.operationDetail.keywordOperation = val.operationKeywordTemp;
    //     this.asForDetail.operationDetail.keywordPlace = val.placeKeywordTemp;
    //     this.asForDetail.operationPlace = val.operationPlace;
    //     //TODO synchronize
    //     // this._store.dispatch(new LoadAsDetailSuccess(this.asDetail));
    //   });
       
    //   this.operationAddForm = this._formBuilder.group({
    //       operationLabelTemp: [null,[Validators.required]]
    //     });
  
    //   this.operationTransverseAddForm = this._formBuilder.group({
    //       operationTransverse: [null,[Validators.required]]
    //     });
    // }
    
    // addOperation() {
    //   const operationMethod:ISelect = this.asDetailForm.value.operationMethod;
    //   const operationType: ISelect  = this.asDetailForm.value.operationType;
    //   const keyword: string = this.operationAddForm.value.operationKeywordTemp;
    //   const label: string = this.operationAddForm.value.operationLabelTemp;
      
    //   const operation: IOperation = <IOperation> {
    //     id:0,
    //     idOperationMethod: operationMethod.id,
    //     idOperationType: operationType.id,
    //     keyword: keyword,
    //     label: label,
    //     reference: null
    //   };
      
    //   this._referentialService.operationService.Create(operation)
    //     .subscribe(operation => {
    //         let operationSelect = <ISelect>{id:operation.id,label:operation.label};
    //         //maj du data avec les infos operation
    //         this.asForDetail.operation = operationSelect;
    //         this.asDetailForm.controls['operation'].setValue(this.asForDetail.operation);
    //         this.asDetailForm.markAsDirty();

    //         //TODO REMAKE Ajout de la nouvelle opération dans la liste Operation
    //         // this.asForDetail.operation.list.push(operationSelect);
    //         this.isNewOperationTemplate=false;

    //         this._notificationService.success('Enregistrement effectué', `L'opération est enregistrée`);
    //     });
  
    // }
    
    // addOperationTransverse() {
    //   const label: string = this.operationTransverseAddForm.value.operationTransverse;
      
    //   const operationTransverse: OperationTransverse = <OperationTransverse> {
    //     id:0,
    //     label:label,
    //     idUser:this.user.id
    //   };
      
    //   this._referentialService.operationTransverseService.Create(operationTransverse)
    //     .subscribe(operationTransverse => {
    //         let operationTransverseSelect = <ISelect>{id:operationTransverse.id,label:operationTransverse.label};
    //         //maj du data avec les infos operation transverse
    //         this.asForDetail.operationTransverse.push(operationTransverseSelect);
    //         this.asDetailForm.controls['operationTransverse'].setValue(this.asForDetail.operationTransverse);
    //         this.asDetailForm.markAsDirty();

    //         //Ajout de la nouvelle opération transverse dans la liste Operation transverse
    //         //TODO REMAKE
    //         // this.asForDetail.operationTransverse.list.push(operationTransverseSelect);
    //         this.isNewOperationTransverseTemplate=false;
            
    //         this._notificationService.success('Enregistrement effectué', `L'opération transverse est enregistrée`);
    //     });
 
    // }
    
    // updateAs() {

    //   console.log('this.asDetail',this.asForDetail);

    //   // this._asService.update(this.asDetail).subscribe(resp=> {
    //   //   if(resp==true)
    //   //   {
    //   //     this._notificationService.success('Enregistrement effectué', `Le relevé est enregistré`);
          
    //   //     this._store.dispatch(new LoadAsTable(this.filterAsTableSelected));
    //   //   }
    //   //   else {
    //   //     this._notificationService.error('Echec de l\'enregistrement');
    //   //   }
    //   // });

  
    // }



    // onChangeGMapAddress($event) {
    //   this.asForDetail.operationDetail.gMapAddress=$event;
    //   this.asForDetail.gMapSearchInfo.idGMapAddress = $event.id;
      
    //   //TODO synchronize
    //   // this._store.dispatch(new LoadAsDetailSuccess(this.asDetail));

    // }

    // compareObjects(o1: any, o2: any) {
    //   if(o1.label == o2.label && o1.id == o2.id )
    //   return true;
    //   else return false;
    // }
  
    

}
