import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NotificationsService } from 'angular2-notifications';
import { ValidateIsUnknown, ValidatorIfLocalisable } from './account-statement-detail.validator';
import { AccountStatementService } from '../account-statement.service';
import { IAsDetail } from 'app/main/_models/account-statement.model';
import { IOperation } from 'app/main/_models/operation.model';
import { IGMapSearchInfo } from 'app/main/_models/g-map.model.';
import { ISelect, EnumSelectType } from 'app/main/_models/generics/select.model';
import { OperationTypeFamilyService } from 'app/main/_services/Referential/operation-type-family.service';
import { OperationMethodService } from 'app/main/_services/Referential/operation-method.service';
import { ReferentialService } from 'app/main/_services/Referential/referential.service';


@Component({
  selector: 'account-statement-detail',
  templateUrl: './account-statement-detail.component.html',
  styleUrls: ['./account-statement-detail.component.scss'],
  animations : fuseAnimations
})
export class AccountStatementDetailComponent implements OnInit {

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
      private _referentialService: ReferentialService,
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


        //Charger le detail de l'operation
        this.accountStatementService
          .getById(this.idAccountStatement)
          .subscribe(response=> {
            this.data = response;

            if(this.data.logoName!=null)
              this.logoUrl = `assets/images/Otf/${this.data.logoName}_128.png`;
              this.isNewOperationTemplateAvailable = this.data.operation.id==1;
              //charger la liste des lieux operation
              this.operationPlaces = [ {id:1,label:'INCONNU'},{id:3,label:'INTERNET'},{id:4,label:'AUTRES'}]

              //selectionner le lieu de l'operation dans la liste
              if(this.data.operationDetail.gMapAddress.id==1)
                this.operationPlaceSelected= this.operationPlaces[0];
              else if(this.data.operationDetail.gMapAddress.id==3)
                this.operationPlaceSelected= this.operationPlaces[1];
              else
              {
                this.operationPlaceSelected= this.operationPlaces[2];
                this.gMapSearchInfo = <IGMapSearchInfo> { 
                  idGMapAddress: this.data.operationDetail.gMapAddress.id
                  // operationPositionSearch: this.data.operationLabelTemp,
                  // operationPlaceSearch: this.data.placeLabelTemp
                  }
 
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
  
  

          });
  
        });
  
    }
  
    onOperationTypeFamilyChange(idOperationtypeFamily: number) {

      this.loadOperationTypeSelect(idOperationtypeFamily);
    }
  
    loadOperationTypeSelect(idOperationTypeFamily: number) {
      //charger la liste OperationType
      this._referentialService.operationTypeService.GetSelectList(idOperationTypeFamily,EnumSelectType.empty)
      .subscribe(response => {
        this.operationTypes = response;

      });
    }
    
    loadOperationMethodList() {
      this._referentialService.operationMethodService.GetSelectList(EnumSelectType.aucun)
          .subscribe(response => {
            this.operationMethods = response;

          });
    }
    
    loadOperationTypeFamilyList() {
      this._referentialService.operationTypeFamilyService.GetSelectList(this.data.idMovement,EnumSelectType.empty)
      .subscribe(response => {
        this.operationTypeFamilies = response;

      });
    }
  
    loadOperationList() {
      this._referentialService.operationService.GetList(this.data.operationMethod.id,this.data.operationType.id)
      .subscribe(response => {
        this.operations = response;

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
          operationKeywordTemp: [this.data.operationDetail.keywordOperation,[Validators.required]],
          placeKeywordTemp: [this.data.operationDetail.keywordPlace,[ValidatorIfLocalisable(this.data.isLocalisable)]],
  
          operationPlace: [this.operationPlaceSelected,[Validators.required, ValidateIsUnknown]]
        });
  
        this.operationForm.get('operationTypeFamily')
          .valueChanges
          .subscribe(val => {
    
            this.onOperationTypeFamilyChange(val.id);
          });
        
        this.operationForm.get('operationPlace')
          .valueChanges
          .subscribe(val => {
            this.gMapSearchInfo = <IGMapSearchInfo> { 
              idGMapAddress: val.id!=4 ? val.id : this.data.operationDetail.gMapAddress.id
              // operationPositionSearch: this.data.operationLabelTemp,
              // operationPlaceSearch: this.data.placeLabelTemp
            };
            
            this.data.operationDetail.gMapAddress.id = val.id!=4 ? val.id : this.data.operationDetail.gMapAddress.id;
            // const placeKeywordTemp = val.id==3 ? '--INTERNET--' : this.data.placeKeywordTemp;
            // this.operationForm.controls['placeKeywordTemp'].setValue(placeKeywordTemp);
            

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
      
      this._referentialService.operationService.Create(operation)
        .subscribe(operation => {
 
              //maj du data avec les infos operation
              this.data.operation = <ISelect>{id:operation.id,label:operation.label};
              this.operationForm.controls['operation'].setValue(this.data.operation);
  
   
              //charger la liste Operation
            this._referentialService.operationService.GetList(this.data.operationMethod.id,0)
            .subscribe(response => {
              this.operations = response;
        
  
         
              this.isNewOperationTemplate=false;
            });
            this.notificationService.success('Enregistrement effectué', `L'opération est enregistrée`);
        },
        error => {
          this.notificationService.error('Echec de l\'enregistrement', error);
        });
  
    }
  
    updateAsif() {
  
      this.data.amountOperation = this.operationForm.value.amountOperation;
      this.data.labelOperation = this.operationForm.value.labelOperation;
      this.data.operationMethod = this.operationForm.value.operationMethod;
      this.data.operationType = this.operationForm.value.operationType;
      this.data.operationTypeFamily = this.operationForm.value.operationTypeFamily;
      this.data.operation = this.operationForm.value.operation;
      
 
    }
  
    
  
    compareObjects(o1: any, o2: any) {
      if(o1.label == o2.label && o1.id == o2.id )
      return true;
      else return false
    }
  
    onChangeGMapAddress($event) {
      this.data.operationDetail.gMapAddress=$event;
    }

}
