import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { NotificationsService } from 'angular2-notifications';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { IUser, IUserForGroup } from 'app/main/_models/user.model';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { ReferentialService } from 'app/main/_services/Referential/referential.service';
import { UserDetailState } from 'app/main/_ngxs/user/user-detail/user-detail.state';
import { IBankAgencyAccounts } from 'app/main/_models/referential/bank-agency.model';
import { IAccountForDetail, IAccount, AccountForTable } from 'app/main/_models/referential/account.model';
import { AccountTableFilterSelectionState } from 'app/main/_ngxs/referential/account/account-table/account-table-filter-selection/account-table-filter-selection.state';
import { AccountTableFilterSelectedState } from 'app/main/_ngxs/referential/account/account-table/account-table-filter-selected/account-table-filter-selected.state';
import { AccountTableState } from 'app/main/_ngxs/referential/account/account-table/account-table.state';
import { Datas } from 'app/main/_models/generics/detail-info.model';
import { FilterAccountTableSelected, FilterAccountTableSelection } from 'app/main/_models/filters/account.filter';
import { MatTableFilter } from 'app/main/apps/web-component/mat-table-filter/model/mat-table-filter.model';
import { ACCOUNT_COLUMNS } from 'app/main/_constants/mat-table-filter-column.const';
import { Router } from '@angular/router';
import { HelperService } from 'app/main/_services/helper.service';
import { LoadAccountTableFilterSelection } from 'app/main/_ngxs/referential/account/account-table/account-table-filter-selection/account-table-filter-selection.action';
import { LoadAccountTable } from 'app/main/_ngxs/referential/account/account-table/account-table.action';
import { FilterSelection, FilterSelected } from 'app/main/_models/generics/filter.info.model';
import { SynchronizeAccountTableFilterSelected } from 'app/main/_ngxs/referential/account/account-table/account-table-filter-selected/account-table-filter-selected.action';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
  animations   : fuseAnimations
})
export class AccountListComponent implements OnInit {
  @Select(UserDetailState.getUser) user$: Observable<IUser>;

  @Select(AccountTableFilterSelectionState.get) accountTableFilterSelection$: Observable<FilterSelection<FilterAccountTableSelection>>;
  @Select(AccountTableFilterSelectedState.get) accountTableFilterSelected$: Observable<FilterSelected<FilterAccountTableSelected>>;
  @Select(AccountTableState.get) accountTable$: Observable<Datas<AccountForTable[]>>;
  
  accountTableFilterSelection$$: Subscription;
  accountTableFilterSelected$$: Subscription;
  accountTable$$: Subscription;
  
  filterAccountSelected: FilterAccountTableSelected;
  matTableFilter: MatTableFilter = {
    columns: ACCOUNT_COLUMNS,
    filterSelection$: this.accountTableFilterSelection$,
    filterSelected$: this.accountTableFilterSelected$,
    table$: this.accountTable$,
    toolbar: {buttonAdd: {enabled: true,tooltip:'Ajouter un compte bancaire' }, buttonDelete:{enabled:true,tooltip:'supprimer catégorie d\'opération(s)'}, buttonFullscreen:{enabled:true} }
  };

  constructor(
    private _router: Router,
    private _store: Store,
    private _helper: HelperService,
    private _referentialService: ReferentialService,
    private _notificationsService: NotificationsService
    ) {
      
      this.user$.subscribe((user:IUser) => {
        if(user) {
          debugger;
          let selected = <FilterAccountTableSelected> {user:<IUserForGroup> {id:user.id,idUserGroup:user.idUserGroup}};
          this._store.dispatch(new SynchronizeAccountTableFilterSelected(selected));

        }
      });

      this.accountTableFilterSelected$$ = this.accountTableFilterSelected$
        .subscribe(selected => {
          
          if(selected?.loader['filter-selected']?.loaded) {
            if(!this._helper.areEquals(this.filterAccountSelected,selected.selected)) {
              debugger;
              this.filterAccountSelected = this._helper.getDeepClone(selected.selected);//JSON.parse(JSON.stringify(selected.selected));
              this._store.dispatch(new LoadAccountTableFilterSelection(this.filterAccountSelected));
              this._store.dispatch(new LoadAccountTable(this.filterAccountSelected));
            }
          }
        });
   }

  ngOnInit() {
  
  }

  onRowClick($event) {

  }

  applyFilterSelected($event) {

  }

  applyFilterSelection($event) {

  }

  addItem($event) {
    this._router.navigate(['apps/referential/accounts/new']);
  }

  deleteItems($event) {
    this._referentialService.accountService.deleteList($event).subscribe(resp => {
      this._store.dispatch(new SynchronizeAccountTableFilterSelected(this.filterAccountSelected));
      this._notificationsService.success('Suppression réussie', `${$event.lentgh} compte(s) bancaire(s) supprimé(s)`);
    }, error => {
      this._notificationsService.error('Echec suppression', error);
    })
  }

}



// @Select(UserDetailState.getUser) user$: Observable<IUser>;

// currentUser: IUser;
// // bankAgencies: IBankAgencyAccounts[];
// checkboxes: number[]=[];
// hasSelectedAccounts: boolean = false;
// linkUserToolTip: string;

// confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

//   constructor(
//     public dialog: MatDialog,
//     private _referentialService: ReferentialService,
//     private notificationService: NotificationsService
//   ) {
 
//     this.user$.subscribe((user:IUser) => {
//       if(user) {
//         this.currentUser = user;
//       }
//     });
//   }

//   ngOnInit() {
    
//   }

//   onSelectedChange($event,idAccount:number)
//   {
//     if($event.checked) {
//       this.checkboxes.push(idAccount);
//     }
//     else
//     {
//       let index = this.checkboxes.indexOf(idAccount);
//       if (index > -1) {
//         this.checkboxes.splice(index, 1);
//       }
//     }
//     this.hasSelectedAccounts = this.checkboxes.length>0;

//   }

//   delete (account: IAccountForDetail) {
//     this.confirmDialogRef = this.dialog.open(FuseConfirmDialogComponent, {
//       disableClose: false
//     });

//     this.confirmDialogRef.componentInstance.confirmMessage = 'Etes vous sûr de supprimer ce compte?';

//     this.confirmDialogRef.afterClosed().subscribe(result => {
//         if (result)
//         {
//             this._referentialService.accountService.delete(this.currentUser.id,account)
//             .subscribe(next => {
//               this.deleteFromBankAgencies(account.id);
//               this.notificationService.success('Suppression réussi', 'Compte supprimé');
//             }, error => {
//               this.notificationService.error('Echec suppression', error);
//             })
//         }
//         this.confirmDialogRef = null;
//     });
//   }

//   detail(account: IAccount) {
    
//   }

//   visualizeLinkedUser(account: IAccountForDetail){
//     let label : string = 'Utilisateur(s) associé(s) à ce compte:\n';
//     for(let linkedUser of account.linkedUsers) {
//       label = label  + `${linkedUser.label} \n`;
//     }

//     this.linkUserToolTip=label;
//   }

//   deleteFromBankAgencies(idAccount:number) {
        
//     for(let bankAgency of this.currentUser.bankAgencies)
//     {
//       var index = bankAgency.accounts.findIndex(x=>x.id==idAccount);
//       if (index > -1) {
//         bankAgency.accounts.splice(index, 1);
//         break;
//       }
//     }
//   }

// }
