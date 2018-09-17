import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { AuthHttp } from '../../../../../../node_modules/angular2-jwt';
import { ErrorService } from '../../../_services/error.service';
import { PaginatedResult, Pagination, IPageList } from '../../../_models/IPagination';
import { IAsifGrid } from '../../../_models/AccountStatementImportFile';
import { FilterAccountStatement } from '../../../_models/Filters/FilterAccountStatement';
import { IAsDetail } from '../../../_models/account-statement.model';

@Injectable()
export class AccountStatementService {
    baseUrl = environment.apiUrl;

    constructor(
        private authHttp: AuthHttp,
        private errorService: ErrorService
    ) { }



    get(filter: FilterAccountStatement) {
        console.log('filter on post',filter);
        return this.authHttp
            .post(`${this.baseUrl}/account-statements/filter`,filter)
            .map((response) => {
                return response.json();
            })
            .catch(this.errorService.handleError);
    }

    getById(id: number) {
        return this.authHttp
            .get(this.baseUrl + `/account-statements/${id}/detail`)
            .map(response => <IAsDetail>response.json())
            .catch(this.errorService.handleError);
    }


}


