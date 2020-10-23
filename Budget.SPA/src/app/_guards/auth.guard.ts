import { Injectable, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserForDetail, UserForAuth } from 'app/main/_models/user.model';
import { Store, Select } from '@ngxs/store';
import { UserDetailState } from 'app/main/_ngxs/user/user-detail/user-detail.state';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router
        ) { 

        }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let user: UserForAuth = JSON.parse(localStorage.getItem('userInfo'));

        if(user && user.token) {
            if (route.data.roles && route.data.roles.indexOf(user.role) === -1) {
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                console.log('NOT authorized');
                return false;
            }
            console.log('authorized');
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/pages/auth/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }

}
