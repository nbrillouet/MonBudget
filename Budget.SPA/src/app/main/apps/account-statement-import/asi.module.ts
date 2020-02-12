
import { FileUploadModule } from "ng2-file-upload";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AgmCoreModule } from '@agm/core';
import { GMapModule } from "../g-map/g-map.module";
import { AuthGuard } from "app/_guards/auth.guard";
import { FuseSharedModule } from "@fuse/shared.module";
import { PreventUnsavedChanges } from "app/_guards/prevent-unsaved-changes.guard";
import { NgxsModule } from "@ngxs/store";
import { AsifTableState } from "app/main/_ngxs/account-statement-import-file/asif-list/asif-list.state";
import { AsifTableFilterState } from "app/main/_ngxs/account-statement-import-file/asif-list-filter/asif-list-filter.state";
import { AsifDetailComponent } from "../account-statement-import-file/asif-detail/asif-detail.component";
import { AsifMainComponent } from "../account-statement-import-file/asif-main/asif-main.component";
import { AsifListComponent } from "../account-statement-import-file/asif-list/asif-list.component";
import { AsifStateComponent } from "../account-statement-import-file/asif-state/asif-state.component";
import { AsiUploadComponent } from "./asi-upload/asi-upload.component";
import { AsifService } from "../account-statement-import-file/asif.service";
import { AsiMainComponent } from "./asi-main/asi-main.component";
import { AsiTableState } from "app/main/_ngxs/account-statement-import/asi-list/asi-list.state";
import { AsiTableFilterState } from "app/main/_ngxs/account-statement-import/asi-list-filter/asi-list-filter.state";
import { AsiListComponent } from "./asi-list/asi-list.component";
import { AsiFilterComponent } from "./asi-filter/asi-filter.component";
import { AsiService } from "./asi.service";
import { AsifDetailState } from "app/main/_ngxs/account-statement-import-file/asif-detail/asif-detail.state";
import { AngularMaterialModule } from "app/angular-material.module";
import { MatTableFilterModule } from "../web-component/mat-table-filter/mat-table-filter.module";

const routes = [
    {
        path     : '',
        component: AsiMainComponent,
        // resolve  : { users: ImportStatementListResolver },
        canActivate: [AuthGuard]
    },
    {
        // ':idImport/accounts/:idAccount/account-statement-import-files/:idImportFile/detail'
        path     : ':idImport/account-statement-import-files/:idImportFile/detail',
        component: AsifDetailComponent,
        canActivate: [AuthGuard]
    },
    {
        // ':idImport/accounts/:idAccount/account-statement-import-files'
        path     : ':idImport/account-statement-import-files',
        component: AsifMainComponent,
        canActivate: [AuthGuard]
    },
    {
        path      : '**',
        redirectTo: ''
    }
  ];

  @NgModule({
    imports: [
      FuseSharedModule,
      AngularMaterialModule,
      FileUploadModule,
      MatTableFilterModule,
      GMapModule,
      NgxsModule.forFeature([
        AsiTableState,
        AsiTableFilterState,
        AsifTableState,
        AsifTableFilterState,
        AsifDetailState

      ]),
      RouterModule.forChild(routes)
    ],
    declarations: [
        AsifMainComponent,
        AsifListComponent,
        AsifStateComponent,
        AsifDetailComponent,
        AsiUploadComponent,
        AsiMainComponent,
        AsiFilterComponent,
        AsiListComponent
    ],
    providers : [
        AsiService,
        AsifService,
        PreventUnsavedChanges
    ]
    // entryComponents: [DialogGuardComponent]
  })

  export class AsiModule { }