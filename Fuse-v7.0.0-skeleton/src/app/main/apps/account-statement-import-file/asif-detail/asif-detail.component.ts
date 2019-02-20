import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NotificationsService } from 'angular2-notifications';
import { MatChipInputEvent } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { fuseAnimations } from '@fuse/animations';
import { IAsifDetail } from 'app/main/_models/account-statement-import-file.model';
import { IOperation } from 'app/main/_models/operation.model';
import { IGMapSearchInfo } from 'app/main/_models/g-map.model.';
import { ISelect, EnumSelectType } from 'app/main/_models/generics/select.model';
import { OperationTypeFamilyService } from 'app/main/_services/Referential/operation-type-family.service';
import { OperationMethodService } from 'app/main/_services/Referential/operation-method.service';
import { ReferentialService } from 'app/main/_services/Referential/referential.service';
import { AsifService } from '../asif.service';
import { ValidateIsUnknown, ValidatorIfLocalisable } from './asif-detail.validator';
import { LoadAsifTableDatas } from 'app/main/_ngxs/account-statement-import-file/asif-list/asif-list.action';
import { Store, Select } from '@ngxs/store';
import { AsifTableFilterState } from 'app/main/_ngxs/account-statement-import-file/asif-list-filter/asif-list-filter.state';
import { Observable } from 'rxjs';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { FilterAsifTable } from 'app/main/_models/filters/account-statement-import-file.filter';

@Component({
  selector: 'asif-detail',
  templateUrl: './asif-detail.component.html',
  styleUrls: ['./asif-detail.component.scss'],
  animations : fuseAnimations
})
export class AsifDetailComponent implements OnInit {
@Select(AsifTableFilterState.get) asifTableFilter$: Observable<FilterInfo<FilterAsifTable>>;
filterAsif: FilterAsifTable;

idImport: number;
idAccount: number;

idAccountStatementFile: number;
data: IAsifDetail;
operationMethods: ISelect[];
operationTypeFamilies: ISelect[];
operationTypes: ISelect[];
operationPlaces: ISelect[];
operationPlaceSelected: ISelect;
operations: IOperation[];
logoUrl: string;

operationForm: FormGroup;
operationAddForm: FormGroup;

geoDetailVisible: boolean;
geoVisible: boolean;

gMapSearchInfo: IGMapSearchInfo;

isNewOperationTemplate: boolean;
isNewOperationTemplateAvailable: boolean; //visibilité du panneau creation d'operation
categories: string[];


  constructor(
    private activatedRoute: ActivatedRoute,
    private _asifService: AsifService,
    // private referentialService: ReferentialService,
    private _referentialService: ReferentialService,
    // private _operationTypeFamilyService: OperationTypeFamilyService,
    // private _operationMethodService: OperationMethodService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private notificationService: NotificationsService,
    private _router: Router,
    private _store: Store

  ) {
    this.asifTableFilter$.subscribe(asifTableFilter=>{
      this.filterAsif = JSON.parse(JSON.stringify(asifTableFilter.filters));
    });

      this.logoUrl = "assets/images/Otf/OtfInconnu_128.png";
   }

