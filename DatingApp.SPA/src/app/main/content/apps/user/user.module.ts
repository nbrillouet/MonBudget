import { NgModule } from '@angular/core';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { UserService } from './user.service';
import { AuthGuard } from '../../../../_guards/auth.guard';
import { UserDetailResolver } from './user-detail/user-detail.resolver';
import { UserListResolver } from './user-list/user-list.resolver';
import { PreventUnsavedChanges } from '../../../../_guards/prevent-unsaved-changes.guard';
import { DialogGuardComponent } from '../../../../_guards/dialog-guard.component';

const routes = [
  {
      path     : '',
      component: UserListComponent,
      resolve  : { users: UserListResolver },
      canActivate: [AuthGuard]
  },
  {
      path     : ':idUser',
      component: UserDetailComponent,
      resolve  : { user: UserDetailResolver },
      canActivate: [AuthGuard],
      canDeactivate: [PreventUnsavedChanges]
  },
  {
      path      : '**',
      redirectTo: ''
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    UserListComponent,
    UserDetailComponent,
    DialogGuardComponent
  ],
  providers : [
    UserService,
    UserDetailResolver,
    UserListResolver,
    PreventUnsavedChanges
  ],
  entryComponents: [DialogGuardComponent]
})
export class UserModule { }