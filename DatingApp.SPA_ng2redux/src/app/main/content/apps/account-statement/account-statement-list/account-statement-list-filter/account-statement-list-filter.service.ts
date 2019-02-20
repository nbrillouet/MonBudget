import { Injectable } from '@angular/core';
import { FilterAccountStatement } from '../../../../../_models/Filters/FilterAccountStatement';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthHttp } from 'angular2-jwt';
import { ErrorService } from '../../../../../_services/error.service';
import { environment } from '../../../../../../../environments/environment';
import { ISelect } from '../../../../../_models/select.model';

@Injectable()
export class AccountStatementListFilterService {

baseUrl = environment.apiUrl;
private filterSource = new BehaviorSubject<FilterAccountStatement>(new FilterAccountStatement());
filter = this.filterSource.asObservable();
    
    constructor(
        private authHttp: AuthHttp,
        private errorService: ErrorService
    ) { }



    changeFilter(filter: FilterAccountStatement) {
        console.log('NextFilterAccountStatement');
        this.filterSource.next(filter);
    }

    initFilter() {
        
    }


    // getOperation(selectType) {
    //     console.log('selectType',selectType);
    //     return this.authHttp
    //     .get(this.baseUrl + `account-statements/accounts/${idAccount}/account-statements/${queryString}`)
    //     .map((res: any) => {
    //         paginatedResult.result = res.json();
    //         // this.rows = res.json();
    //         if(res.headers.get('Pagination') != null) {
    //             paginatedResult.pagination = JSON.parse(res.headers.get('pagination'));
    //         }
            
    //         return paginatedResult;
    //     })
    //     .catch(this.errorService.handleError);
    // };

}
