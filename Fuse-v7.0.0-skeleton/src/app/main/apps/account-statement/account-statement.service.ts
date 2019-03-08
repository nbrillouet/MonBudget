import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { ErrorService } from 'app/main/_services/error.service';
import { FilterAsTableSelected, FilterAsTable, FilterAsDetail } from 'app/main/_models/filters/account-statement.filter';
import { AsTable } from 'app/main/_models/account-statement/account-statement-table.model';
import { HttpClient } from '@angular/common/http';
import { AsDetail } from 'app/main/_models/account-statement/account-statement-detail.model';

@Injectable()
export class AsService {
    baseUrl = environment.apiUrl;

    constructor(
        private http: HttpClient
    ) { }
    
    getAsTableFilter(filter: FilterAsTableSelected) {
        return this.http
            .post(`${this.baseUrl}account-statements/table-filter`,filter)
            .map((response: FilterAsTable) => {
                return response;
            });
    }

    getAsTable (filter: FilterAsTableSelected) {
        return this.http
            .post(`${this.baseUrl}account-statements/filter`,filter)
            .map((response: AsTable) => {
                return response;
            });
    }

    getAsDetail(filterAsDetail: FilterAsDetail) {
        return this.http
            .get(this.baseUrl + `account-statements/${filterAsDetail.idAs}/users/${filterAsDetail.idUser}/detail`)
            .map(response => <AsDetail>response)
            // .catch(this.errorService.handleError);
    }

    // get(filter: FilterAccountStatement) {
    //     return this.http
    //         .post(`${this.baseUrl}account-statements/filter`,filter)
    //         .map((response) => {
    //             return response;
    //         })
    //         .catch(this.errorService.handleError);
    // }

    // getById(id: number) {
    //     return this.http
    //         .get(`${this.baseUrl}account-statements/${id}/detail`)
    //         .map(response => <IAsDetail>response);
    // }

    getAsSolde (filter: FilterAsTableSelected) {
        return this.http
            .post(`${this.baseUrl}account-statements/solde-filter`,filter)
            .map((response) => {
                return response;
            });
    }

    update(asDetail: AsDetail) {
        return this.http
            .post(`${this.baseUrl}account-statements/update`,asDetail)
            .map(resp=><boolean>resp);

    }

    getAsChartEvolutionBrut (filter: FilterAsTableSelected) {
        return this.http
            .post(`${this.baseUrl}account-statements/solde-filter`,filter)
            .map((response) => {
                return response;
            });
    }


}


