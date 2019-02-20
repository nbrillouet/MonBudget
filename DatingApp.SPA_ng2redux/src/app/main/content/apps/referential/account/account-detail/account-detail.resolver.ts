import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { IAccountForDetail } from "../../../../../_models/account.model";
import { Observable } from "../../../../../../../../node_modules/rxjs/Observable";
import { NotificationsService } from "angular2-notifications";
import { AccountService } from "../../../../../_services/Referential/account.service";

@Injectable()
export class AccountDetailResolver implements Resolve<IAccountForDetail> {
    
    constructor(
        private accountService: AccountService,
        private router: Router,
        private notificationService: NotificationsService
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<IAccountForDetail> {
        console.log('route.params[idAccount]',route.params['idAccount']);
        if(route.params['idAccount']=='new') {
            let account = this.createAccount(); 

            let observable = new Observable<IAccountForDetail>((observer) => {
                // observable execution
                observer.next(account);
                observer.complete()
            })

            return observable;
        }
        else {
            console.log('route.params[dAccount]',route.params['idAccount']);
            return this.accountService.GetForDetailById(route.params['idAccount'])
                .catch(error => {
                    this.notificationService.error('Erreur de retour de données', error);
                    this.router.navigate(['/apps']);
                    return Observable.of(null);
                })
        }
    }

    createAccount()  {
        return <IAccountForDetail>  {
            id : 0,
            number : null,
            label : null,
            bank : {id:1,label:'INCONNU'},
            accountType: {id:1,label:'INCONNU'},
            alertThreshold: 0,
            startAmount: 0,
            linkedUsers: null
        }
    }
}