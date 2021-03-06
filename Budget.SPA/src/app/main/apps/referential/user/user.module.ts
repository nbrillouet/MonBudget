import { NgModule } from '@angular/core';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
// import { SharedModule } from '../../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { UserService } from './user.service';
// import { AuthGuard } from '../../../../../_guards/auth.guard';
import { UserDetailResolver } from './user-detail/user-detail.resolver';
import { UserListResolver } from './user-list/user-list.resolver';
// import { PreventUnsavedChanges } from '../../../../../_guards/prevent-unsaved-changes.guard';
// import { DialogGuardComponent } from '../../../../../_guards/dialog-guard.component';
import { FileUploadModule } from 'ng2-file-upload';
import { AvatarEditorComponent } from './avatar-editor/avatar-editor.component';
import { GMapModule } from '../../g-map/g-map.module';
import { AuthGuard } from 'app/_guards/auth.guard';
import { FuseSharedModule } from '@fuse/shared.module';
import { PreventUnsavedChanges } from 'app/_guards/prevent-unsaved-changes.guard';
import { NgxsModule } from '@ngxs/store';
import { UserTableState } from 'app/main/_ngxs/user/user-list/user-list.state';
import { UserTableFilterState } from 'app/main/_ngxs/user/user-list-filter/user-list-filter.state';
import { AngularMaterialModule } from 'app/angular-material.module';

const routes = [
  {
      path     : '',
      component: UserListComponent,
      // resolve  : { users: UserListResolver },
      canActivate: [AuthGuard]
  },
  {
      path     : ':idUser',
      component: UserDetailComponent,
      resolve  : { user: UserDetailResolver },
      canActivate: [AuthGuard]
      // canDeactivate: [PreventUnsavedChanges]
  }
  // ,
  // {
  //     path      : '**',
  //     redirectTo: ''
  // }
];

@NgModule({
  imports: [
    FuseSharedModule,
    AngularMaterialModule,
    FileUploadModule,
    GMapModule,
    NgxsModule.forFeature([
      UserTableState,
      UserTableFilterState
    ]),
    RouterModule.forChild(routes)
  ],
  declarations: [
    UserListComponent,
    UserDetailComponent,
    AvatarEditorComponent
  ],
  providers : [
    UserService,
    UserDetailResolver,
    UserListResolver,
    PreventUnsavedChanges
  ]
})
export class UserModule { }