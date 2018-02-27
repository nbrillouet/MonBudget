import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../../../../environments/environment';
import { User } from '../../../_models/User';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class UserService {
    baseUrl = environment.apiUrl;
    onUserChanged: BehaviorSubject<any> = new BehaviorSubject({});

    constructor(
        private authHttp: AuthHttp
    ) { }
    
    //apres remplacement par jwt global (voir bas de page pour avant remplacement)
    getUsers(): Observable<User[]> {
        return this.authHttp
            .get(this.baseUrl + 'user')
            .map(response => <User[]>response.json())
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