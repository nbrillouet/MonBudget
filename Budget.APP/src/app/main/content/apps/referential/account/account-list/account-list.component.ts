import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '../../../../../../core/animations';
import { ActivatedRoute } from '@angular/router';
import { IBankAccounts } from '../../../../../_models/bank.model';
import { IAccount, IAccountForDetail } from '../../../../../_models/account.model';
import { MatDialogRef, MatDialog } from '@angular/material';
import { FuseConfirmDialogComponent } from '../../../../../../core/components/confirm-dialog/confirm-dialog.component';
import { AccountService } from '../../../../../_services/Referential/account.service';
import { IUser } from '../../../../../_models/user.model';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
  animations   : fuseAnimations
})
export class AccountListComponent implements OnInit {
banks: IBankAccounts[];
checkboxes: number[]=[];
hasSelectedAccounts: boolean = false;
linkUserToolTip: string;

confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

  constructor(
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private accountService: AccountService,
    private notificationService: NotificationsService
  ) {
    this.activatedRoute.data.subscribe(data => {
      this.banks = data['banks'];
    })
  }

  ngOnInit() {
  }

  onSelectedChange($event,idAccount:number)
  {
    if($event.checked) {
      this.checkboxes.push(idAccount);
    }
    else
    {
      let index = this.checkboxes.indexOf(idAccount);
      if (index > -1) {
        this.checkboxes.splice(index, 1);
      }
    }
    this.hasSelectedAccounts = this.checkboxes.length>0;
    console.log($event);
    console.log(idAccount);
    console.log(this.checkboxes);
  }

  delete (account: IAccountForDetail) {
    this.confirmDialogRef = this.dialog.open(FuseConfirmDialogComponent, {
      disableClose: false
    });

    this.confirmDialogRef.componentInstance.confirmMessage = 'Etes vous sûr de supprimer ce compte?';

    this.confirmDialogRef.afterClosed().subscribe(result => {
        if (result)
        {
            let user: IUser = JSON.parse(localStorage.getItem('user'));
            this.accountService.delete(user.id,account)
            .subscribe(next => {
              this.deleteFromBanks(account.id);
              // this.accountForm.reset(this.account);
              this.notificationService.success('Suppression réussi', 'Compte supprimé');
            }, error => {
              this.notificationService.error('Echec suppression', error);
            })
        }
        this.confirmDialogRef = null;
    });
  }

  detail(account: IAccount) {
    
  }

  visualizeLinkedUser(account: IAccountForDetail){
    let label : string = 'Utilisateur(s) associé(s) à ce compte:\n';
    for(let linkedUser of account.linkedUsers) {
      label = label  + `${linkedUser.label} \n`;
    }
    console.log('label',label);
    this.linkUserToolTip=label;
  }

  deleteFromBanks(idAccount:number) {
        
    for(let bank of this.banks)
    {
      var index = bank.accounts.findIndex(x=>x.id==idAccount);
      if (index > -1) {
        bank.accounts.splice(index, 1);
        break;
      }
    }
  }

}
