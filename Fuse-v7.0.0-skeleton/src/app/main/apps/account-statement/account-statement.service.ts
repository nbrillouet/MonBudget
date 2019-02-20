import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { ErrorService } from 'app/main/_services/error.service';
import { FilterAccountStatement } from 'app/main/_models/Filters/filter-account-statement';
import { IAsDetail } from 'app/main/_models/account-statement.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountStatementService {
    baseUrl = environment.apiUrl;

    constructor(
        private http: HttpClient,
        private errorService: ErrorService
    ) { }

    get(filter: FilterAccountStatement) {
        return this.http
            .post(`${this.baseUrl}account-statements/filter`,filter)
            .map((response) => {
                return response;
            })
            .catch(this.errorService.handleError);
    }

    getById(id: number) {
        return this.http
            .get(`${this.baseUrl}account-statements/${id}/detail`)
            .map(response => <IAsDetail>response)
            .catch(this.errorService.handleError);
    }

    getSolde (filter: FilterAccountStatement) {
        return this.http
            .post(`${this.baseUrl}account-statements/solde-filter`,filter)
            .map((response) => {
                return response;
            })
            .catch(this.errorService.handleError);
    }


}


