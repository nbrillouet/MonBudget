import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { FilterAsiTableSelected, FilterAsiTableSelection } from 'app/main/_models/filters/account-statement-import.filter';
import { AsiTable } from 'app/main/_models/account-statement-import/account-statement-import.model';
import { IUser } from 'app/main/_models/user.model';
import { Datas } from 'app/main/_models/generics/detail-info.model';

@Injectable()
export class AsiService {
baseUrl = environment.apiUrl;
user : IUser;

    constructor(
        private http: HttpClient
    ) { 
        this.user = JSON.parse(localStorage.getItem('currentUser'));
    }
    
    getAsiTableFilter(filter: FilterAsiTableSelected) {
        return this.http
            .post(`${this.baseUrl}account-statement-import/table-filter`,filter)
            .map(response => <FilterAsiTableSelection>response);
    }

    getAsiTable (filter: FilterAsiTableSelected) {
        return this.http
            .post(`${this.baseUrl}account-statement-import/filter`,filter)
            .map((response: Datas<AsiTable[]>) => response);
    }

    getById(idImport: number) {
        return this.http
            .get(`${this.baseUrl}account-statement-import/asi/${idImport}/asi-detail`)
            .map((response: AsiTable) => response);
    }


}