

import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
// import { IUser } from '../../../../../_models/user.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../user.service';
import { IUser } from 'app/main/_models/user.model';

@Injectable()
export class UserDetailResolver implements Resolve<IUser> {
    
    constructor(
        private userService: UserService,
        private router: Router,
        private notificationService: NotificationsService
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<IUser> {
        
        return this.userService.getUser(route.params['idUser'])
            .catch(error => {
                this.notificationService.error('Erreur de retour de données', error);
                this.router.navigate(['/users']);
                return Observable.of(null);
            })
    }
}