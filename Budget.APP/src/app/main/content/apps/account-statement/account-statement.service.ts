import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { AuthHttp } from 'angular2-jwt';
import { ErrorService } from '../../../_services/error.service';
import { PaginatedResult, Pagination, IPageList } from '../../../_models/pagination.model';
import { IAsifGrid } from '../../../_models/account-statement-import-file.model';
import { FilterAccountStatement } from '../../../_models/Filters/FilterAccountStatement';
import { IAsDetail } from '../../../_models/account-statement.model';
// import { Store } from '@ngxs/store';

@Injectable()
export class AccountStatementService {
    baseUrl = environment.apiUrl;

    constructor(
        private authHttp: AuthHttp,
        private errorService: ErrorService,
        // private store: Store
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


