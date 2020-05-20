import { AsForDetail } from 'app/main/_models/account-statement/account-statement-detail.model';
import { AsifDetail, AsifForDetail } from 'app/main/_models/account-statement-import/account-statement-import-file.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateIsUnknown, ValidatorIfLocalisable } from './as-detail-generic.validator';
import { FilterOperationType } from 'app/main/_models/filters/operation.filter';
import { GMapSearchInfo } from 'app/main/_models/g-map.model.';
import { HelperService } from 'app/main/_services/helper.service';
import { ISelect } from 'app/main/_models/generics/select.model';
import { IOperation } from 'app/main/_models/referential/operation.model';
import { ReferentialService } from 'app/main/_services/Referential/referential.service';
import { NotificationsService } from 'angular2-notifications';
import { OperationTransverse } from 'app/main/_models/referential/operation-transverse.model';
import { IUser } from 'app/main/_models/user.model';
import { FilterAsDetail } from 'app/main/_models/filters/account-statement.filter';
import { Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { asDetailFilterChangeOtf, asDetailFilterChangeOt, LoadAsDetailFilter } from 'app/main/_ngxs/account-statement/account-statement-detail/as-detail-filter/as-detail-filter.action';
import { SynchronizeAsDetail } from 'app/main/_ngxs/account-statement/account-statement-detail/as-detail.action';
import { AsService } from '../../account-statement/account-statement.service';
import { UserDetailState } from 'app/main/_ngxs/user/user-detail/user-detail.state';
import { Observable } from 'rxjs';
import { AsifService } from '../../account-statement-import-file/asif.service';
import { FilterAsifDetail } from 'app/main/_models/filters/account-statement-import-file.filter';
import { asifDetailFilterChangeOtf, asifDetailFilterChangeOt, LoadAsifDetailFilter } from 'app/main/_ngxs/account-statement-import-file/asif-detail/asif-detail-filter/asif-detail-filter.action';
import { SynchronizeAsifDetail } from 'app/main/_ngxs/account-statement-import-file/asif-detail/asif-detail.action';
import { EnumOperationMethod } from 'app/main/_constants/enum-operation-model.model';

export class AsDetailGenericComponent {
  @Select(UserDetailState.getUser) user$: Observable<IUser>;
  
  asGenForDetail: AsifForDetail;
  asGenDetailFilter: FilterAsDetail | FilterAsifDetail;

  asGenDetailForm: FormGroup;
  operationAddForm: FormGroup;
  operationTransverseAddForm: FormGroup;

  firstLoad: boolean=true;
  isNewOperationTemplate: boolean;
  isNewOperationTransverseTemplate: boolean;
  currentUser: IUser;
  idAccount: number;
  idImport: number;
  from: string;

  constructor(
    public _formBuilder: FormBuilder,
    public _helperService: HelperService,
    public _referentialService: ReferentialService,
    public _notificationService: NotificationsService,
    public _router: Router,
    public _store: Store,
    public _asService: AsService,
    public _asifService: AsifService
  ) {
    this.user$.subscribe((user:IUser) => {
      this.currentUser = user;
    });
   }

  ngOnInit() {
  }

  createForms() {
    this.asGenDetailForm = this._formBuilder.group({
        operationMethod: [this.asGenForDetail.operationMethod, [Validators.required]],
        operationTypeFamily: [this.asGenForDetail.operationTypeFamily, [Validators.required, ValidateIsUnknown]],
        operationType: [this.asGenForDetail.operationType, [Validators.required, ValidateIsUnknown]],
        operation: [this.asGenForDetail.operation,[Validators.required, ValidateIsUnknown]],
        operationTransverse: [this.asGenForDetail.operationTransverse],
        amountOperation: [this.asGenForDetail.amountOperation,[Validators.required]],
        labelOperation: [this.asGenForDetail.labelOperation,[Validators.required]],
        dateIntegration: [this.asGenForDetail.dateIntegration, [Validators.required]],
        operationKeywordTemp: [this.from=='AS' 
          ? this.asGenForDetail.operationDetail.keywordOperation
          : this.asGenForDetail.operationKeywordTemp
          ,[Validators.required]],
        placeKeywordTemp: [ this.from=='AS' 
          ? this.asGenForDetail.operationDetail.keywordPlace
          : this.asGenForDetail.placeKeywordTemp 
          ,[ValidatorIfLocalisable(this.asGenForDetail.isLocalisable)]],
        operationPlace: [this.asGenForDetail.operationPlace,[Validators.required, ValidateIsUnknown]]
      });

    this.asGenDetailForm.get('operationMethod').valueChanges
      .subscribe(val => {
        this.asGenForDetail.isLocalisable = (val.id == EnumOperationMethod.paiementCarte || val.id == EnumOperationMethod.retraitCarte);
        //recharger les combo filtres (pour operation place)
        this._store.dispatch(new LoadAsDetailFilter(this.asGenForDetail));
        
        console.log('this.asGenForDetail.isLocalisable',this.asGenForDetail.isLocalisable);
        this.asGenDetailForm.controls['operation'].setValue({id:0,label:'INCONNU'});
      });

    this.asGenDetailForm.get('operationTypeFamily').valueChanges
      .subscribe(val => {
        switch(this.from) {
          case 'AS':
            this._store.dispatch(new asDetailFilterChangeOtf(val));
            break;
          case 'ASIF':
              this._store.dispatch(new asifDetailFilterChangeOtf(val));
              break;
        }

        this.asGenDetailForm.controls['operationType'].setValue({id:0,label:'INCONNU'});
    });
    
    this.asGenDetailForm.get('operationType').valueChanges
      .subscribe(val => {
        let filterOperationType=<FilterOperationType> { operationType: val, operationMethod:this.asGenForDetail.operationMethod}
        switch(this.from) {
          case 'AS':
            this._store.dispatch(new asDetailFilterChangeOt(filterOperationType));
            break;
          case 'ASIF':
            this._store.dispatch(new asifDetailFilterChangeOt(filterOperationType));
            break;
        }

        this.asGenDetailForm.controls['operation'].setValue({id:0,label:'INCONNU'});
      });

    this.asGenDetailForm.get('operation').valueChanges
      .subscribe(val => {
        if(this.asGenForDetail.isLocalisable)
          this.asGenDetailForm.controls['operationPlace'].setValue({id:1,label:'INCONNU'});
        else
          this.asGenDetailForm.controls['operationPlace'].setValue({id:2,label:'NA'});
      });
    
    this.asGenDetailForm.get('operationPlace')
      .valueChanges
      .subscribe(val => {
        this.asGenForDetail.operationPlace=val;
        this.asGenForDetail.gMapSearchInfo = this.loadGMapSearchInfo(this.asGenForDetail);
    });
    
    this.asGenDetailForm.valueChanges.subscribe(val=>{
      this.asGenForDetail.operationMethod = val.operationMethod;
      this.asGenForDetail.operationTypeFamily = val.operationTypeFamily;
      this.asGenForDetail.operationType = val.operationType;
      this.asGenForDetail.operation = val.operation;
      this.asGenForDetail.operationTransverse = val.operationTransverse;
      this.asGenForDetail.amountOperation = val.amountOperation;
      this.asGenForDetail.labelOperation = val.labelOperation;

      this.asGenForDetail.dateIntegration = val.dateIntegration != null ? this._helperService.getUtc(val.dateIntegration) : null;
      this.asGenForDetail.operationDetail.keywordOperation = val.operationKeywordTemp;
      this.asGenForDetail.operationDetail.keywordPlace = val.placeKeywordTemp;
      this.asGenForDetail.operationPlace = val.operationPlace;

      this.synchronizeStore(this.asGenForDetail);
      
      console.log('obj',this.asGenForDetail);
      console.log('form',this.asGenDetailForm);
    });
     
    this.operationAddForm = this._formBuilder.group({
        operationLabelTemp: [this.from=='AS' 
          ? this.asGenForDetail.operationDetail.keywordOperation
          : this.asGenForDetail.operationLabelTemp, [Validators.required]]
      });

    this.operationTransverseAddForm = this._formBuilder.group({
        operationTransverse: [null,[Validators.required]]
      });

    this.asGenForDetail.gMapSearchInfo = this.loadGMapSearchInfo(this.asGenForDetail);
  }

  addOperation() {
    const operationMethod:ISelect = this.asGenDetailForm.value.operationMethod;
    const operationType: ISelect  = this.asGenDetailForm.value.operationType;
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
          this.asGenForDetail.operation = operationSelect;
          this.asGenDetailForm.controls['operation'].setValue(this.asGenForDetail.operation);
          this.asGenDetailForm.markAsDirty();
          
          //rafraichir liste operation
          this.refreshList(this.asGenForDetail);

          this.isNewOperationTemplate=false;

          this._notificationService.success('Enregistrement effectué', `L'opération est enregistrée`);
      });

  }

  addOperationTransverse() {
    const label: string = this.operationTransverseAddForm.value.operationTransverse;
    
    const operationTransverse: OperationTransverse = <OperationTransverse> {
      id:0,
      label:label,
      idUser:this.currentUser.id
    };
    
    this._referentialService.operationTransverseService.Create(operationTransverse)
      .subscribe(operationTransverse => {
          let operationTransverseSelect = <ISelect>{id:operationTransverse.id,label:operationTransverse.label};
          //maj du data avec les infos operation transverse
          this.asGenForDetail.operationTransverse.push(operationTransverseSelect);
          this.asGenDetailForm.controls['operationTransverse'].setValue(this.asGenForDetail.operationTransverse);
          this.asGenDetailForm.markAsDirty();

          //rafraichir liste operation transverse
          this.refreshList(this.asGenForDetail);

          this.isNewOperationTransverseTemplate=false;
          
          this._notificationService.success('Enregistrement effectué', `L'opération transverse est enregistrée`);
      });

  }

  updateAsGen() {
    if(this.from=='AS') {
      this._asService.update(this.asGenForDetail).subscribe(resp=> {
        if(resp==true)
        {
          this._notificationService.success('Enregistrement effectué', `Le relevé est enregistré`);
          
          this.asGenDetailForm.markAsPristine();
          // this._store.dispatch(new LoadAsTable(this.filterAsTableSelected));
        }
        else {
          this._notificationService.error('Echec de l\'enregistrement');
        }
      });
    }

  }

  onChangeGMapAddress($event) {
    this.asGenForDetail.operationDetail.gMapAddress=$event;
    this.asGenForDetail.gMapSearchInfo.idGMapAddress = $event.id;
    
    this.synchronizeStore(this.asGenForDetail);
    
    this.asGenDetailForm.markAsDirty();
  }

  synchronizeStore(detail) {
    switch(this.from) {
      case 'AS':
        this._store.dispatch(new SynchronizeAsDetail(detail));
        break;
      case 'ASIF':
        this._store.dispatch(new SynchronizeAsifDetail(detail));
        break;
    }
  }

  refreshList(detail){
    switch(this.from) {
      case 'AS':
        this._store.dispatch(new LoadAsDetailFilter(detail));
        break;
      case 'ASIF':
        this._store.dispatch(new LoadAsifDetailFilter(detail));
        break;
    }
  }

  loadGMapSearchInfo(detail: AsifForDetail){
    detail.gMapSearchInfo = null;
    if(detail.operationPlace.id==4)
    {
      detail.gMapSearchInfo = <GMapSearchInfo> { 
        idGMapAddress: detail.operationDetail.gMapAddress.id>4 ? this.asGenForDetail.operationDetail.gMapAddress.id  : 1,
        operationPositionSearch: this.from == 'AS' 
          ? detail.operationDetail.keywordOperation
          : detail.operationLabelTemp,
        operationPlaceSearch: this.from == 'AS' 
          ? detail.operationDetail.keywordPlace
          : detail.placeLabelTemp
      };
    } 

    return detail.gMapSearchInfo;
  }


  goBack() {
    switch(this.from) {
      case 'AS':
        this._router.navigate([`/apps/account-statements/accounts/${this.idAccount}`]);
        break;
      case 'ASIF':
        this._router.navigate([`/apps/account-statement-imports/${this.idImport}`]);
        break;
    }
  }



  compareObjects(o1: any, o2: any) {
    if(o1.label == o2.label && o1.id == o2.id )
    return true;
    else return false;
  }
}
