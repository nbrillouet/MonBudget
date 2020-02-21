import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NotificationsService } from 'angular2-notifications';
import { ValidateIsUnknown, ValidatorIfLocalisable } from './account-statement-detail.validator';
import { IOperation } from 'app/main/_models/referential/operation.model';
import { GMapSearchInfo } from 'app/main/_models/g-map.model.';
import { ISelect } from 'app/main/_models/generics/select.model';
import { ReferentialService } from 'app/main/_services/Referential/referential.service';
import { AsService } from '../account-statement.service';
import { FilterAsDetail, FilterAsTableSelected } from 'app/main/_models/filters/account-statement.filter';
import { AsDetailState } from 'app/main/_ngxs/account-statement/account-statement-detail/account-statement-detail.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FilterSelected } from 'app/main/_models/generics/filter.info.model';
import { LoadAsDetail, asDetailChangeOperationTypeFamily, asDetailChangeOperationType, ClearAsDetail } from 'app/main/_ngxs/account-statement/account-statement-detail/account-statement-detail.action';
import { OperationTransverse } from 'app/main/_models/referential/operation-transverse.model';
import { IUser } from 'app/main/_models/user.model';
import { AsDetail } from 'app/main/_models/account-statement/account-statement-detail.model';
import { FilterOperation } from 'app/main/_models/filters/operation.filter';
import * as moment from 'moment';
import { Datas } from 'app/main/_models/generics/detail-info.model';
import { AsTableFilterSelectedState } from 'app/main/_ngxs/account-statement/as-table/as-table-filter-selected/as-table-filter-selected.state';
import { LoadAsTable } from 'app/main/_ngxs/account-statement/as-table/as-table.action';

@Component({
  selector: 'account-statement-detail',
  templateUrl: './account-statement-detail.component.html',
  styleUrls: ['./account-statement-detail.component.scss'],
  animations : fuseAnimations
})
export class AccountStatementDetailComponent implements OnInit {
  @Select(AsDetailState.get) asDetail$: Observable<Datas<AsDetail>>;
  @Select(AsTableFilterSelectedState.get) asTableFilterSelected$: Observable<FilterSelected<FilterAsTableSelected>>;

  user: IUser= JSON.parse(localStorage.getItem('currentUser'));
  filterAsTableSelected: FilterAsTableSelected;
  asDetail: AsDetail;
  formLoaded: boolean;

  idAccount: number;
     
  asDetailForm: FormGroup;
  operationAddForm: FormGroup;
  operationTransverseAddForm: FormGroup;
  
  isNewOperationTemplate: boolean;
  isNewOperationTransverseTemplate: boolean;
  firstLoad: boolean=true;

