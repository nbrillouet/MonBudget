import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'dialog-guard',
    templateUrl: 'dialog-guard.html',
  })

  export class DialogGuardComponent {
  
    constructor(
      public dialogRef: MatDialogRef<DialogGuardComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }
  
    // onNoClick(): void {
    //   this.dialogRef.close();
    // }
  
  }