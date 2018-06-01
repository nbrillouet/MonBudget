import { AuthGuard } from "../../../../_guards/auth.guard";
import { ImportStatementListComponent } from "./import-statement-list/import-statement-list.component";
import { SharedModule } from "../../../../core/modules/shared.module";
import { FileUploadModule } from "ng2-file-upload";
import { RouterModule } from "@angular/router";
import { ImportStatementService } from "./import-statement.service";
import { ImportStatementHistoService } from "./import-statement-histo/import-statement-histo.service";
import { PreventUnsavedChanges } from "../../../../_guards/prevent-unsaved-changes.guard";
import { DialogGuardComponent } from "../../../../_guards/dialog-guard.component";
import { NgModule } from "@angular/core";
import { ImportStatementUploadComponent } from './import-statement-upload/import-statement-upload.component';
import { ImportStatementHistoListComponent } from './import-statement-histo/import-statement-histo-list/import-statement-histo-list.component';
import { SelectedBarComponent } from './import-statement-histo/selected-bar/selected-bar.component';

import { ImportStatementMainComponent } from './import-statement-main/import-statement-main.component';
// import { AccountStatementImportFileService } from "./import-statement-file/account-statement-import-file.service";
import { ImportStatementFileListComponent } from "./import-statement-file/import-statement-file-list/import-statement-file-list.component";
import { ImportStatementFileService } from "./import-statement-file/import-statement-file.service";
import { ImportStatementFileMainComponent } from "./import-statement-file/import-statement-file-main/import-statement-file-main.component";


const routes = [
    {
        path     : '',
        component: ImportStatementMainComponent,
        // resolve  : { users: ImportStatementListResolver },
        canActivate: [AuthGuard]
    },
    // {
    //     path     : ':idUser',
    //     component: UserDetailComponent,
    //     resolve  : { user: UserDetailResolver },
    //     canActivate: [AuthGuard],
    //     canDeactivate: [PreventUnsavedChanges]
    // },
    {
        path      : '**',
        redirectTo: ''
    }
  ];

  @NgModule({
    imports: [
      SharedModule,
      FileUploadModule,
      RouterModule.forChild(routes)
    ],
    declarations: [
        ImportStatementFileMainComponent,
        ImportStatementListComponent,
        ImportStatementFileListComponent,
        ImportStatementUploadComponent,
        ImportStatementHistoListComponent,
        SelectedBarComponent,
        ImportStatementMainComponent
    ],
    providers : [
        ImportStatementService,
        ImportStatementFileService,
        ImportStatementHistoService,
        // AccountStatementImportFileService,
        // AccountStatementImportFileService,
        PreventUnsavedChanges
    ]
    // entryComponents: [DialogGuardComponent]
  })

  export class ImportStatementModule { }