    constructor(

      private _activatedRoute: ActivatedRoute,
      private _store : Store,
      private _asService: AsService,
      private _referentialService: ReferentialService,
      private _formBuilder: FormBuilder,
      private _datePipe: DatePipe,
      private _notificationService: NotificationsService
  
    ) {
      this.asTableFilterSelected$.subscribe(asifTableFilterSelected=>{
        this.filterAsTableSelected = JSON.parse(JSON.stringify(asifTableFilterSelected.selected));
      });
  
      this.asDetail$.subscribe(asDetail=>{
        
        if(asDetail.loader['datas'] && asDetail.loader['datas'].loaded) {
          this.asDetail = JSON.parse(JSON.stringify(asDetail.datas));
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
        this.idAccount = routeParams['idAccount'];
        let idAccountStatement = routeParams['idAccountStatement'];
  
        this._store.dispatch(new LoadAsDetail(<FilterAsDetail> {idAs:idAccountStatement}));

        //chargement si page chargé directement sans passer par la liste
        if(this.filterAsTableSelected && this.filterAsTableSelected.idAccount==null && this.idAccount!=null) {
          // let filter = new FilterAsTable();
          // filter.selected.idAccount=this.idAccount;
          this.filterAsTableSelected = new FilterAsTableSelected();
          this.filterAsTableSelected.idAccount = this.idAccount;
        }
      });
    }
    
    ngOnDestroy() {
      this._store.dispatch(new ClearAsDetail());
    }
    
    bindAsDetail(value: any) {
      
      this.asDetail.operationTransverse.listSelected = this.asDetailForm.controls['operationTransverse'].value; 
    }

    createForms() {

      this.asDetailForm = this._formBuilder.group({
        
          operationMethod: [this.asDetail.operationMethod.selected, [Validators.required]],
          operationTypeFamily: [this.asDetail.operationTypeFamily.selected, [Validators.required, ValidateIsUnknown]],
          operationType: [this.asDetail.operationType.selected, [Validators.required, ValidateIsUnknown]],
          operation: [this.asDetail.operation.selected,[Validators.required, ValidateIsUnknown]],
          operationTransverse: [this.asDetail.operationTransverse.listSelected],
          amountOperation: [this.asDetail.amountOperation,[Validators.required]],
          labelOperation: [this.asDetail.labelOperation,[Validators.required]],
          dateIntegration: [this._datePipe.transform(this.asDetail.dateIntegration,"dd/MM/yyyy"),[Validators.required]],
          // dateIntegration:[this.asDetail.dateIntegration.toISOString(),[Validators.required]],
          operationKeywordTemp: [this.asDetail.operationDetail.keywordOperation,[Validators.required]],
          placeKeywordTemp: [this.asDetail.operationDetail.keywordPlace,[ValidatorIfLocalisable(this.asDetail.isLocalisable)]],
          operationPlace: [this.asDetail.operationPlace.selected,[Validators.required, ValidateIsUnknown]]
        });
  
      this.asDetailForm.get('operationMethod').valueChanges
        .subscribe(val => {
          this.asDetailForm.controls['operation'].setValue({id:0,label:'INCONNU'});
        });

      this.asDetailForm.get('operationTypeFamily').valueChanges
        .subscribe(val => {
          this._store.dispatch(new asDetailChangeOperationTypeFamily(val));
          this.asDetailForm.controls['operationType'].setValue({id:0,label:'INCONNU'});
        });
      
      this.asDetailForm.get('operationType').valueChanges
        .subscribe(val => {
          let operationFilter=<FilterOperation> { operationType: val, operationMethod:this.asDetail.operationMethod.selected}
          this._store.dispatch(new asDetailChangeOperationType(operationFilter));
          this.asDetailForm.controls['operation'].setValue({id:0,label:'INCONNU'});
        });

      this.asDetailForm.get('operation').valueChanges
        .subscribe(val => {
          if(this.asDetail.isLocalisable)
            this.asDetailForm.controls['operationPlace'].setValue({id:1,label:'INCONNU'});
          else
            this.asDetailForm.controls['operationPlace'].setValue({id:2,label:'NA'});
        });
      
      this.asDetailForm.get('operationPlace')
        .valueChanges
        .subscribe(val => {
          this.asDetail.operationPlace.selected=val;
          this.asDetail.gMapSearchInfo=null;
          if(this.asDetail.operationPlace.selected.id==4)
          {
            this.asDetail.gMapSearchInfo = <GMapSearchInfo> { 
              idGMapAddress: this.asDetail.operationDetail.gMapAddress.id>4 ? this.asDetail.operationDetail.gMapAddress.id  : 1,
              operationPositionSearch: this.asDetail.operationDetail.keywordOperation,
              operationPlaceSearch: this.asDetail.operationDetail.keywordPlace
            };
          } 
        });
      
      this.asDetailForm.valueChanges.subscribe(val=>{

        this.asDetail.operationMethod.selected = val.operationMethod;
        this.asDetail.operationTypeFamily.selected = val.operationTypeFamily;
        this.asDetail.operationType.selected = val.operationType;
        this.asDetail.operation.selected = val.operation;
        this.asDetail.operationTransverse.listSelected = val.operationTransverse;
        this.asDetail.amountOperation = val.amountOperation;
        this.asDetail.labelOperation = val.labelOperation;
        this.asDetail.dateIntegration = moment(val.dateIntegration,'DD/MM/YYYY').toDate();

        this.asDetail.operationDetail.keywordOperation = val.operationKeywordTemp;
        this.asDetail.operationDetail.keywordPlace = val.placeKeywordTemp;
        this.asDetail.operationPlace.selected = val.operationPlace;
        //TODO synchronize
        // this._store.dispatch(new LoadAsDetailSuccess(this.asDetail));
      });
       
      this.operationAddForm = this._formBuilder.group({
          operationLabelTemp: [null,[Validators.required]]
        });
  
      this.operationTransverseAddForm = this._formBuilder.group({
          operationTransverse: [null,[Validators.required]]
        });
    }
  
    
  
    addOperation() {
      const operationMethod:ISelect = this.asDetailForm.value.operationMethod;
      const operationType: ISelect  = this.asDetailForm.value.operationType;
      const keyword: string = this.operationAddForm.value.operationKeywordTemp;
      const label: string = this.operationAddForm.value.operationLabelTemp;
      
      const operation: IOperation = <IOperation> {
        id:0,
        idOperationMethod: operationMethod.id,
        idOperationType: operationType.id,
        keyword: keyword,
        label: label,
        reference: null
      };
      
      this._referentialService.operationService.Create(operation)
        .subscribe(operation => {
            let operationSelect = <ISelect>{id:operation.id,label:operation.label};
            //maj du data avec les infos operation
            this.asDetail.operation.selected = operationSelect;
            this.asDetailForm.controls['operation'].setValue(this.asDetail.operation.selected);
            this.asDetailForm.markAsDirty();

            //Ajout de la nouvelle opération dans la liste Operation
            this.asDetail.operation.list.push(operationSelect);
            this.isNewOperationTemplate=false;

            this._notificationService.success('Enregistrement effectué', `L'opération est enregistrée`);
        });
  
    }
    
    addOperationTransverse() {
      const label: string = this.operationTransverseAddForm.value.operationTransverse;
        
      const operationTransverse: OperationTransverse = <OperationTransverse> {
        id:0,
        label:label,
        idUser:this.user.id
      };
      
      this._referentialService.operationTransverseService.Create(operationTransverse)
        .subscribe(operationTransverse => {
            let operationTransverseSelect = <ISelect>{id:operationTransverse.id,label:operationTransverse.label};
            //maj du data avec les infos operation transverse
            this.asDetail.operationTransverse.listSelected.push(operationTransverseSelect);
            this.asDetailForm.controls['operationTransverse'].setValue(this.asDetail.operationTransverse.listSelected);
            this.asDetailForm.markAsDirty();

            //Ajout de la nouvelle opération transverse dans la liste Operation transverse
            this.asDetail.operationTransverse.list.push(operationTransverseSelect);
            this.isNewOperationTransverseTemplate=false;
            
            this._notificationService.success('Enregistrement effectué', `L'opération transverse est enregistrée`);
        });
 
    }
    
    updateAs() {

      // this.asDetail.amountOperation = this.asDetailForm.value.amountOperation;
      // this.asDetail.labelOperation = this.asDetailForm.value.labelOperation;
      // this.asDetail.operationMethod.selected = this.asDetailForm.value.operationMethod;
      // this.asDetail.operationType.selected = this.asDetailForm.value.operationType;
      // this.asDetail.operationTypeFamily.selected = this.asDetailForm.value.operationTypeFamily;
      // this.asDetail.operation.selected = this.asDetailForm.value.operation;
      

      this._asService.update(this.asDetail).subscribe(resp=> {
        if(resp==true)
        {
          this._notificationService.success('Enregistrement effectué', `Le relevé est enregistré`);
          
          this._store.dispatch(new LoadAsTable(this.filterAsTableSelected));
        }
        else {
          this._notificationService.error('Echec de l\'enregistrement');
        }
      });
      // ,
      // error => {
      //   this.notificationService.error('Echec de l\'enregistrement', error);
      // });
  
    }



    onChangeGMapAddress($event) {
      this.asDetail.operationDetail.gMapAddress=$event;
      this.asDetail.gMapSearchInfo.idGMapAddress = $event.id;
      
      //TODO synchronize
      // this._store.dispatch(new LoadAsDetailSuccess(this.asDetail));

    }

    compareObjects(o1: any, o2: any) {
      if(o1.label == o2.label && o1.id == o2.id )
      return true;
      else return false;
    }
  
    

}
