import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { FilterAsiTableSelected, FilterAsiTableSelection } from 'app/main/_models/filters/account-statement-import.filter';
import { AsiTable } from 'app/main/_models/account-statement-import/account-statement-import.model';
import { IUser } from 'app/main/_models/user.model';
import { Datas } from 'app/main/_models/generics/detail-info.model';
import { Select } from '@ngxs/store';
import { UserDetailState } from 'app/main/_ngxs/user/user-detail/user-detail.state';
import { Observable } from 'rxjs';

@Injectable()
export class AsiService {
    @Select(UserDetailState.getUser) user$: Observable<IUser>;
    
baseUrl = environment.apiUrl;
currentUser: IUser;

    constructor(
        private _httpClient: HttpClient
    ) { 
        this.user$.subscribe((user:IUser) => {
            this.currentUser = user;
        });
    }
    
    getAsiTableFilter(filter: FilterAsiTableSelected) {
        return this._httpClient
            .post(`${this.baseUrl}account-statement-import/table-filter`,filter)
            .map(response => <FilterAsiTableSelection>response);
    }

    getAsiTable (filter: FilterAsiTableSelected) {
        return this._httpClient
            .post(`${this.baseUrl}account-statement-import/filter`,filter)
            .map((response: any) => response);
    }

    getById(idImport: number) {
        return this._httpClient
            .get(`${this.baseUrl}account-statement-import/${idImport}/asi-detail`)
            .map((response: AsiTable) => response);
    }

    deleteList(idAsiList: number[]) {
        return this._httpClient
            .post(`${this.baseUrl}account-statement-import/delete-asi-list`,idAsiList)
            .map((response: boolean) => {
                return response;
            });
    }


}