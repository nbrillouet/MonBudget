import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { fuseAnimations } from '@fuse/animations';
import { IUser } from 'app/main/_models/user.model';
import { ISelect, EnumSelectType } from 'app/main/_models/generics/select.model';
import { ReferentialService } from 'app/main/_services/Referential/referential.service';
import { IAccountForDetail } from 'app/main/_models/referential/account.model';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DataInfo } from 'app/main/_models/generics/detail-info.model';
import { AccountForDetailState } from 'app/main/_ngxs/referential/account/account-detail/account-detail.state';
import { LoadAccountForDetail, ClearAccountForDetail, LoadAccountForDetailSuccess, AccountForDetailChangeBankFamily, AccountForDetailChangeBankSubFamily } from 'app/main/_ngxs/referential/account/account-detail/account-detail.action';
import { ValidateIsUnknown } from './account-detail.validator';

@Component({
  selector: 'account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
  animations   : fuseAnimations
})
export class AccountDetailComponent implements OnInit {
@Select(AccountForDetailState.get) accountDetail$: Observable<DataInfo<IAccountForDetail>>;

firstLoad: boolean=true;
formLoaded: boolean;
accountDetail: IAccountForDetail;
accountForm: FormGroup;

// account: IAccountForDetail;
bankAgencies: ISelect[];
accountTypes: ISelect[];
pageType: string;


  constructor(
    private _activatedRoute : ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _store: Store,
    private _referentialService: ReferentialService,
    private _notificationService: NotificationsService,
  ) {
    this.accountDetail$.subscribe(accountDetail=>{

      if(accountDetail.loadingInfo.loaded) {

        this.accountDetail = JSON.parse(JSON.stringify(accountDetail.datas));
        if(this.firstLoad) {
          //creation du formulaire
          this.createForms();
          this.firstLoad=false;
        }

        this.formLoaded=true;
      }
    });
      // this._activatedRoute.data.subscribe(data => {
      //   this.account = data['account'];
      //   this.pageType=this.account.id==0 ? 'new' : 'edit';
      //   this.accountForm = this.createAccountForm();

      //   this.loadBankAgencyList();
      //   this.loadAccountTypeList();

      // })
   }

  ngOnInit() {
    this._activatedRoute.params.subscribe(routeParams => {

      let idAccount = routeParams['idAccount']=='new' ? 0 : routeParams['idAccount'];
      this._store.dispatch(new LoadAccountForDetail(idAccount));
    });
  }

  createForms() {
    this.accountForm = 
        this._formBuilder.group({
            id              : [this.accountDetail.id,[Validators.required]],
            number          : [this.accountDetail.number,[Validators.required]],
            label           : [this.accountDetail.label,[Validators.required]],
            bankFamily      : [this.accountDetail.bankFamily.selected,[Validators.required, ValidateIsUnknown]],
            bankSubFamily   : [this.accountDetail.bankSubFamily.selected,[Validators.required, ValidateIsUnknown]],
            bankAgency      : [this.accountDetail.bankAgency.selected,[Validators.required, ValidateIsUnknown]],
            startAmount     : [this.accountDetail.startAmount,[Validators.required]],
            accountType     : [this.accountDetail.accountType.selected,[Validators.required, ValidateIsUnknown]],   
            alertThreshold  : [this.accountDetail.alertThreshold,[Validators.required]]
        });
    
    this.accountForm.get('bankFamily').valueChanges
    .subscribe(val => {
      this._store.dispatch(new AccountForDetailChangeBankFamily(val));
      this.accountForm.controls['bankSubFamily'].setValue({id:1,label:'INCONNU'});
    });

    this.accountForm.get('bankSubFamily').valueChanges
    .subscribe(val => {
      this._store.dispatch(new AccountForDetailChangeBankSubFamily(val));
      this.accountForm.controls['bankAgency'].setValue({id:1,label:'INCONNU'});
    });
    
    this.accountForm.valueChanges.subscribe(val=>{
      this.accountDetail.id = val;
      // this.accountDetail.number = val.number;
      // this.accountDetail.label = val.label;
      // this.accountDetail.startAmount = val.startAmount;
      // this.accountDetail.accountType = val.accountType;
      // this.accountDetail.alertThreshold = val.alertThreshold;


      this._store.dispatch(new LoadAccountForDetailSuccess(this.accountDetail));
    });
  }

  ngOnDestroy() {
    this._store.dispatch(new ClearAccountForDetail());
  }

  save() {
    this._referentialService.accountService.saveDetail(this.accountDetail)
      .subscribe(resp=> {
        if(resp)
        {
          this._notificationService.success('Enregistrement effectué', `La catégorie d'opération est enregistrée`);
          // this._store.dispatch(new LoadOtfTableDatas(this.filterOtf.selected));
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




  // loadBankAgencyList() {
  //   this._referentialService.bankAgencyService.GetSelectList(-1)
  //       .subscribe(response => {
  //         this.bankAgencies = response;
  //       });
  // }

  // loadAccountTypeList() {
  //   this._referentialService.accountTypeService.GetSelectList(EnumSelectType.aucun)
  //       .subscribe(response => {
  //         this.accountTypes = response;
  //       });
  // }

  // update({ value, valid }: { value: IAccountForDetail, valid: boolean }) {
  //   this.bindAccount(value);   
 
  //   this._referentialService.accountService.update(this.account)
  //     .subscribe(next => {
  //       this.accountForm.reset(this.account);
  //       this._notificationService.success('Sauvegarde réussi', 'Compte enregistré');
  //     }, error => {
  //       this._notificationService.error('Echec sauvegarde', error);
  //     })

  // }

  // create({ value, valid }: { value: IAccountForDetail, valid: boolean }) {
  //   this.bindAccount(value);   

  //   let user: IUser = JSON.parse(localStorage.getItem('user'));

  //   this._referentialService.accountService.create(user.id,this.account)
  //     .subscribe(next => {
  //       this.accountForm.reset(this.account);
  //       this._notificationService.success('Sauvegarde réussi', 'Compte enregistré');
  //     }, error => {
  //       this._notificationService.error('Echec sauvegarde', error);
  //     })
  // }

  // bindAccount(value: IAccountForDetail) {
  //   this.account.id=value.id;
  //   this.account.bankAgency=value.bankAgency;
  //   this.account.accountType=value.accountType;
  //   this.account.label=value.label;
  //   this.account.number=value.number;
  //   this.account.startAmount=value.startAmount;
  //   this.account.alertThreshold=value.alertThreshold;
  // }

  // compareObjects(o1: any, o2: any) {
  //   if(o1.label == o2.label && o1.id == o2.id )
  //   return true;
  //   else return false
  // }

}
