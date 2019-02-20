import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers,Response } from '@angular/http';
import { environment } from '../../../../../../environments/environment';
import { IImportStatement } from '../../../../_models/import-statement.model';
import { AuthHttp } from 'angular2-jwt';
import { IUser } from '../../../../_models/user.model';
import { IBank } from '../../../../_models/bank.model';
import { PaginatedResult, Pagination } from '../../../../_models/pagination.model';
import { IAccountStatementImport } from '../../../../_models/account-statement-import.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ErrorService } from '../../../../_services/error.service';

@Injectable()
export class ImportStatementHistoService {
baseUrl = environment.apiUrl;

onRowsChanged: BehaviorSubject<any> = new BehaviorSubject([]);
onSelectedRowsChanged: BehaviorSubject<any> = new BehaviorSubject([]);
selectedRows: Number[] = [];
rows: IAccountStatementImport[];

    constructor(
        private authHttp: AuthHttp,
        private errorService: ErrorService) { }

    getDistinctBank(idUser: number):Observable<IBank[]> {
        return this.authHttp
            .get(`${this.baseUrl}account-statement-import/users/${idUser}/banks`)
            .map(response => <IBank[]>response.json())
            .catch(this.errorService.handleError);
    }

    getAccountStatementImport(idUser: number,idBank: number,pagination?: Pagination) {
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
            .get(`${this.baseUrl}account-statement-import/users/${idUser}/banks/${idBank}/account-statement-imports${queryString}`)
            .map((res: Response) => {
                paginatedResult.result = res.json();
                this.rows = res.json();
                if(res.headers.get('Pagination') != null) {
                    paginatedResult.pagination = JSON.parse(res.headers.get('pagination'));
                }
                
                return paginatedResult;
            })
            .catch(this.errorService.handleError);
    }


    deselectRows()
    {
        this.selectedRows = [];

        // Trigger the next event
        this.onSelectedRowsChanged.next(this.selectedRows);
    }

    deleteSelectedRows()
    {
        for ( const rowId of this.selectedRows )
        {
            const row = this.rows.find(_row => {
                return _row.id === Number(rowId);
            });
            const rowIndex = this.rows.indexOf(row);
            this.rows.splice(rowIndex, 1);
        }
        this.onRowsChanged.next(this.rows);
        this.deselectRows();
    }

    selectRows(filterParameter?, filterValue?)
    {
        this.selectedRows = [];

        // If there is no filter, select all todos
        if ( filterParameter === undefined || filterValue === undefined )
        {
            this.selectedRows = [];
            this.rows.map(row => {
                this.selectedRows.push(Number(row.id));
            });
        }
        else
        {
            /* this.selectedContacts.push(...
                 this.contacts.filter(todo => {
                     return todo[filterParameter] === filterValue;
                 })
             );*/
        }

        // Trigger the next event
        this.onSelectedRowsChanged.next(this.selectedRows);
    }

    /**
     * Toggle selected row by id
     * @param id
     */
    toggleSelectedRow(id)
    {
        // First, check if we already have that todo as selected...
        if ( this.selectedRows.length > 0 )
        {
            const index = this.selectedRows.indexOf(id);

            if ( index !== -1 )
            {
                this.selectedRows.splice(index, 1);

                // Trigger the next event
                this.onSelectedRowsChanged.next(this.selectedRows);

                // Return
                return;
            }
        }

        // If we don't have it, push as selected
        this.selectedRows.push(id);

        // Trigger the next event
        this.onSelectedRowsChanged.next(this.selectedRows);
    }

    // private handleError(error: any)
    // {
    //     const applicationError = error.headers.get('Application-Error');
    //     if(applicationError){
    //         return Observable.throw(applicationError);
    //     }
    //     const serverError = error.json();
    //     let modelStateErrors = '';
    //     if(serverError) {
    //         for(const key in serverError)
    //         {
    //             if(serverError[key]){
    //                 modelStateErrors += serverError[key] + '\n';
    //             }
    //         }
    //     }

    //     return Observable.throw(
    //         modelStateErrors || 'Server error'
    //     );
    // }
}