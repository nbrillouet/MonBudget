import { Injectable, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserForDetail } from 'app/main/_models/user.model';
import { Store, Select } from '@ngxs/store';
import { UserDetailState } from 'app/main/_ngxs/user/user-detail/user-detail.state';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
@Select(UserDetailState.getUser) user$: Observable<UserForDetail>;
 
currentUser: UserForDetail;

    constructor(
        private router: Router
        ) { 
            this.user$.subscribe((user:UserForDetail) => {
                this.currentUser = user;
            });
        }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.currentUser && this.currentUser.token) {
            if (route.data.roles && route.data.roles.indexOf(this.currentUser.role) === -1) {
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                return false;
            }
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/pages/auth/login'], { queryParams: { returnUrl: state.url }});
        return false;

        // if (currentUser && currentUser.token) {

        //     if(!this.userLoaded.isLoaded)
        //         this.loadCurrentUser(currentUser);

        //     // check if route is restricted by role
        //     // if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
        //     //     // role not authorised so redirect to home page
        //     //     this.router.navigate(['/']);
        //     //     return false;
        //     // }

        //     // logged in so return true
        //     return true;
        // }

        // // not logged in so redirect to login page with the return url
        // this.router.navigate(['/pages/auth/login'], { queryParams: { returnUrl: state.url }});
        // return false;
    }

    // ngOnInit(){
    //     this.user$.subscribe((user:IUser) => {
    //         this.currentUser = user;
    //     });
    // }

 

    // loadCurrentUser(currentUser:IUserForLabel) {
    //     this.store.dispatch(new LoadUserDetail(<IUser>currentUser));
    //     this.userLoaded.isLoaded=true;
    // }
}



// //possibilité de le creer par la commande: ng g guard auth --spec=false

// import { Injectable } from '@angular/core';
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { AuthService } from '../main/_services/auth.service';
// // import { SimpleNotificationsModule } from 'angular2-notifications';
// // import { NotificationsService } from 'angular2-notifications';

// @Injectable()
// export class AuthGuard implements CanActivate {

//     constructor(
//         private authService: AuthService,
//         // private notificationService: NotificationsService,
//         private router: Router
//     ) { }
 
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         if (this.authService.loggedIn()) {
//             // logged in so return true
//             return true;
//         }
 
//         // not logged in so redirect to login page with the return url
//         //this.notificationService.error('Login required','You must be logged in to access this area');
//         this.router.navigate(['/pages/auth/login'], { queryParams: { returnUrl: state.url }});
//         return false;
//     }
// }