  ngOnInit() {

    this.activatedRoute.params.subscribe(routeParams => {
      this.idImport = routeParams['idImport'];
      // this.idAccount = routeParams['idAccount'];
      this.idAccountStatementFile = routeParams['idImportFile'];

      //Charger le detail de l'operation
      this._asifService
        .getById(this.idAccountStatementFile)
        .subscribe(response=> {
          this.data = response;

          if(this.data.logoName!=null)
            this.logoUrl = `assets/images/Otf/${this.data.logoName}_128.png`;
            this.isNewOperationTemplateAvailable = this.data.operation.id==1;
            //charger la liste des lieux operation
            this.operationPlaces = [ {id:1,label:'INCONNU'},{id:3,label:'INTERNET'},{id:4,label:'AUTRES'}]

            if(this.data.isLocalisable==false)
            {
              this.operationPlaceSelected = {id:2,label:'N/A'};
              this.data.operationDetail.gMapAddress.id=2;
            }
            else
            //selectionner le lieu de l'operation dans la liste
            if(this.data.operationDetail.gMapAddress.id==1)
              this.operationPlaceSelected= this.operationPlaces[0];
            else if(this.data.operationDetail.gMapAddress.id==3)
              this.operationPlaceSelected= this.operationPlaces[1];
            else
            {
              this.operationPlaceSelected= this.operationPlaces[2];
              this.gMapSearchInfo = <IGMapSearchInfo> { 
                idGMapAddress: this.data.operationDetail.gMapAddress.id,
                operationPositionSearch: this.data.operationLabelTemp,
                operationPlaceSearch: this.data.placeLabelTemp
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
          this.loadOperationList(this.data.operationMethod.id,this.data.operationType.id);



        });

      });

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
    this._referentialService.operationTypeFamilyService.GetSelectList(this.data.idMovement,EnumSelectType.inconnu)
    .subscribe(response => {
      this.operationTypeFamilies = response;

    });
  }

  loadOperationList(idOperationMethod:number,idOperationType: number) {
    this._referentialService.operationService.GetList(idOperationMethod,idOperationType)
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
        operationKeywordTemp: [this.data.operationKeywordTemp,[Validators.required]],
        placeKeywordTemp: [this.data.placeKeywordTemp,[ValidatorIfLocalisable(this.operationPlaceSelected,this.data.isLocalisable)]],
        operationPlace: [this.operationPlaceSelected,[Validators.required, ValidateIsUnknown]]
      });

      this.operationForm.get('operationTypeFamily')
        .valueChanges
        .subscribe(val => {
          this.loadOperationTypeSelect(val.id);
        });
      
      this.operationForm.get('operationType')
        .valueChanges
        .subscribe(val => {
          this.loadOperationList(this.data.operationMethod.id,val.id);
        });
      
      this.operationForm.get('operationPlace')
        .valueChanges
        .subscribe(val => {
          this.operationPlaceSelected=val;
          this.data.operationDetail.gMapAddress.id = val.id!=4 ? val.id : this.data.operationDetail.gMapAddress.id;

          this.gMapSearchInfo=null;
          // this.data.isLocalisable=false;
          if(this.operationPlaceSelected.id==4)
          {
            // this.data.isLocalisable=true;
            this.gMapSearchInfo = <IGMapSearchInfo> { 
              idGMapAddress: val.id!=4 ? val.id : this.data.operationDetail.gMapAddress.id,
              operationPositionSearch: this.data.operationLabelTemp,
              operationPlaceSearch: this.data.placeLabelTemp
            };

          } 

        });
 
      this.operationAddForm = this.formBuilder.group({
        operationLabelTemp: [this.data.operationLabelTemp,[Validators.required]]

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


          //Ajout de la nouvelle opération dans la liste Operation
          this.operations.push(operation);
          this.isNewOperationTemplate=false;

          // //charger la liste Operation
          // this.referentialService.GetOperationList(this.data.operationMethod.id,this.data.operationType.id)
          // .subscribe(response => {
          //   this.operations = response;

          //   this.isNewOperationTemplate=false;
          // });
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
    
    this.data.operationKeywordTemp = this.operationForm.value.operationKeywordTemp;
    this.data.placeKeywordTemp = this.operationForm.value.placeKeywordTemp;

    this._asifService.update(this.data)
    .subscribe(resp=> {
      if(resp==true)
      {
        this.notificationService.success('Enregistrement effectué', `Le relevé est enregistré`);
        this._store.dispatch(new LoadAsifTableDatas(this.filterAsif.selected));
      }
      else {
        this.notificationService.error('Echec de l\'enregistrement');
      }
    },
    error => {
      this.notificationService.error('Echec de l\'enregistrement', error);
    });

  }

  compareObjects(o1: any, o2: any) {
    if(o1.label == o2.label && o1.id == o2.id )
    return true;
    else return false
  }

  onChangeGMapAddress($event) {
    this.data.operationDetail.gMapAddress=$event;
  }

  movePrevious() {
    this._router.navigate(
      [`apps/account-statement-imports/${this.idImport}/account-statement-import-files`]);
  }



  

}
