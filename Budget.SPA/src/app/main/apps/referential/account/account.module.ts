import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from '../../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
// import { AuthGuard } from '../../../../../_guards/auth.guard';
// import { AccountListResolver } from './account-list/account-list.resolver';
import { AccountDetailComponent } from './account-detail/account-detail.component';
// import { AccountDetailResolver } from './account-detail/account-detail.resolver';
import { AuthGuard } from 'app/_guards/auth.guard';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule } from '@fuse/components';
import { NgxsModule } from '@ngxs/store';
import { AccountForDetailState } from 'app/main/_ngxs/referential/account/account-detail/account-detail.state';

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
    FuseConfirmDialogModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([
      AccountForDetailState

  ])
  ],
  declarations: [
    AccountListComponent,
    AccountDetailComponent
  ],
  providers : [
    // AccountListResolver,
    // AccountDetailResolver
  ]
})
export class AccountModule { }
