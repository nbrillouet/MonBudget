import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AuthGuard } from 'app/_guards/auth.guard';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule } from '@fuse/components';
import { NgxsModule } from '@ngxs/store';
import { AccountForDetailState } from 'app/main/_ngxs/referential/account/account-detail/account-detail.state';
import { AngularMaterialModule } from 'app/angular-material.module';
import { ReferentialService } from 'app/main/_services/Referential/referential.service';
import { AccountService } from 'app/main/_services/Referential/account.service';
import { AccountTableFilterSelectionState } from 'app/main/_ngxs/referential/account/account-table/account-table-filter-selection/account-table-filter-selection.state';
import { AccountTableFilterSelectedState } from 'app/main/_ngxs/referential/account/account-table/account-table-filter-selected/account-table-filter-selected.state';
import { AccountTableState } from 'app/main/_ngxs/referential/account/account-table/account-table.state';
import { MatTableFilterModule } from '../../web-component/mat-table-filter/mat-table-filter.module';

const routes = [
  {
      path     : '',
      component: AccountListComponent,
      // resolve  : { banks: AccountListResolver },
      canActivate: [AuthGuard]
  }
  ,
  {
      path     : ':idAccount',
      component: AccountDetailComponent,
      // resolve  : { account: AccountDetailResolver },
      canActivate: [AuthGuard]
  }
  
];

@NgModule({
  imports: [
    CommonModule,
    FuseSharedModule,
    AngularMaterialModule,
    FuseConfirmDialogModule,
    MatTableFilterModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([
      AccountForDetailState,
      AccountTableFilterSelectionState,
      AccountTableFilterSelectedState,
      AccountTableState
  ])
  ],
  declarations: [
    AccountListComponent,
    AccountDetailComponent
  ],
  providers : [
    ReferentialService,
    AccountService
    // AccountListResolver,
    // AccountDetailResolver
  ]
})
export class AccountModule { }
