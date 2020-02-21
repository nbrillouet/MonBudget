import { NgModule } from '@angular/core';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { UserService } from './user.service';
import { UserDetailResolver } from './user-detail/user-detail.resolver';
import { UserListResolver } from './user-list/user-list.resolver';
import { FileUploadModule } from 'ng2-file-upload';
import { AvatarEditorComponent } from './avatar-editor/avatar-editor.component';
import { GMapModule } from '../../g-map/g-map.module';
import { AuthGuard } from 'app/_guards/auth.guard';
import { FuseSharedModule } from '@fuse/shared.module';
import { PreventUnsavedChanges } from 'app/_guards/prevent-unsaved-changes.guard';
import { NgxsModule } from '@ngxs/store';
import { AngularMaterialModule } from 'app/angular-material.module';
import { MatTableFilterModule } from '../../web-component/mat-table-filter/mat-table-filter.module';
import { UserTableFilterSelectedState } from 'app/main/_ngxs/user/user-table/user-table-filter-selected/user-table-filter-selected.state';
import { UserTableFilterSelectionState } from 'app/main/_ngxs/user/user-table/user-table-filter-selection/user-table-filter-selection.state';
import { UserTableState } from 'app/main/_ngxs/user/user-table/user-table.state';
import { DatePipe } from '@angular/common';

const routes = [
  {
      path     : '',
      component: UserListComponent,
      // resolve  : { users: UserListResolver },
      canActivate: [AuthGuard]
  },
  {
      path     : ':idUser/detail',
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
    MatTableFilterModule,
    NgxsModule.forFeature([
      UserTableFilterSelectedState,
      UserTableFilterSelectionState,
      UserTableState
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
    PreventUnsavedChanges,
    DatePipe
  ]
})
export class UserModule { }