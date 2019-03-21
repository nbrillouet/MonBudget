import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NotificationsService } from 'angular2-notifications';
import { ValidateIsUnknown, ValidatorIfLocalisable } from './account-statement-detail.validator';
import { IOperation, OperationFilter } from 'app/main/_models/operation.model';
import { GMapSearchInfo } from 'app/main/_models/g-map.model.';
import { ISelect, EnumSelectType } from 'app/main/_models/generics/select.model';
import { ReferentialService } from 'app/main/_services/Referential/referential.service';
import { AsService } from '../account-statement.service';
import { FilterAsTable, FilterAsDetail } from 'app/main/_models/filters/account-statement.filter';
import { AsTableFilterState } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.state';
import { AsDetailState } from 'app/main/_ngxs/account-statement/account-statement-detail/account-statement-detail.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DataInfo } from 'app/main/_models/generics/detail-info.model';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { LoadAsDetail, asDetailChangeOperationTypeFamily, asDetailChangeOperationType } from 'app/main/_ngxs/account-statement/account-statement-detail/account-statement-detail.action';
import { OperationTransverse } from 'app/main/_models/referential/operation-transverse.model';
import { IUser } from 'app/main/_models/user.model';
import { LoadAsTableDatas } from 'app/main/_ngxs/account-statement/account-statement-list/account-statement-list.action';
import { LoadAsTableFilter } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.action';
import { LoadAsSolde } from 'app/main/_ngxs/account-statement/account-statement-solde/account-statement-solde.action';
import { AsDetail } from 'app/main/_models/account-statement/account-statement-detail.model';
import { LoadAsChartEvolutionBrut, LoadAsChartEvolutionNoIntTransfer, LoadAsChartEvolutionCustomOtf, LoadAsChartEvolution } from 'app/main/_ngxs/account-statement/account-statement-chart/account-statement-chart.action';


@Component({
  selector: 'account-statement-detail',
  templateUrl: './account-statement-detail.component.html',
  styleUrls: ['./account-statement-detail.component.scss'],
  animations : fuseAnimations
})
export class AccountStatementDetailComponent implements OnInit {
  @Select(AsDetailState.get) asDetail$: Observable<DataInfo<AsDetail>>;
  @Select(AsTableFilterState.get) asTableFilter$: Observable<FilterInfo<FilterAsTable>>;

  user: IUser;
  filterAsTable: FilterAsTable;
  asDetail: AsDetail;
  formLoaded: boolean;

  idAccount: number;
     
  asDetailForm: FormGroup;
  operationAddForm: FormGroup;
  operationTransverseAddForm: FormGroup;
  
  isNewOperationTemplate: boolean;
  isNewOperationTransverseTemplate: boolean;

    constructor(

      private _activatedRoute: ActivatedRoute,
      private _store : Store,
      private _asService: AsService,
      private _referentialService: ReferentialService,
      private _formBuilder: FormBuilder,
      private _datePipe: DatePipe,
      private _notificationService: NotificationsService
  
    ) {
      this.asTableFilter$.subscribe(asifTableFilter=>{
        // this.filterAs = JSON.parse(JSON.stringify(asifTableFilter.filters));
        console.log('sub this.filterAsTable',this.filterAsTable);
        this.filterAsTable = asifTableFilter.filters;
        
        console.log('sub this.filterAsTable',this.filterAsTable);
      });
  
      this.asDetail$.subscribe(asDetail=>{
        console.log('asDetail',asDetail);
        if(asDetail.loadingInfo.loaded) {
          // this.asDetail = JSON.parse(JSON.stringify(asDetail.datas));
          this.asDetail = asDetail.datas;
          //creation du formulaire
          this.createForms();
          this.formLoaded=true;
        }
      });

        // this.logoUrl = "assets/images/Otf/OtfInconnu_128.png";
     }
  
