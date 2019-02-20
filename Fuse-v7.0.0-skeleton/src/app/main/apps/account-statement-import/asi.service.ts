import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/toPromise';
import { environment } from 'environments/environment';
import { ErrorService } from 'app/main/_services/error.service';
import { IAsifState, IAsifGroupByAccounts } from 'app/main/_models/account-statement-import-file.model';
import { HttpClient } from '@angular/common/http';
import { FilterAsiTable, FilterAsiTableSelected } from 'app/main/_models/filters/account-statement-import.filter';
import { DataInfos } from 'app/main/_models/generics/table-info.model';
import { AsiTable } from 'app/main/_models/account-statement-import/account-statement-import.model';

@Injectable()
export class AsiService {
baseUrl = environment.apiUrl;

    constructor(
        private http: HttpClient,
        private errorService: ErrorService
    ) { }
    
    getAsiTableFilter(filter: FilterAsiTableSelected) {
        return this.http
            .post(`${this.baseUrl}account-statement-import/table-filter`,filter)
            .map(response => <FilterAsiTable>response);
    }

    getAsiTable (filter: FilterAsiTableSelected) {
        return this.http
        .post(`${this.baseUrl}account-statement-import/filter`,filter)
        .map((response: DataInfos<AsiTable>) => {
            return response;
        })
        .catch(this.errorService.handleError);
    }

    // getAsiTableFilter(idUser: number) {
    //     return this.http
    //         .get(`${this.baseUrl}account-statement-import/users/${idUser}/table-filter`)
    //         .map(response => <FilterAsiTable>response)
    //         .catch(this.errorService.handleError);
    // }
    
    // getAsifStates(idImport: number, idAccount:number): Observable<IAsifState[]> {
    //     return this.http
    //         .get(this.baseUrl + `account-statement-import/imports/${idImport}/accounts/${idAccount}/asif-states`)
    //         .map(response => <any>response)
    //         .catch(this.errorService.handleError);
    // }

    // getAsi(idImport: number) {
    //     return this.http
    //         .get(this.baseUrl + `account-statement-import/imports/${idImport}/account-statement-import`)
    //         .map(response => <any>response)
    //         .catch(this.errorService.handleError);
    // }

    // getAsifAccounts(idImport: number): Observable<IAsifGroupByAccounts> {
    //     return this.http
    //         .get(this.baseUrl + `account-statement-import/imports/${idImport}/accounts`)
    //         .map(response => <any>response)
    //         .catch(this.errorService.handleError);
    // }

}