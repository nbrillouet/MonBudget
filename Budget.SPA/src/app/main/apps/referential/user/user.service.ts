import { Injectable } from '@angular/core';
// import { Http, RequestOptions, Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from 'environments/environment';
import { ErrorService } from 'app/main/_services/error.service';
import { Pagination, PaginatedResult } from 'app/main/_models/pagination.model';
import { UserForDetail } from 'app/main/_models/user.model';
import { IUserShortcut } from 'app/main/_models/user-shortcut.model';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/shareReplay';
import { FilterUserTableSelected } from 'app/main/_models/filters/user.filter';

@Injectable()
export class UserService {
    baseUrl = environment.apiUrl;
    onUserChanged: BehaviorSubject<any> = new BehaviorSubject({});

    constructor(
        private _httpClient: HttpClient
    ) { }
    

    getUserTable (filter: FilterUserTableSelected) {
        return this._httpClient
            .post(`${this.baseUrl}users/filter`,filter)
            .map((response: any) => response);
    }

    getUserTableFilter(filter: FilterUserTableSelected) {
        return this._httpClient
            .post(`${this.baseUrl}users/table-filter`,filter)
            .map(response => <FilterUserTableSelected>response);
    }

    getUserForDetail(id: number) {
        return this._httpClient
            .get<UserForDetail>(`${this.baseUrl}users/${id}/user-detail`);
    }
    
    saveUser(user)
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('users/save/' + user.id, user)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    updateUser(id: number, user: UserForDetail) {
        return this._httpClient
        .put(`${this.baseUrl}users/${id}/update`,user);
    }
    
    deleteShortcut(idUser: number, id: number) {
        return this._httpClient
            .delete(this.baseUrl + 'users/' + idUser + '/shortcuts/' + id);
    }

    addShortcut(idUser: number, shortcut: IUserShortcut) {
        return this._httpClient
            .post(this.baseUrl + 'users/' + idUser + '/shortcuts/', shortcut);
    }

}