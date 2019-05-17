// import { Injectable } from "@angular/core";
// import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
// import { NotificationsService } from "angular2-notifications";
// import { Observable } from "rxjs";
// import { ReferentialService } from "app/main/_services/Referential/referential.service";
// import { IAccountForDetail } from "app/main/_models/referential/account.model";

// @Injectable()
// export class AccountDetailResolver implements Resolve<IAccountForDetail> {
    
//     constructor(
//         // private accountService: AccountService,
//         private _referentialService: ReferentialService,
//         private router: Router,
//         private notificationService: NotificationsService
//     ) {}

//     resolve(route: ActivatedRouteSnapshot): Observable<IAccountForDetail> {

//         if(route.params['idAccount']=='new') {
//             let account = this.createAccount(); 

//             let observable = new Observable<IAccountForDetail>((observer) => {
//                 // observable execution
//                 observer.next(account);
//                 observer.complete()
//             })

//             return observable;
//         }
//         else {

//             return this._referentialService.accountService.GetForDetail(route.params['idAccount'])
//                 .catch(error => {
//                     this.notificationService.error('Erreur de retour de données', error);
//                     this.router.navigate(['/apps']);
//                     return Observable.of(null);
//                 })
//         }
//     }

//     createAccount()  {
//         return <IAccountForDetail>  {
//             id : 0,
//             number : null,
//             label : null,
//             bankAgency : {id:1,label:'INCONNU'},
//             accountType: {id:1,label:'INCONNU'},
//             alertThreshold: 0,
//             startAmount: 0,
//             linkedUsers: null
//         }
//     }
// }