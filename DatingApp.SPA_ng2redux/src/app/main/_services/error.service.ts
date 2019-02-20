import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ErrorService {

constructor() { }

public handleError(error: any)
    {
        console.log('ERROR',error);
        const applicationError = error.headers.get('Application-Error');
        if(applicationError){
            return Observable.throw(applicationError);
        }
        // console.log('ERROR',error);
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


