import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '../../../../../core/animations';
import { ISelect } from '../../../../_models/Select';
import { IOperation } from '../../../../_models/Operation';
import { FormGroup, FormBuilder, Validators } from '../../../../../../../node_modules/@angular/forms';
import { IGMapSearchInfo } from '../../../../_models/GMap';
import { ActivatedRoute } from '../../../../../../../node_modules/@angular/router';
import { ImportStatementFileService } from '../../import-statement/import-statement-file/import-statement-file.service';
import { ReferentialService } from '../../../../_services/referential.service';
import { DatePipe } from '../../../../../../../node_modules/@angular/common';
import { NotificationsService } from '../../../../../../../node_modules/angular2-notifications';
import { ValidateIsUnknown, ValidatorIfLocalisable } from './account-statement-detail.validator';
import { IAsDetail } from '../../../../_models/account-statement.model';
import { AccountStatementService } from '../account-statement.service';

@Component({
  selector: 'account-statement-detail',
  templateUrl: './account-statement-detail.component.html',
  styleUrls: ['./account-statement-detail.component.scss'],
  animations : fuseAnimations
})
export class AccountStatementDetailComponent implements OnInit {

  // idImport: number;
  idAccount: number;
  idAccountStatement: number;

  data: IAsDetail;
  operationMethods: ISelect[];
  operationTypeFamilies: ISelect[];
  operationTypes: ISelect[];
  operationPlaces: ISelect[];
  operationPlaceSelected: ISelect;
  operations: IOperation[];
  logoUrl: string;
    
  operationForm: FormGroup;
  operationAddForm: FormGroup;
  // operationGeoLocForm: FormGroup;
  
  geoDetailVisible: boolean;
  geoVisible: boolean;
  
  gMapSearchInfo: IGMapSearchInfo;
  
  isNewOperationTemplate: boolean;
  isNewOperationTemplateAvailable: boolean; //visibilité du panneau creation d'operation
  categories: string[];
  
  
    constructor(
      private activatedRoute: ActivatedRoute,
      private accountStatementService: AccountStatementService,
      private referentialService: ReferentialService,
      private formBuilder: FormBuilder,
      private datePipe: DatePipe,
      private notificationService: NotificationsService
  
    ) {
        this.logoUrl = "assets/images/Otf/OtfInconnu_128.png";
     }
  
    ngOnInit() {
  
      this.activatedRoute.params.subscribe(routeParams => {
        // this.idImport = routeParams['idImport'];
        this.idAccount = routeParams['idAccount'];
        this.idAccountStatement = routeParams['idAccountStatement'];
        console.log('this.idAccount',this.idAccount);
        console.log('this.idAccountStatement',this.idAccountStatement);

        //Charger le detail de l'operation
        this.accountStatementService
          .getById(this.idAccountStatement)
          .subscribe(response=> {
            this.data = response;
            console.log('data',this.data);
            if(this.data.logoName!=null)
              this.logoUrl = `assets/images/Otf/${this.data.logoName}_128.png`;
              this.isNewOperationTemplateAvailable = this.data.operation.id==1;
              //charger la liste des lieux operation
              this.operationPlaces = [ {id:1,label:'INCONNU'},{id:3,label:'INTERNET'},{id:4,label:'AUTRES'}]
              console.log('this.operationPlaces',this.operationPlaces);
              //selectionner le lieu de l'operation dans la liste
              if(this.data.gMapAddress.id==1)
                this.operationPlaceSelected= this.operationPlaces[0];
              else if(this.data.gMapAddress.id==3)
                this.operationPlaceSelected= this.operationPlaces[1];
              else
              {
                this.operationPlaceSelected= this.operationPlaces[2];
                this.gMapSearchInfo = <IGMapSearchInfo> { 
                  idGMapAddress: this.data.gMapAddress.id
                  // operationPositionSearch: this.data.operationLabelTemp,
                  // operationPlaceSearch: this.data.placeLabelTemp
                  }
                  console.log('this.gMapSearchInfo',this.gMapSearchInfo);
              }
  
            //creation du formulaire
            this.createForms();
            //charger la liste OperationMethod
            this.loadOperationMethodList();
            //charger la liste OperationTypeFamily
            this.loadOperationTypeFamilyList();
            //charger la liste OperationType
            this.loadOperationTypeSelect(this.data.operationTypeFamily.id);
            //charger la liste Operation
            this.loadOperationList();
  
  
            console.log('this.operationForm',this.operationForm);
          });
  
        });
  
    }
  
    onOperationTypeFamilyChange(idOperationtypeFamily: number) {
      console.log('event',event);
      this.loadOperationTypeSelect(idOperationtypeFamily);
    }
  
    loadOperationTypeSelect(idOperationTypeFamily: number) {
      //charger la liste OperationType
      this.referentialService.GetOperationTypeSelectList(idOperationTypeFamily,-1)
      .subscribe(response => {
        this.operationTypes = response;
        console.log('operationTypes',this.operationTypes);
        console.log(this.operationForm);
      });
    }
    
    loadOperationMethodList() {
      this.referentialService.GetOperationMethodSelectList(-1)
          .subscribe(response => {
            this.operationMethods = response;
            console.log('operationMethods',this.operationMethods);
            console.log(this.operationForm);
          });
    }
    
