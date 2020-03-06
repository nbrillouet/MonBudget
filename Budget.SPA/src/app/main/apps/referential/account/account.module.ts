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
    ReferentialService,
    AccountService
    // AccountListResolver,
    // AccountDetailResolver
  ]
})
export class AccountModule { }
