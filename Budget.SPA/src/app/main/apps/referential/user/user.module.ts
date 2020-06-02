import { NgModule } from '@angular/core';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule } from '@angular/router';
import { UserService } from './user.service';
import { UserDetailResolver } from './user-detail/user-detail.resolver';
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
import { UserTableComponent } from './user-table/user-table.component';
import { Role } from 'app/main/_models/user.model';
import { MatDateFormats, MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';

// export const MY_DATE_FORMAT: MatDateFormats = {
//   parse: {
//     dateInput: 'DD/MM/YYYY',
//   },
//   display: {
//     dateInput: 'DD/MM/YYYY',
//     monthYearLabel: 'MMM YYYY',
//     dateA11yLabel: 'DD/MM/YYYY',
//     monthYearA11yLabel: 'MMMM YYYY',
//   },
// };

const routes = [
  {
    path     : '',
    component: UserTableComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.admin]}
  },
  {
    path     : ':idUser/detail',
    component: UserDetailComponent,
    resolve  : { user: UserDetailResolver },
    canActivate: [AuthGuard]
    // canDeactivate: [PreventUnsavedChanges]
  }

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
    UserTableComponent,
    UserDetailComponent,
    AvatarEditorComponent
  ],
  providers : [
    UserService,
    UserDetailResolver,
    PreventUnsavedChanges,
    DatePipe
    // { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    // { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT },
    // { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
    // { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    // { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT },
  ]
})
export class UserModule { }