import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../../../../environments/environment';
import { User } from '../../../_models/User';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthHttp } from 'angular2-jwt';
import { IShortcut } from '../../../_models/Shortcut';
import { PaginatedResult } from '../../../_models/IPagination';

@Injectable()
export class UserService {
    baseUrl = environment.apiUrl;
    onUserChanged: BehaviorSubject<any> = new BehaviorSubject({});

    constructor(
        private authHttp: AuthHttp
    ) { }
    
    //apres remplacement par jwt global (voir bas de page pour avant remplacement)
    // getUsers(): Observable<User[]> {
    //     return this.authHttp
    //         .get(this.baseUrl + 'user')
    //         .map(response => <User[]>response.json())
    //         .catch(this.handleError);
    // }

    getUsers(page?:number,itemsPerPage?: number) {
        const paginatedResult: PaginatedResult<User[]> = new PaginatedResult<User[]>();
        let queryString = '?';

        if(page !=null && itemsPerPage !=null) {
            queryString += 'pageNumber=' + page + '&pageSize=' + itemsPerPage;
        }

        return this.authHttp
            .get(this.baseUrl + 'user' + queryString)
            .map((response: Response) => {
                paginatedResult.result = response.json();
                if(response.headers.get('Pagination') != null) {
                    paginatedResult.pagination = JSON.parse(response.headers.get('pagination'));
                }
                
                return paginatedResult;
            })
            .catch(this.handleError);
    }

    getUser(id: number): Observable<User> {
        return this.authHttp
            .get(this.baseUrl + 'user/' + id)
            .map(response => <User>response.json())
            .catch(this.handleError);
    }
    
    saveUser(user)
    {
        return new Promise((resolve, reject) => {
            this.authHttp.post('user/save/' + user.id, user)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    updateUser(id: number, user: User)
    {
        return this.authHttp.put(this.baseUrl + 'users/' + id,user)
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

    deleteShortcut(idUser: number, id: number) {
        return this.authHttp.delete(this.baseUrl + 'users/' + idUser + '/shortcuts/' + id)
            .catch(this.handleError);
    }

    addShortcut(idUser: number, shortcut: IShortcut) {
        return this.authHttp.post(this.baseUrl + 'users/' + idUser + '/shortcuts/', shortcut)
            .catch(this.handleError);
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