import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers,Response } from '@angular/http';
import { environment } from '../../../../../environments/environment';
import { IImportStatement } from '../../../_models/import-statement.model';
import { AuthHttp } from 'angular2-jwt';
// import { IUser } from '../../../_models/User';
import { IBank } from '../../../_models/bank.model';
import { PaginatedResult, Pagination } from '../../../_models/pagination.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { IAsifState, IAsifGroupByAccounts } from '../../../_models/account-statement-import-file.model';
import { IAccount } from '../../../_models/account.model';
import 'rxjs/add/operator/toPromise';
import { ErrorService } from '../../../_services/error.service';

@Injectable()
export class ImportStatementService {
baseUrl = environment.apiUrl;

    constructor(
        private authHttp: AuthHttp,
        private errorService: ErrorService
    ) { }

    // getImportStatement(): Observable<User[]> {
    //     return this.authHttp
    //         .get(this.baseUrl + 'user')
    //         .map(response => <User[]>response.json())
    //         .catch(this.handleError);
    // }

    getAsifStates(idImport: number, idAccount:number): Observable<IAsifState[]> {
        return this.authHttp
            .get(this.baseUrl + `account-statement-import/imports/${idImport}/accounts/${idAccount}/asif-states`)
            .map(response => <any>response.json())
            .catch(this.errorService.handleError);
    }

    getAsi(idImport: number) {
        return this.authHttp
            .get(this.baseUrl + `account-statement-import/imports/${idImport}/account-statement-import`)
            .map(response => <any>response.json())
            .catch(this.errorService.handleError);
    }

    // getAsifStates(idImport: number,idAccount:number) {
    //     let promise = new Promise((resolve, reject) => {
    //          this.authHttp
    //         .get(this.baseUrl + `AccountStatementImport/imports/${idImport}/accounts/${idAccount}/asifStates`)
    //         .toPromise()
    //         .then(
    //             res=>{
    //                 Response = res.json();
    //                 resolve();
    //             },
    //             msg => {
    //                 reject(msg);
    //             }
    //         );
    //     });
    //     return promise;

    // }


    getAsifAccounts(idImport: number): Observable<IAsifGroupByAccounts> {
        return this.authHttp
            .get(this.baseUrl + `account-statement-import/imports/${idImport}/accounts`)
            .map(response => <any>response.json())
            .catch(this.errorService.handleError);
    }


    // private handleError(error: any)
    // {
    //     const applicationError = error.headers.get('Application-Error');
    //     if(applicationError){
    //         return Observable.throw(applicationError);
    //     }
    //     const serverError = error.json();
    //     let modelStateErrors = '';
    //     if(serverError) {
    //         for(const key in serverError)
    //         {
    //             if(serverError[key]){
    //                 modelStateErrors += serverError[key] + '\n';
    //             }
    //         }
    //     }

    //     return Observable.throw(
    //         modelStateErrors || 'Server error'
    //     );
    // }



}