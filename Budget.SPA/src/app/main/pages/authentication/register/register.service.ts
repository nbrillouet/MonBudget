import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {
    baseUrl = environment.apiUrl;
    // baseUrl = 'http://localhost:5001/api/auth/'

    constructor(private http: HttpClient) { }

    register(model: any)
    {
        return this.http
            .post(`${this.baseUrl}register`,model)
            // .catch(this.handleError);
    }

    // private requestOptions()
    // {
    //     const headers = new Headers({'Content-type': 'application/json'});
    //     return new RequestOptions({headers: headers});
    // }

  
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
}