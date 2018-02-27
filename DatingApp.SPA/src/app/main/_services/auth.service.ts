
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {
    baseUrl = 'http://localhost:5001/api/auth/'
    userToken: any;
    decodedToken : any;
    jwtHleper:JwtHelper = new JwtHelper();

    constructor(private http: Http) { }
    
    login(model: any) {
        const headers = new Headers({'Content-type': 'application/json'});
        const options = new RequestOptions({headers: headers});
        return this.http.post(this.baseUrl + 'login',model, options).map((response:Response)=>{
            const user = response.json();
            if(user){
                localStorage.setItem('budgetToken',user.tokenString);
                this.decodedToken = this.jwtHleper.decodeToken(user.tokenString);
                console.log(this.decodedToken);
                this.userToken = user.tokenString;
            }
        }).catch(this.handleError);
    }

    register(model: any)
    {
        return this.http.post(this.baseUrl + 'register',model, this.requestOptions())
            .catch(this.handleError);
    }

    loggedIn(){
        return tokenNotExpired('budgetToken');
    }

    private requestOptions()
    {
        const headers = new Headers({'Content-type': 'application/json'});
        return new RequestOptions({headers: headers});
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

}