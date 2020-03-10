import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'app/main/_services/auth.service';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router } from '@angular/router';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private _authenticationService: AuthService,
        private _notificationsService: NotificationsService,
        private _router: Router
        ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                catchError((err: HttpErrorResponse) => {
                    console.log('ErrorInterceptor',err);
                    switch(err.status) {
                        case 0:
                        case 500:
                            this._router.navigate([`pages/errors/error-500`]);
                            break;
                        case 401:
                            // auto logout if 401 response returned from api
                            this._authenticationService.logout();
                            location.reload(true);
                            break;
                        case 400:
                            for(let t of err.error) {
                                this._notificationsService.warn(`Erreur métier: ${t.code}`,t.label);
                            }

                    }
                    
                    // if (err.status==0 || err.status==500) {
                    //     this._router.navigate(
                    //         [`pages/errors/error-500`]);
                    // }
                    // if (err.status === 401) {
                    //     // auto logout if 401 response returned from api
                    //     this._authenticationService.logout();
                    //     location.reload(true);
                    // }

                    // if(err.error) {
                        
                    //     if(Object.entries(err.error).length>0) {
                    //         for (let [key, value] of Object.entries(err.error)) {  
                    //             this._notification.error(key,value);
    
                    //         }
                    //     }
                    //     else
                    //         this._notification.error(err.statusText,err.error,);
                    //     // for (let [key, value] of Object.entries(err.error)) {  
                    //     //     this._notification.error(key,value);

                    //     //   }

                    // }else {
                    //     this._notification.error(err.statusText,err.error.message);

                    // }


                    return throwError(err);
                }))
    }
}