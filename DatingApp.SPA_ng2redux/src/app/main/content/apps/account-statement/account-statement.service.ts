import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { AuthHttp } from 'angular2-jwt';
import { ErrorService } from '../../../_services/error.service';
import { PaginatedResult, Pagination, IPageList } from '../../../_models/pagination.model';
import { IAsifGrid } from '../../../_models/account-statement-import-file.model';
import { FilterAccountStatement } from '../../../_models/Filters/FilterAccountStatement';
import { IAsDetail, IAsGrid } from '../../../_models/account-statement.model';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../../../store';
import { AS_LOAD, AS_LOADING } from './action';

@Injectable()
export class AccountStatementService {
    baseUrl = environment.apiUrl;

    constructor(
        private authHttp: AuthHttp,
        private errorService: ErrorService,
        private ngRedux: NgRedux<IAppState>
    ) { }
    
    load(filter: FilterAccountStatement) {
        console.log('in load');
        this.ngRedux.dispatch({type: AS_LOADING,value:true});
        console.log('in load 1');
        this.authHttp
            .post(`${this.baseUrl}/account-statements/filter`,filter)
            .subscribe((response) => {
                // let toto = response.json();
                console.log('redux-data',<IPageList<IAsGrid>>response.json());
                this.ngRedux.dispatch({type: AS_LOAD,value: <IPageList<IAsGrid>>response.json() });
                this.ngRedux.dispatch({type: AS_LOADING,value:false});
            },err => {
                
            });
            
            // .map((response) => {
            //     let toto = response.json();
            //     console.log('redux-data',toto);
            //     this.ngRedux.dispatch({type: AS_LOAD, toto });
            // })
            // .catch(this.errorService.handleError).s;
    }

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


