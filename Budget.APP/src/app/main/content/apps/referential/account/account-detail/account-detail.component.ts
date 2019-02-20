import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAccountForDetail } from '../../../../../_models/account.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { fuseAnimations } from '../../../../../../core/animations';
import { BankService } from '../../../../../_services/Referential/bank.service';
import { ISelect } from '../../../../../_models/select.model';
import { AccountTypeService } from '../../../../../_services/Referential/account-type.service';
import { AccountService } from '../../../../../_services/Referential/account.service';
import { NotificationsService } from 'angular2-notifications';
import { IUser } from '../../../../../_models/user.model';

@Component({
  selector: 'app-account-detail',
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
    private bankService: BankService,
    private accountTypeService: AccountTypeService,
    private accountService: AccountService,
    private notificationService: NotificationsService,
  ) {
      this.activatedRoute.data.subscribe(data => {
        this.account = data['account'];
        console.log('this.account',this.account);
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
    this.bankService.GetSelectList(-1)
        .subscribe(response => {
          this.banks = response;
        });
  }

  loadAccountTypeList() {
    this.accountTypeService.GetSelectList(-1)
        .subscribe(response => {
          this.accountTypes = response;
        });
  }

  update({ value, valid }: { value: IAccountForDetail, valid: boolean }) {
    this.bindAccount(value);   
 
    this.accountService.update(this.account)
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

    this.accountService.create(user.id,this.account)
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
