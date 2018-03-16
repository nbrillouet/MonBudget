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
    // constructor(private authHttp: AuthHttp) { }

    // getImportStatement(): Observable<User[]> {
    //     return this.authHttp
    //         .get(this.baseUrl + 'user')
    //         .map(response => <User[]>response.json())
    //         .catch(this.handleError);
    // }

}