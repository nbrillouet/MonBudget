import { Injectable } from "@angular/core";
import { environment } from "../../../../../../environments/environment";
import { AuthHttp } from "angular2-jwt";
import { IAsifState } from "../../../../_models/AccountStatementImportFile";
import { IAccount } from "../../../../_models/Account";
import { Pagination, PaginatedResult } from "../../../../_models/IPagination";
import { User } from "../../../../_models/User";
import { Observable } from "rxjs/Observable";


@Injectable()
export class ImportStatementFileService {
baseUrl = environment.apiUrl;

    constructor(private authHttp: AuthHttp) { }

    get(idImport: number, asifStateSelected: IAsifState,accountSelected: IAccount, pagination: Pagination) {
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
        
            .get(this.baseUrl + `AccountStatementImportFile/imports/${idImport}/accounts/${accountSelected.id}/asifStates/${asifStateSelected.id}/asifs${queryString}`)
            .map((res: any) => {
                paginatedResult.result = res.json();
                // this.rows = res.json();
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