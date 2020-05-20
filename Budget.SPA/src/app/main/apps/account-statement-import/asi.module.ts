
import { FileUploadModule } from "ng2-file-upload";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { GMapModule } from "../g-map/g-map.module";
import { AuthGuard } from "app/_guards/auth.guard";
import { FuseSharedModule } from "@fuse/shared.module";
import { PreventUnsavedChanges } from "app/_guards/prevent-unsaved-changes.guard";
import { NgxsModule } from "@ngxs/store";
import { AsifDetailComponent } from "../account-statement-import-file/asif-detail/asif-detail.component";
import { AsifMainComponent } from "../account-statement-import-file/asif-main/asif-main.component";
import { AsifStateComponent } from "../account-statement-import-file/asif-state/asif-state.component";
import { AsiUploadComponent } from "./asi-upload/asi-upload.component";
import { AsifService } from "../account-statement-import-file/asif.service";
import { AsiMainComponent } from "./asi-main/asi-main.component";
import { AsiFilterComponent } from "./asi-filter/asi-filter.component";
import { AsiService } from "./asi.service";
import { AsifDetailState } from "app/main/_ngxs/account-statement-import-file/asif-detail/asif-detail.state";
import { AngularMaterialModule } from "app/angular-material.module";
import { MatTableFilterModule } from "../web-component/mat-table-filter/mat-table-filter.module";
import { ReferentialServiceModule } from "app/main/_services/Referential/referential.service.module";
import { DatePipe } from "@angular/common";
import { AsiTableFilterSelectionState } from "app/main/_ngxs/account-statement-import/asi-table/asi-table-filter-selection/asi-table-filter-selection.state";
import { AsiTableFilterSelectedState } from "app/main/_ngxs/account-statement-import/asi-table/asi-table-filter-selected/asi-table-filter-selected.state";
import { AsiTableState } from "app/main/_ngxs/account-statement-import/asi-table/asi-table.state";
import { AsifTableFilterSelectionState } from "app/main/_ngxs/account-statement-import-file/asif-table/asif-table-filter-selection/asif-table-filter-selection.state";
import { AsifTableFilterSelectedState } from "app/main/_ngxs/account-statement-import-file/asif-table/asif-table-filter-selected/asif-table-filter-selected.state";
import { AsifTableState } from "app/main/_ngxs/account-statement-import-file/asif-table/asif-table.state";
import { AsifTableComponent } from "../account-statement-import-file/asif-table/asif-table.component";
import { AsiTableComponent } from "./asi-table/asi-table.component";
import { AsDetailGenericComponent } from "../shared/as-detail-generic/as-detail-generic.component";
import { AsService } from "../account-statement/account-statement.service";
import { AsifDetailFilterState } from "app/main/_ngxs/account-statement-import-file/asif-detail/asif-detail-filter/asif-detail-filter.state";

const routes = [
    {
        path     : '',
        component: AsiMainComponent,
        // resolve  : { users: ImportStatementListResolver },
        canActivate: [AuthGuard]
    },
    {
        // ':idImport/accounts/:idAccount/account-statement-import-files/:idImportFile/detail'
        path     : ':idImport/account-statement-import-files/:idAsif/detail',
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
      ReferentialServiceModule,
      NgxsModule.forFeature([
        AsiTableFilterSelectionState,
        AsiTableFilterSelectedState,
        AsiTableState,
        AsifTableFilterSelectionState,
        AsifTableFilterSelectedState,
        AsifTableState,
        AsifDetailState,
        AsifDetailFilterState

      ]),
      RouterModule.forChild(routes)
    ],
    declarations: [
        AsifMainComponent,
        AsifTableComponent,
        AsifStateComponent,
        AsifDetailComponent,

        
        AsiUploadComponent,
        AsiMainComponent,
        AsiFilterComponent,
        AsiTableComponent
    ],
    providers : [
        AsService,
        AsiService,
        AsifService,
        PreventUnsavedChanges,
        DatePipe
    ]
    // entryComponents: [DialogGuardComponent]
  })

  export class AsiModule { }