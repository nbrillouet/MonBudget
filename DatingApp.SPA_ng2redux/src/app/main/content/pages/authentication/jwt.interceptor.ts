import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //exclusion d adresse exterieur pour l'authorisation
        const excludeHttp = 'maps.googleapis.com';
        
        
        console.log('request.url',request.url.search(excludeHttp));
        if(request.url.search(excludeHttp)===-1)
        {
        // add authorization header with jwt token if available
        let budgetToken = JSON.parse(localStorage.getItem('budgetToken'));
        if (budgetToken && budgetToken.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${budgetToken.token}`
                }
            });
        }
    }
        return next.handle(request);
    }
}