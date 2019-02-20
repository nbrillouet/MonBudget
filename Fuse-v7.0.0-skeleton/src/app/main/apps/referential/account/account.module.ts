import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from '../../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
// import { AuthGuard } from '../../../../../_guards/auth.guard';
// import { AccountListResolver } from './account-list/account-list.resolver';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountDetailResolver } from './account-detail/account-detail.resolver';
import { AuthGuard } from 'app/_guards/auth.guard';
import { FuseSharedModule } from '@fuse/shared.module';

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
      resolve  : { account: AccountDetailResolver },
      canActivate: [AuthGuard]
  }
  
];

@NgModule({
  imports: [
    CommonModule,
    FuseSharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AccountListComponent,
    AccountDetailComponent
  ],
  providers : [
    // AccountListResolver,
    AccountDetailResolver
  ]
})
export class AccountModule { }
