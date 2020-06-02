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
        private http: HttpClient,
        private errorService: ErrorService
    ) { }
    
    
    getUserTable (filter: FilterUserTableSelected) {
        return this.http
            .post(`${this.baseUrl}users/filter`,filter)
            .map((response: any) => response);
    }

    getUserTableFilter(filter: FilterUserTableSelected) {
        return this.http
            .post(`${this.baseUrl}users/table-filter`,filter)
            .map(response => <FilterUserTableSelected>response);
    }

    // getUsers(pagination?: Pagination) {
    //     const paginatedResult: PaginatedResult<IUser[]> = new PaginatedResult<IUser[]>();
    //     let queryString = '?';

    //     // if(page !=null && itemsPerPage !=null) {
    //     if(pagination.currentPage !=null && pagination.nbItemsPerPage !=null)
    //     {
    //         queryString += 'pageNumber=' + pagination.currentPage 
    //             + '&pageSize=' + pagination.nbItemsPerPage 
    //             + '&sortColumn=' + pagination.sortColumn 
    //             + '&sortDirection=' + pagination.sortDirection;
    //     }

    //     return this.http
    //     .get<IUser[]>(this.baseUrl + 'users' + queryString, {observe: 'response'})
    //     .map((response) => {

            
    //         paginatedResult.result = response.body;
    //         if(response.headers.get('Pagination') != null) {
    //             paginatedResult.pagination = JSON.parse(response.headers.get('pagination'));
    //         }

    //         return paginatedResult;
    //     })
    //     .shareReplay()
    //     .catch(this.errorService.handleError);
        

    //     // return this.http
    //     //     .get(this.baseUrl + 'users' + queryString)
    //     //     .map((response: Response) => {
    
    //     //         let toto =response;
    //     //         paginatedResult.result = <IUser[]>toto.json();
    //     //         if(response.headers.get('Pagination') != null) {
    //     //             paginatedResult.pagination = JSON.parse(response.headers.get('pagination'));
    //     //         }
                
    //     //         return paginatedResult;
    //     //     })
    //     //     .catch(this.errorService.handleError);
    // }

    getUser(id: number): Observable<UserForDetail> {
        return this.http
            .get(`${this.baseUrl}users/${id}/user-detail`)
            .map(response => <UserForDetail>response)
            .catch(this.errorService.handleError);
    }
    
    saveUser(user)
    {
        return new Promise((resolve, reject) => {
            this.http.post('users/save/' + user.id, user)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    updateUser(id: number, user: UserForDetail)
    {
        return this.http.put(`${this.baseUrl}users/${id}/update`,user)
            .catch(this.errorService.handleError);
    }
    
    deleteShortcut(idUser: number, id: number) {
        return this.http.delete(this.baseUrl + 'users/' + idUser + '/shortcuts/' + id)
            .catch(this.errorService.handleError);
    }

    addShortcut(idUser: number, shortcut: IUserShortcut) {

        return this.http.post(this.baseUrl + 'users/' + idUser + '/shortcuts/', shortcut)
            .catch(this.errorService.handleError);
    }

    //Avant le remplacement par jwt global
    // getUsers(): Observable<User[]> {
    //     return this.authHttp.get(this.baseUrl + 'user',this.jwt())
    //         .map(response => <User[]>response.json())
    //         .catch(this.handleError);
    // }

     //avant remplacement par jwt global
    // private jwt() {
    //     let token = localStorage.getItem('budgetToken');
    //     if(token)
    //     {
    //         let headers = new Headers({'Authorization': 'Bearer ' + token});
    //         headers.append('content-type','application/json');

    //         return new RequestOptions({headers: headers});
    //     }
    // }


}