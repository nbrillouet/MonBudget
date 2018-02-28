import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { User } from '../../../../_models/User';

@Injectable()
export class LoginService {
    baseUrl = 'http://localhost:5001/api/auth/'
    userToken: any;
    currentUser: User;

    constructor(private http: Http) { }
    
    login(model: any) {
        const headers = new Headers({'Content-type': 'application/json'});
        const options = new RequestOptions({headers: headers});
        return this.http
            .post(this.baseUrl + 'login',model, options)
            .map((response:Response)=>{
                const user = response.json();
                if(user){
                    localStorage.setItem('budgetToken',user.tokenString);
                    this.userToken = user.tokenString;

                    localStorage.setItem('user', JSON.stringify(user.user));
                    this.currentUser = user.user;
                }
            })
            .catch(this.handleError);
    }

    //TODO factoriser (meme que dans login)
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

}