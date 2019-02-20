import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../../../../../environments/environment';
import { IUser } from '../../../../_models/user.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthHttp } from 'angular2-jwt';
import { PaginatedResult, Pagination } from '../../../../_models/pagination.model';
import { ErrorService } from '../../../../_services/error.service';
import { IUserShortcut } from '../../../../_models/user-shortcut.model';

@Injectable()
export class UserService {
    baseUrl = environment.apiUrl;
    onUserChanged: BehaviorSubject<any> = new BehaviorSubject({});

    constructor(
        private authHttp: AuthHttp,
        private errorService: ErrorService
    ) { }
    
    //apres remplacement par jwt global (voir bas de page pour avant remplacement)
    // getUsers(): Observable<User[]> {
    //     return this.authHttp
    //         .get(this.baseUrl + 'user')
    //         .map(response => <User[]>response.json())
    //         .catch(this.handleError);
    // }

    // getUsers(page?:number,itemsPerPage?: number) {
    getUsers(pagination?: Pagination) {
        const paginatedResult: PaginatedResult<IUser[]> = new PaginatedResult<IUser[]>();
        let queryString = '?';

        // if(page !=null && itemsPerPage !=null) {
        if(pagination.currentPage !=null && pagination.itemsPerPage !=null)
        {
            queryString += 'pageNumber=' + pagination.currentPage 
                + '&pageSize=' + pagination.itemsPerPage 
                + '&sortColumn=' + pagination.sortColumn 
                + '&sortDirection=' + pagination.sortDirection;
        }

        return this.authHttp
            .get(this.baseUrl + 'users' + queryString)
            .map((response: Response) => {
                paginatedResult.result = response.json();
                if(response.headers.get('Pagination') != null) {
                    paginatedResult.pagination = JSON.parse(response.headers.get('pagination'));
                }
                
                return paginatedResult;
            })
            .catch(this.errorService.handleError);
    }

    getUser(id: number): Observable<IUser> {
        return this.authHttp
            .get(`${this.baseUrl}users/${id}/user-detail`)
            .map(response => <IUser>response.json())
            .catch(this.errorService.handleError);
    }
    
    saveUser(user)
    {
        return new Promise((resolve, reject) => {
            this.authHttp.post('users/save/' + user.id, user)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    updateUser(id: number, user: IUser)
    {
        return this.authHttp.put(`${this.baseUrl}users/${id}/update`,user)
            .catch(this.errorService.handleError);
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
    
    deleteShortcut(idUser: number, id: number) {
        return this.authHttp.delete(this.baseUrl + 'users/' + idUser + '/shortcuts/' + id)
            .catch(this.errorService.handleError);
    }

    addShortcut(idUser: number, shortcut: IUserShortcut) {
        return this.authHttp.post(this.baseUrl + 'users/' + idUser + '/shortcuts/', shortcut)
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