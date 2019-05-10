
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Http, Headers, RequestOptions,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { IUser } from '../_models/user.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IUserShortcut } from '../_models/user-shortcut.model';
import { ErrorService } from './error.service';
import { environment } from '../../../environments/environment';
import { NavigationService } from './navigation.service';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { ISelect } from '../_models/generics/select.model';

@Injectable()
export class AuthService {
    baseUrl = environment.apiUrl;
    userToken: any;
    decodedToken : any;

    currentUser: IUser;
    private avatarUrl = new BehaviorSubject<string>('assets/images/avatars/profile.jpg');
    currentAvatarUrl = this.avatarUrl.asObservable();
    
    shortcutTab: IUserShortcut[];
    private shortcuts = new BehaviorSubject<IUserShortcut[]>(this.shortcutTab);
    currentShortcuts = this.shortcuts.asObservable();

    constructor(
        private errorService: ErrorService,
        private http: HttpClient) { }
    
    loadUserProfile(user: IUser) {
        this.currentUser = user;
        this.changeAvatar(user.avatarUrl);
        this.changeShortcuts(user.shortcuts);

        this.GetBankAgencies(user.id)
            .subscribe(resp=>{
                // var userMenu = new FuseNavigationModel();
                // userMenu.model[0].children.push(this.navigationService.getReferentialMenu(user));
                // userMenu.model[0].children.push(this.navigationService.getBankMenu(resp));
                // userMenu.model[0].children.push(this.navigationService.getImportAccountMenu());
                // this.fuseNavigationService.setNavigationModel(userMenu);

            })
    }

    changeAvatar(avatarUrl: string) {
        this.avatarUrl.next(avatarUrl);
    }

    changeShortcuts(shortcuts: IUserShortcut[])
    {
        this.shortcuts.next(shortcuts);
    }

    GetBankAgencies(idUser:number) {
        return this.http
            .get(this.baseUrl + `users/${idUser}/bankAgencies`)
            .map(response => <ISelect[]>response)
            .catch(this.errorService.handleError);
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${this.baseUrl}auth/login`, { username:username, password:password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes

                    localStorage.setItem('currentUser', JSON.stringify(user));
                    console.log('user', user);
                }
             
                return user;
            }));
    }

    register(model: any)
    {
        return null;

        // return this.http.post(this.baseUrl + 'auth/register',model, this.requestOptions())
        //     .catch(this.errorService.handleError);
    }
    
    // login(username: string, password: string) {
    //     return this.http.post<any>('/api/login', { username, password })
    //     .pipe(map(user => {
    //     // login successful if there's a jwt token in the response
    //     if (user && user.token) {
    //     // store user details and jwt token in local storage to keep user logged in between page refreshes
    //     localStorage.setItem('TokenInfo', JSON.stringify(user));
    //     }
        
    //     return user;
    //     }));
    //     }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    // login(model: any) {
    //     const headers = new Headers({'Content-type': 'application/json'});
    //     const options = new RequestOptions({headers: headers});
    //     return this.http.post(this.baseUrl + 'auth/login',model, options).map((response:Response)=>{
    //         const resp = response.json();
    //         if(resp){
    //             localStorage.setItem('budgetToken',resp.tokenString);
    //             this.decodedToken = this.jwtHleper.decodeToken(resp.tokenString);
    //             this.userToken = resp.tokenString;

    //             localStorage.setItem('user', JSON.stringify(resp.user));
                
    //             this.loadUserProfile(resp.user);
                
                
    //             // this.currentUser = user.user;

    //             // this.changeAvatar(this.currentUser.avatarUrl);
    //             // this.changeShortcuts(this.currentUser.shortcuts);
    //         }
    //     }).catch(this.errorService.handleError);
    // }



    loggedIn(){
        return null;
        // return tokenNotExpired('budgetToken');
    }

    
    private requestOptions()
    {
        const headers = new Headers({'Content-type': 'application/json'});
        return new RequestOptions({headers: headers});
    }

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