import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ErrorService {

constructor() { }

public handleError(error: any)
{
    // let errorMessage = '';
    // if (error.error instanceof ErrorEvent) {
    //     // client-side error
    //     errorMessage = `Error: ${error.error.message}`;
    // } else {
    //     // server-side error
    //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    // }
    // // window.alert(errorMessage);
    // return throwError(errorMessage);







        const applicationError = error.headers.get('Application-Error');
        if(applicationError){
            return Observable.throw(applicationError);
        }
        
        // const applicationError = error.headers.get('Application-Error');
        
        // if(applicationError){
        //     return Observable.throw(applicationError);
        // }
        // const serverError = error.json();
        // let modelStateErrors = '';
        // if(serverError) {
        //     for(const key in serverError)
        //     {
        //         if(serverError[key]){
        //             modelStateErrors += serverError[key] + '\n';
        //         }
        //     }
        // }

        return Observable.throw(
            error._body
            // modelStateErrors || 'Server error'
        );
    }
}


