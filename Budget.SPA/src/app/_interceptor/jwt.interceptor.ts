import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { IUser, UserLoaded, IUserForLabel } from 'app/main/_models/user.model';
import { LoadUserDetail } from 'app/main/_ngxs/user/user-detail/user-detail.action';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //exclusion d adresse exterieur pour l'authorisation
        const excludeHttp = 'maps.googleapis.com';
        
        // add authorization header with jwt token if available
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token && request.url.search(excludeHttp)===-1) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
            
        }

        return next.handle(request);
    }

    constructor(
        private store: Store,
        private userLoaded: UserLoaded ) {
        
    }

    loadCurrentUser(currentUser:IUserForLabel) {

        this.store.dispatch(new LoadUserDetail(<IUser>currentUser));
        this.userLoaded.isLoaded=true;
    }

}