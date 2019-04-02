import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { fuseAnimations } from '@fuse/animations';
import { IAccountForDetail } from 'app/main/_models/account.model';
import { IUser } from 'app/main/_models/user.model';
import { ISelect, EnumSelectType } from 'app/main/_models/generics/select.model';
import { ReferentialService } from 'app/main/_services/Referential/referential.service';

@Component({
  selector: 'account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
  animations   : fuseAnimations
})
export class AccountDetailComponent implements OnInit {
account: IAccountForDetail;
bankAgencies: ISelect[];
accountTypes: ISelect[];
pageType: string;
accountForm: FormGroup;

  constructor(
    private _activatedRoute : ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _referentialService: ReferentialService,
    private _notificationService: NotificationsService,
  ) {
      this._activatedRoute.data.subscribe(data => {
        this.account = data['account'];
        this.pageType=this.account.id==0 ? 'new' : 'edit';
        this.accountForm = this.createAccountForm();

        this.loadBankAgencyList();
        this.loadAccountTypeList();

      })
   }

  ngOnInit() {
  }

  createAccountForm() {
        return this._formBuilder.group({
            id              : [this.account.id],
            number          : [this.account.number],
            label           : [this.account.label],
            bankAgency      : [this.account.bankAgency],
            startAmount     : [this.account.startAmount],
            accountType     : [this.account.accountType],   
            alertThreshold  : [this.account.alertThreshold]
        });
  }

  loadBankAgencyList() {
    this._referentialService.bankAgencyService.GetSelectList(-1)
        .subscribe(response => {
          this.bankAgencies = response;
        });
  }

  loadAccountTypeList() {
    this._referentialService.accountTypeService.GetSelectList(EnumSelectType.aucun)
        .subscribe(response => {
          this.accountTypes = response;
        });
  }

  update({ value, valid }: { value: IAccountForDetail, valid: boolean }) {
    this.bindAccount(value);   
 
    this._referentialService.accountService.update(this.account)
      .subscribe(next => {
        this.accountForm.reset(this.account);
        this._notificationService.success('Sauvegarde réussi', 'Compte enregistré');
      }, error => {
        this._notificationService.error('Echec sauvegarde', error);
      })

  }

  create({ value, valid }: { value: IAccountForDetail, valid: boolean }) {
    this.bindAccount(value);   

    let user: IUser = JSON.parse(localStorage.getItem('user'));

    this._referentialService.accountService.create(user.id,this.account)
      .subscribe(next => {
        this.accountForm.reset(this.account);
        this._notificationService.success('Sauvegarde réussi', 'Compte enregistré');
      }, error => {
        this._notificationService.error('Echec sauvegarde', error);
      })
  }

  bindAccount(value: IAccountForDetail) {
    this.account.id=value.id;
    this.account.bankAgency=value.bankAgency;
    this.account.accountType=value.accountType;
    this.account.label=value.label;
    this.account.number=value.number;
    this.account.startAmount=value.startAmount;
    this.account.alertThreshold=value.alertThreshold;
  }

  compareObjects(o1: any, o2: any) {
    if(o1.label == o2.label && o1.id == o2.id )
    return true;
    else return false
  }

}
