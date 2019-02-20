

import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { IBankAccounts } from '../../../../../_models/bank.model';
import { AuthService } from '../../../../../_services/auth.service';

@Injectable()
export class AccountListResolver implements Resolve<IBankAccounts[]> {
    
    constructor(
        private authService: AuthService,
        private router: Router,
        private notificationService: NotificationsService
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<IBankAccounts[]> {
        let user = JSON.parse(localStorage.getItem('user'));
        console.log(user.id);
        return this.authService.GetBanks(user.id)
            .catch(error => {
                this.notificationService.error('Erreur de retour de données', error);
                this.router.navigate(['/apps']);
                return Observable.of(null);
            })
    }
}