    loadOperationTypeFamilyList() {
      this.referentialService.GetOperationTypeFamilySelectList(this.data.idMovement,-1)
      .subscribe(response => {
        this.operationTypeFamilies = response;
        console.log('operationTypeFamilies',this.operationTypeFamilies);
        console.log(this.operationForm);
      });
    }
  
    loadOperationList() {
      this.referentialService.GetOperationList(this.data.operationMethod.id,0)
      .subscribe(response => {
        this.operations = response;
        console.log('operations',this.operations);
        console.log(this.operationForm);
      });
    }
  
    createForms() {
  
      this.operationForm = this.formBuilder.group({
          operationMethod: [this.data.operationMethod, [Validators.required]],
          operationTypeFamily: [this.data.operationTypeFamily, [Validators.required, ValidateIsUnknown]],
          operationType: [this.data.operationType, [Validators.required, ValidateIsUnknown]],
          operation: [this.data.operation,[Validators.required, ValidateIsUnknown]],
          amountOperation: [this.data.amountOperation,[Validators.required]],
          labelOperation: [this.data.labelOperation,[Validators.required]],
          dateIntegration: [this.datePipe.transform(this.data.dateIntegration,"dd/MM/yyyy"),[Validators.required]],
          operationKeywordTemp: [null,[Validators.required]],
          // placeKeywordTemp: [this.data.placeKeywordTemp,[ValidatorIfLocalisable(this.data.isLocalisable)]],
  
          operationPlace: [this.operationPlaceSelected,[Validators.required, ValidateIsUnknown]]
        });
  
        this.operationForm.get('operationTypeFamily')
          .valueChanges
          .subscribe(val => {
            console.log('change');
            this.onOperationTypeFamilyChange(val.id);
          });
        
        this.operationForm.get('operationPlace')
          .valueChanges
          .subscribe(val => {
            this.gMapSearchInfo = <IGMapSearchInfo> { 
              idGMapAddress: val.id!=4 ? val.id : this.data.gMapAddress.id
              // operationPositionSearch: this.data.operationLabelTemp,
              // operationPlaceSearch: this.data.placeLabelTemp
            };
            
            this.data.gMapAddress.id = val.id!=4 ? val.id : this.data.gMapAddress.id;
            // const placeKeywordTemp = val.id==3 ? '--INTERNET--' : this.data.placeKeywordTemp;
            // this.operationForm.controls['placeKeywordTemp'].setValue(placeKeywordTemp);
            
            console.log('this.gMapSearchInfo',this.gMapSearchInfo);
          });
   
        this.operationAddForm = this.formBuilder.group({
          operationLabelTemp: [null,[Validators.required]]
  
        });
    }
  
    
  
    addOperation() {
      const operationMethod:ISelect = this.operationForm.value.operationMethod;
      const operationType: ISelect  =this.operationForm.value.operationType;
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
      
      this.referentialService.AddOperation(operation)
        .subscribe(operation => {
              console.log('operation',operation);
              //maj du data avec les infos operation
              this.data.operation = <ISelect>{id:operation.id,label:operation.label};
              this.operationForm.controls['operation'].setValue(this.data.operation);
  
            console.log('this.data.operation',this.data.operation);
              //charger la liste Operation
            this.referentialService.GetOperationList(this.data.operationMethod.id,0)
            .subscribe(response => {
              this.operations = response;
              console.log('operations',this.operations);
  
              console.log(this.operationForm);
              this.isNewOperationTemplate=false;
            });
            this.notificationService.success('Enregistrement effectué', `L'opération est enregistrée`);
        },
        error => {
          this.notificationService.error('Echec de l\'enregistrement', error);
        });
  
    }
  
    updateAsif() {
      console.log('dataBeforeApply',this.data);
      this.data.amountOperation = this.operationForm.value.amountOperation;
      this.data.labelOperation = this.operationForm.value.labelOperation;
      this.data.operationMethod = this.operationForm.value.operationMethod;
      this.data.operationType = this.operationForm.value.operationType;
      this.data.operationTypeFamily = this.operationForm.value.operationTypeFamily;
      this.data.operation = this.operationForm.value.operation;
      
      // this.data.operationKeywordTemp = this.operationForm.value.operationKeywordTemp;
      // this.data.placeKeywordTemp = this.operationForm.value.placeKeywordTemp;
  
      //onglet geolocalisation
      // let operationPlace = this.operationGeoLocForm.value.operationPlace;
      // switch(operationPlace.id)
      // {
      //   case 1:
      //     console.log('INCONNU');
      //     break;
      //   case 2: 
      //     console.log('NA');
      //     break;
      //   case 3:
      //     console.log('INTERNET');
      //     break;
      //   case 4:
      //     console.log('AUTRES A ENREGISTRER');
      //     break;
      // }
      
      //TODO Implementer
      // this.accountStatementService.update(this.data)
      // .subscribe(resp=> {
      //   if(resp==true)
      //   {
      //     this.notificationService.success('Enregistrement effectué', `Le relevé est enregistré`);
      //   }
      //   else {
      //     this.notificationService.error('Echec de l\'enregistrement');
      //   }
      // },
      // error => {
      //   this.notificationService.error('Echec de l\'enregistrement', error);
      // });
  
    }
  
    
  
    compareObjects(o1: any, o2: any) {
      if(o1.label == o2.label && o1.id == o2.id )
      return true;
      else return false
    }
  
    onChangeGMapAddress($event) {
      this.data.gMapAddress=$event;
    }

}
