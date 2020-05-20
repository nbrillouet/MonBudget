import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Select } from '@ngxs/store';
import { UserDetailState } from 'app/main/_ngxs/user/user-detail/user-detail.state';
import { Observable } from 'rxjs';
import { IUser } from 'app/main/_models/user.model';

@Injectable()
export class AuthGuard implements CanActivate {
@Select(UserDetailState.getUser) user$: Observable<IUser>;
currentUser: IUser;

    constructor(private router: Router) {
        this.user$.subscribe((user:IUser) => {
            this.currentUser = user;
        });
     }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.currentUser)
        {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;

        // if (localStorage.getItem('currentUser')) {
        //     // logged in so return true
        //     return true;
        // }

        // // not logged in so redirect to login page with the return url
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        // return false;
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