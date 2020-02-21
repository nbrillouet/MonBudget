import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { NotificationsService } from 'angular2-notifications';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { IUser } from 'app/main/_models/user.model';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ReferentialService } from 'app/main/_services/Referential/referential.service';
import { UserDetailState } from 'app/main/_ngxs/user/user-detail/user-detail.state';
import { IBankAgencyAccounts } from 'app/main/_models/referential/bank-agency.model';
import { IAccountForDetail, IAccount } from 'app/main/_models/referential/account.model';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
  animations   : fuseAnimations
})
export class AccountListComponent implements OnInit {
@Select(UserDetailState.getUser) user$: Observable<IUser>;

bankAgencies: IBankAgencyAccounts[];
checkboxes: number[]=[];
hasSelectedAccounts: boolean = false;
linkUserToolTip: string;

confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

  constructor(
    public dialog: MatDialog,
    private _referentialService: ReferentialService,
    private notificationService: NotificationsService
  ) {
 

    this.user$.subscribe((user:IUser) => {
      if(user) {

          this.bankAgencies = user.bankAgencies;
      }
    });
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
            this._referentialService.accountService.delete(user.id,account)
            .subscribe(next => {
              this.deleteFromBankAgencies(account.id);
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

    this.linkUserToolTip=label;
  }

  deleteFromBankAgencies(idAccount:number) {
        
    for(let bankAgency of this.bankAgencies)
    {
      var index = bankAgency.accounts.findIndex(x=>x.id==idAccount);
      if (index > -1) {
        bankAgency.accounts.splice(index, 1);
        break;
      }
    }
  }

}
