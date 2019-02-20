import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}




// import {Component, Inject} from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

// @Component({
//     selector: 'dialog-guard',
//     templateUrl: 'dialog-guard.html',
//   })

//   export class DialogGuardComponent {
  
//     constructor(
//       public dialogRef: MatDialogRef<DialogGuardComponent>,
//       @Inject(MAT_DIALOG_DATA) public data: any) { }
  
//     // onNoClick(): void {
//     //   this.dialogRef.close();
//     // }
  
//   }