import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { IImportStatement } from "../../../../_models/IImportStatement";
import { ImportStatementService } from "../import-statement.service";
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ImportStatementListResolver implements Resolve<IImportStatement[]> {
    
    constructor(
        private importStatementService: ImportStatementService,
        private router: Router,
        private notificationService: NotificationsService
    ) {}
    
    resolve(route: ActivatedRouteSnapshot): Observable<IImportStatement[]> {
        console.log(route.params['idUser']);
        // return this.importStatementService.getImportStatement().catch(error => {
        //         this.notificationService.error('Erreur de retour de données', error);
        //         this.router.navigate(['/import-statement']);

        //         return Observable.of(null);
        // })
        return null;
    }
}