    ngOnInit() {
      
      this._activatedRoute.params.subscribe(routeParams => {
        this.idAccount = routeParams['idAccount'];
        let idAccountStatement = routeParams['idAccountStatement'];
        this.user = JSON.parse(localStorage.getItem('currentUser'));
  
        this._store.dispatch(new LoadAsDetail(<FilterAsDetail> {idAs:idAccountStatement,idUser: this.user.id}));
        console.log('------------');
        //chargement si page chargé directement sans passer par la liste
        if(this.filterAsTable && this.filterAsTable.selected.idAccount==null && this.idAccount!=null) {
          console.log('load filerAsTable I');
          let filter = new FilterAsTable();
          
          filter.selected.idAccount=this.idAccount;
          console.log('load filerAsTable II');
          this._store.dispatch(new LoadAsTableFilter(filter));
          this._store.dispatch(new LoadAsSolde(filter.selected));
          this._store.dispatch(new LoadAsChartEvolution(filter.selected));
          // this._store.dispatch(new LoadAsChartEvolutionBrut(filter.selected));
          // this._store.dispatch(new LoadAsChartEvolutionNoIntTransfer(filter.selected));
          // this._store.dispatch(new LoadAsChartEvolutionCustomOtf(filter.selected));
        }
      });
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
          operationKeywordTemp: [this.asDetail.operationDetail.keywordOperation,[Validators.required]],
          placeKeywordTemp: [this.asDetail.operationDetail.keywordPlace,[ValidatorIfLocalisable(this.asDetail.isLocalisable)]],
          operationPlace: [this.asDetail.operationPlace.selected,[Validators.required, ValidateIsUnknown]]
        });
  
      this.asDetailForm.get('operationTypeFamily').valueChanges
        .subscribe(val => {
          console.log(val);
          this._store.dispatch(new asDetailChangeOperationTypeFamily(val));
        });
      
      this.asDetailForm.get('operationType').valueChanges
        .subscribe(val => {
          let operationFilter=<OperationFilter> { operationType: val, operationMethod:this.asDetail.operationMethod.selected}
          this._store.dispatch(new asDetailChangeOperationType(operationFilter));
        });
      
      this.asDetailForm.get('operationPlace')
        .valueChanges
        .subscribe(val => {
          console.log('val',val);
          this.asDetail.operationPlace.selected=val;
          //this.asDetail.operationDetail.gMapAddress.id = val.id!=4 ? val.id : this.asDetail.operationDetail.gMapAddress.id;

          this.asDetail.gMapSearchInfo=null;
          // this.data.isLocalisable=false;
          if(this.asDetail.operationPlace.selected.id==4)
          {
            
            // this.data.isLocalisable=true;
            this.asDetail.gMapSearchInfo = <GMapSearchInfo> { 
              idGMapAddress: this.asDetail.operationDetail.gMapAddress.id!=4 ? 1 : this.asDetail.operationDetail.gMapAddress.id,
              operationPositionSearch: this.asDetail.operationDetail.keywordOperation,
              operationPlaceSearch: this.asDetail.operationDetail.keywordPlace
            };
            console.log('chargement gMapSearchInfo',this.asDetail.gMapSearchInfo);
          } 
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
            console.log('this.isNewOperationTemplate',this.isNewOperationTemplate);
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

      this.asDetail.amountOperation = this.asDetailForm.value.amountOperation;
      this.asDetail.labelOperation = this.asDetailForm.value.labelOperation;
      this.asDetail.operationMethod.selected = this.asDetailForm.value.operationMethod;
      this.asDetail.operationType.selected = this.asDetailForm.value.operationType;
      this.asDetail.operationTypeFamily.selected = this.asDetailForm.value.operationTypeFamily;
      this.asDetail.operation.selected = this.asDetailForm.value.operation;
      
      // this.asDetail.operationKeywordTemp = this.asDetailForm.value.operationKeywordTemp;
      // this.asDetail.placeKeywordTemp = this.asDetailForm.value.placeKeywordTemp;
  
      this._asService.update(this.asDetail).subscribe(resp=> {
        if(resp==true)
        {
          this._notificationService.success('Enregistrement effectué', `Le relevé est enregistré`);
          console.log('this.filterAsTable',this.filterAsTable);
          console.log('this.filterAsTable.selected',this.filterAsTable.selected);
          
          this._store.dispatch(new LoadAsTableDatas(this.filterAsTable.selected));
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

    bindAsDetail(value: any) {
      console.log('this.asDetailForm.controls',this.asDetailForm.controls['operationTransverse'].value);
      this.asDetail.operationTransverse.listSelected = this.asDetailForm.controls['operationTransverse'].value; 
    }

    onChangeGMapAddress($event) {
      this.asDetail.operationDetail.gMapAddress=$event;
    }

    compareObjects(o1: any, o2: any) {
      if(o1.label == o2.label && o1.id == o2.id )
      return true;
      else return false
    }
  
    

}
