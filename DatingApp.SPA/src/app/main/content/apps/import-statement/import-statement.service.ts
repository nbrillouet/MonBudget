import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers,Response } from '@angular/http';
import { environment } from '../../../../../environments/environment';
import { IImportStatement } from '../../../_models/IImportStatement';
import { AuthHttp } from 'angular2-jwt';
// import { IUser } from '../../../_models/User';
import { IBank } from '../../../_models/Bank';
import { PaginatedResult, Pagination } from '../../../_models/IPagination';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { IAsifState, IAsifGroupByAccounts } from '../../../_models/AccountStatementImportFile';
import { IAccount } from '../../../_models/Account';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ImportStatementService {
baseUrl = environment.apiUrl;

    constructor(private authHttp: AuthHttp) { }

    // getImportStatement(): Observable<User[]> {
    //     return this.authHttp
    //         .get(this.baseUrl + 'user')
    //         .map(response => <User[]>response.json())
    //         .catch(this.handleError);
    // }

    getAsifStates(idImport: number, idAccount:number): Observable<IAsifState[]> {
        return this.authHttp
            .get(this.baseUrl + `AccountStatementImport/imports/${idImport}/accounts/${idAccount}/asifStates`)
            .map(response => <any>response.json())
            .catch(this.handleError);
    }

    getAsi(idImport: number) {
        return this.authHttp
            .get(this.baseUrl + `AccountStatementImport/imports/${idImport}`)
            .map(response => <any>response.json())
            .catch(this.handleError);
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
            .get(this.baseUrl + `AccountStatementImport/imports/${idImport}/accounts`)
            .map(response => <any>response.json())
            .catch(this.handleError);
    }


    private handleError(error: any)
    {
        const applicationError = error.headers.get('Application-Error');
        if(applicationError){
            return Observable.throw(applicationError);
        }
        const serverError = error.json();
        let modelStateErrors = '';
        if(serverError) {
            for(const key in serverError)
            {
                if(serverError[key]){
                    modelStateErrors += serverError[key] + '\n';
                }
            }
        }

        return Observable.throw(
            modelStateErrors || 'Server error'
        );
    }



}