import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { fuseAnimations } from '@fuse/animations';
import { IAccountForDetail } from 'app/main/_models/account.model';
import { BankService } from 'app/main/_services/Referential/bank.service';
import { AccountTypeService } from 'app/main/_services/Referential/account-type.service';
import { AccountService } from 'app/main/_services/Referential/account.service';
import { IUser } from 'app/main/_models/user.model';
import { ISelect, EnumSelectType } from 'app/main/_models/generics/select.model';
import { ReferentialService } from 'app/main/_services/Referential/referential.service';
// import { ReferentialService } from 'app/main/_services/referential.service';
// import { ReferentialTestService } from 'app/main/_services/Referential/referential.service';


@Component({
  selector: 'account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
  animations   : fuseAnimations
})
export class AccountDetailComponent implements OnInit {
account: IAccountForDetail;
banks: ISelect[];
accountTypes: ISelect[];
pageType: string;
accountForm: FormGroup;

  constructor(
    private activatedRoute : ActivatedRoute,
    private formBuilder: FormBuilder,
    // private bankService: BankService,
    // private accountTypeService: AccountTypeService,
    private _referentialService: ReferentialService,
    // private accountService: AccountService,
    private notificationService: NotificationsService,
  ) {
      this.activatedRoute.data.subscribe(data => {
        this.account = data['account'];
        this.pageType=this.account.id==0 ? 'new' : 'edit';
        this.accountForm = this.createAccountForm();

        this.loadBankList();
        this.loadAccountTypeList();

      })
   }

  ngOnInit() {
  }

  createAccountForm() {
        return this.formBuilder.group({
            id              : [this.account.id],
            number          : [this.account.number],
            label           : [this.account.label],
            bank            : [this.account.bank],
            startAmount     : [this.account.startAmount],
            accountType     : [this.account.accountType],   
            alertThreshold  : [this.account.alertThreshold]
        });
  }

  loadBankList() {
    this._referentialService.bankService.GetSelectList(-1)
        .subscribe(response => {
          this.banks = response;
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
        this.notificationService.success('Sauvegarde réussi', 'Compte enregistré');
      }, error => {
        this.notificationService.error('Echec sauvegarde', error);
      })

  }

  create({ value, valid }: { value: IAccountForDetail, valid: boolean }) {
    this.bindAccount(value);   

    let user: IUser = JSON.parse(localStorage.getItem('user'));

    this._referentialService.accountService.create(user.id,this.account)
      .subscribe(next => {
        this.accountForm.reset(this.account);
        this.notificationService.success('Sauvegarde réussi', 'Compte enregistré');
      }, error => {
        this.notificationService.error('Echec sauvegarde', error);
      })
  }

  bindAccount(value: IAccountForDetail) {
    this.account.id=value.id;
    this.account.bank=value.bank;
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
