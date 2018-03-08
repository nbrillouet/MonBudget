import { AuthGuard } from "../../../../_guards/auth.guard";
import { ImportStatementListComponent } from "./importStatement-list/importStatement-list.component";
import { ImportStatementListResolver } from "./importStatement-list/importStatement-list.resolver";
import { SharedModule } from "../../../../core/modules/shared.module";
import { FileUploadModule } from "ng2-file-upload";
import { RouterModule } from "@angular/router";
import { ImportStatementService } from "./importStatement.service";
import { PreventUnsavedChanges } from "../../../../_guards/prevent-unsaved-changes.guard";
import { DialogGuardComponent } from "../../../../_guards/dialog-guard.component";
import { NgModule } from "@angular/core";


const routes = [
    {
        path     : '',
        component: ImportStatementListComponent,
        resolve  : { users: ImportStatementListResolver },
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
        // DialogGuardComponent
        
    ],
    providers : [
        ImportStatementService,
        ImportStatementListResolver,
        PreventUnsavedChanges
    ]
    // entryComponents: [DialogGuardComponent]
  })

  export class ImportStatementModule { }