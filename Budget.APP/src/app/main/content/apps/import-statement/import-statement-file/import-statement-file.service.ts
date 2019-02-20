import { Injectable } from "@angular/core";
import { environment } from "../../../../../../environments/environment";
import { AuthHttp } from "angular2-jwt";
import { IAsifState, IAsifGrid, IAsifDetail } from "../../../../_models/account-statement-import-file.model";
import { IAccount } from "../../../../_models/account.model";
import { Pagination, PaginatedResult } from "../../../../_models/pagination.model";
import { IUser } from "../../../../_models/user.model";
import { Observable } from "rxjs/Observable";
import { ErrorService } from "../../../../_services/error.service";


@Injectable()
export class ImportStatementFileService {
baseUrl = environment.apiUrl;

    constructor(
        private authHttp: AuthHttp,
        private errorService: ErrorService
    ) { }

    get(idImport: number, asifStateSelected: IAsifState,accountSelected: IAccount, pagination: Pagination) {
        const paginatedResult: PaginatedResult<IUser[]> = new PaginatedResult<IUser[]>();
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
            .catch(this.errorService.handleError);
    }

    getById(id: number) {
        return this.authHttp
            .get(this.baseUrl + `AccountStatementImportFile/${id}/detail`)
            .map(response => <IAsifDetail>response.json())
            .catch(this.errorService.handleError);
    }

    update(asif: IAsifDetail) {
        return this.authHttp
            .post(`${this.baseUrl}AccountStatementImportFile/update`,asif)
            .map(resp=><boolean>resp.json())
            .catch(this.errorService.handleError);
    }

    isSaveableInAccountStatement(idImport: number) {
        return this.authHttp
            .get(`${this.baseUrl}AccountStatementImportFile/imports/${idImport}/isSaveableInAccountStatement`)
            .map(resp=><boolean>resp.json())
            .catch(this.errorService.handleError);
    }

    saveInAccountStatement(idImport: number) {
        return this.authHttp
            .get(`${this.baseUrl}AccountStatementImportFile/imports/${idImport}/saveInAccountStatement`)
            .map(resp=><boolean>resp.json())
            .catch(this.errorService.handleError);
    }
    

    


}