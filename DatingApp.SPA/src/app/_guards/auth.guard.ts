//possibilité de le creer par la commande: ng g guard auth --spec=false

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../main/_services/auth.service';
// import { SimpleNotificationsModule } from 'angular2-notifications';
// import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        // private notificationService: NotificationsService,
        private router: Router
    ) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.loggedIn()) {
            // logged in so return true
            return true;
        }
 
        // not logged in so redirect to login page with the return url
        //this.notificationService.error('Login required','You must be logged in to access this area');
        this.router.navigate(['/pages/auth/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}