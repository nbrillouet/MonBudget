
import { Injectable } from "@angular/core";
import { CanDeactivate } from '@angular/router';
// import { UserDetailComponent } from "../main/content/apps/referential/user/user-detail/user-detail.component";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { DialogGuardComponent } from "./dialog-guard.component";
import { UserDetailComponent } from "app/main/apps/referential/user/user-detail/user-detail.component";


@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<UserDetailComponent> {
    constructor(public dialog: MatDialog){}
    
    canDeactivate(component: UserDetailComponent) {
        // if(component.userForm.dirty) {
        
        //     this.dialog.open(DialogGuardComponent, {
        //         // width: '250px',
        //         // data: { name: 'nom', animal: 'nnn' }
        //     });
        //     return false;
        //     // return confirm('Are you sure you want to continue? Any unsaved changes will be lost');
        // }

        return true;
    }

}