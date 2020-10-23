import { Injectable, OnInit } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { UserForDetail } from 'app/main/_models/user.model';
import { UserDetailState } from 'app/main/_ngxs/user/user-detail/user-detail.state';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
// @Select(UserDetailState.getUser) user$: Observable<UserForDetail>;
 
// currentUser: UserForDetail;

    constructor() {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //exclusion d adresse exterieur pour l'authorisation
        const excludeHttp = 'maps.googleapis.com';
        // add authorization header with jwt token if available
        let user = JSON.parse(localStorage.getItem('userInfo'));

        if(user?.token && request.url.search(excludeHttp)===-1) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${user.token}`
                }
            });
        }

        // if (this.currentUser && this.currentUser.token && request.url.search(excludeHttp)===-1) {
        //     request = request.clone({
        //         setHeaders: { 
        //             Authorization: `Bearer ${this.currentUser.token}`
        //         }
        //     });
        // }
        // let token = JSON.parse(localStorage.getItem('currentUser'));
        // if (currentUser && currentUser.token && request.url.search(excludeHttp)===-1) {
        //     request = request.clone({
        //         setHeaders: { 
        //             Authorization: `Bearer ${currentUser.token}`
        //         }
        //     });
        // }

        return next.handle(request);
    }

}