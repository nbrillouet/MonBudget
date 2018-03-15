import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers,Response } from '@angular/http';
import { environment } from '../../../../../environments/environment';
import { IImportStatement } from '../../../_models/IImportStatement';
import { AuthHttp } from 'angular2-jwt';
import { User } from '../../../_models/User';
import { IBank } from '../../../_models/Bank';
import { PaginatedResult, Pagination } from '../../../_models/IPagination';
import { IAccountStatementImport } from '../../../_models/AccountStatementImport';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ImportStatementService {
    baseUrl = environment.apiUrl;
    constructor(private authHttp: AuthHttp) { }

    getImportStatement(): Observable<User[]> {
        return this.authHttp
            .get(this.baseUrl + 'user')
            .map(response => <User[]>response.json())
            .catch(this.handleError);
    }

    getDistinctBank(idUser: number):Observable<IBank[]> {
        return this.authHttp
            .get(this.baseUrl + 'AccountStatementImport/user/' + idUser)
            .map(response => <IBank[]>response.json())
            .catch(this.handleError);
    }

    getAccountStatementImport(idUser: number,idBank: number,pagination?: Pagination) {
        // const paginatedResult: PaginatedResult<IAccountStatementImport[]> = new PaginatedResult<IAccountStatementImport[]>();
        const paginatedResult: PaginatedResult<User[]> = new PaginatedResult<User[]>();
        let queryString = '?';

        if(pagination.currentPage !=null && pagination.itemsPerPage !=null)
        {
            queryString += 'pageNumber=' + pagination.currentPage 
                + '&pageSize=' + pagination.itemsPerPage 
                + '&sortColumn=' + pagination.sortColumn 
                + '&sortDirection=' + pagination.sortDirection;
        }

        return this.authHttp
            .get(this.baseUrl + 'AccountStatementImport/user/'+ idUser + '/bank/' + idBank + queryString)
            .map((res: Response) => {
                paginatedResult.result = res.json();
                if(res.headers.get('Pagination') != null) {
                    paginatedResult.pagination = JSON.parse(res.headers.get('pagination'));
                }
                
                return paginatedResult;
            })
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