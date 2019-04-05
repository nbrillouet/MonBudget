import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { ErrorService } from "app/main/_services/error.service";
import { HttpClient } from '@angular/common/http';
import { FilterAsifTableSelected, FilterAsifTable, FilterAsifDetail } from "app/main/_models/filters/account-statement-import-file.filter";
import { AsifTable, AsifDetail } from "app/main/_models/account-statement-import/account-statement-import-file.model";

@Injectable()
export class AsifService {
baseUrl = environment.apiUrl;

    constructor(
        private http: HttpClient,
        private errorService: ErrorService
    ) { }

    // get(idImport: number, asifStateSelected: IAsifState,accountSelected: IAccount, pagination: Pagination) {
    //     const paginatedResult: PaginatedResult<IAsifGrid[]> = new PaginatedResult<IAsifGrid[]>();
    //     let queryString = '?';

    //     if(pagination.currentPage !=null && pagination.itemsPerPage !=null)
    //     {
    //         queryString += 'pageNumber=' + pagination.currentPage 
    //             + '&pageSize=' + pagination.itemsPerPage 
    //             + '&sortColumn=' + pagination.sortColumn 
    //             + '&sortDirection=' + pagination.sortDirection;
    //     }

    //     return this.http
    //         .get(this.baseUrl + `account-statement-import-files/imports/${idImport}/accounts/${accountSelected.id}/asifStates/${asifStateSelected.id}/asifs${queryString}`, {observe: 'response'})
    //         .map((response) => {
    //             paginatedResult.result = <IAsifGrid[]>response.body;
    //             // this.rows = res.json();
    //             if(response.headers.get('Pagination') != null) {
    //                 paginatedResult.pagination = JSON.parse(response.headers.get('pagination'));
    //             }
                
    //             return paginatedResult;
    //         })
    //         .catch(this.errorService.handleError);
    // }

    getAsifTable (filter: FilterAsifTableSelected) {
        return this.http
        .post(`${this.baseUrl}account-statement-import-files/filter`,filter)
        .map((response: AsifTable) => {
            return response;
        })
        .catch(this.errorService.handleError);
    }

    getAsifTableFilter(filter: FilterAsifTableSelected) {
        return this.http
            .post(`${this.baseUrl}account-statement-import-files/table-filter`,filter)
            .map((response: FilterAsifTable) => {
                return response;
            });
            // FilterAsifTable
    }

    getAsifDetail(filterAsifDetail: FilterAsifDetail) {
        return this.http
            .get(this.baseUrl + `account-statement-import-files/${filterAsifDetail.idAsif}/users/${filterAsifDetail.idUser}/detail`)
            .map(response => <AsifDetail>response)
            // .catch(this.errorService.handleError);
    }

    getById(id: number) {
        return this.http
            .get(this.baseUrl + `account-statement-import-files/${id}/detail`)
            .map(response => <AsifDetail>response)
            .catch(this.errorService.handleError);
    }

    isSaveableInAccountStatement(idImport: number) {
        return this.http
            .get(`${this.baseUrl}account-statement-import-files/imports/${idImport}/isSaveableInAccountStatement`)
            .map(resp=><boolean>resp)
            .catch(this.errorService.handleError);
    }

    saveInAccountStatement(idImport: number) {
        return this.http
            .get(`${this.baseUrl}account-statement-import-files/imports/${idImport}/saveInAccountStatement`)
            .map(resp=><boolean>resp)
            .catch(this.errorService.handleError);
    }

    update(asifDetail: AsifDetail) {
        return this.http
            .post(`${this.baseUrl}account-statement-import-files/update`,asifDetail)
            .map(resp=><boolean>resp)
            .catch(this.errorService.handleError);
    }
    

    


}