import { AuthGuard } from "../../../../_guards/auth.guard";
import { ImportStatementListComponent } from "./import-statement-list/import-statement-list.component";
import { ImportStatementListResolver } from "./import-statement-list/import-statement-list.resolver";
import { SharedModule } from "../../../../core/modules/shared.module";
import { FileUploadModule } from "ng2-file-upload";
import { RouterModule } from "@angular/router";
import { ImportStatementService } from "./import-statement.service";
import { PreventUnsavedChanges } from "../../../../_guards/prevent-unsaved-changes.guard";
import { DialogGuardComponent } from "../../../../_guards/dialog-guard.component";
import { NgModule } from "@angular/core";
import { ImportStatementUploadComponent } from './import-statement-upload/import-statement-upload.component';
import { ImportStatementHistoListComponent } from './import-statement-histo-list/import-statement-histo-list.component';
import { ImportStatementMainComponent } from './import-statement-main/import-statement-main.component';


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
        ImportStatementListComponent,
        ImportStatementUploadComponent,
        ImportStatementHistoListComponent,
        ImportStatementMainComponent
    ],
    providers : [
        ImportStatementService,
        ImportStatementListResolver,
        PreventUnsavedChanges
    ]
    // entryComponents: [DialogGuardComponent]
  })

  export class ImportStatementModule { }