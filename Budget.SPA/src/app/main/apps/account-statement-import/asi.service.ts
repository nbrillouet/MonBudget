import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import { environment } from 'environments/environment';
import { ErrorService } from 'app/main/_services/error.service';
import { HttpClient } from '@angular/common/http';
import { FilterAsiTable, FilterAsiTableSelected } from 'app/main/_models/filters/account-statement-import.filter';
import { AsiTable } from 'app/main/_models/account-statement-import/account-statement-import.model';
import { IUser } from 'app/main/_models/user.model';
import { Datas } from 'app/main/_models/generics/detail-info.model';


@Injectable()
export class AsiService {
baseUrl = environment.apiUrl;
user : IUser;

    constructor(
        private http: HttpClient,
        private errorService: ErrorService
    ) { 
        this.user = JSON.parse(localStorage.getItem('currentUser'));
    }
    
    getAsiTableFilter(filter: FilterAsiTableSelected) {
        return this.http
            .post(`${this.baseUrl}account-statement-import/table-filter`,filter)
            .map(response => <FilterAsiTable>response);
    }

    getAsiTable (filter: FilterAsiTableSelected) {
        return this.http
        .post(`${this.baseUrl}account-statement-import/filter`,filter)
        .map((response: Datas<AsiTable>) => response);
    }


}