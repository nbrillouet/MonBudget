

import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
import { IUser } from '../../../../_models/User';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../user.service';

@Injectable()
export class UserListResolver implements Resolve<IUser[]> {
pageSize = 5;
pageNumber = 1;

    constructor(
        private userService: UserService,
        private router: Router,
        private notificationService: NotificationsService
    ) {}
    
    resolve(route: ActivatedRouteSnapshot): Observable<IUser[]> {
        return null;
        // return this.userService.getUsers(this.pageNumber, this.pageSize)
        //     .catch(error => {
        //         this.notificationService.error('Erreur de retour de données', error);
        //         this.router.navigate(['']);

        //         return Observable.of(null);
        // })
    }
}