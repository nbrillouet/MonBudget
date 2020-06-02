
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { UserForDetail, UserForRegister, UserForPasswordChange } from '../_models/user.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IUserShortcut } from '../_models/user-shortcut.model';
import { environment } from '../../../environments/environment';
import { ISelect } from '../_models/generics/select.model';
import { Store } from '@ngxs/store';
import { ClearUserDetail, LoadUserDetail } from '../_ngxs/user/user-detail/user-detail.action';
import { ClearNavigation } from '../_ngxs/navigation/navigation.action';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';
import { UserService } from '../apps/referential/user/user.service';

@Injectable()
export class AuthService {
    baseUrl = environment.apiUrl;
    userToken: any;
    decodedToken : any;

    currentUser: UserForDetail;
    private avatarUrl = new BehaviorSubject<string>('assets/images/avatars/profile.jpg');
    currentAvatarUrl = this.avatarUrl.asObservable();
    
    shortcutTab: IUserShortcut[];
    private shortcuts = new BehaviorSubject<IUserShortcut[]>(this.shortcutTab);
    currentShortcuts = this.shortcuts.asObservable();

    constructor(
        private _httpClient: HttpClient,
        private _store: Store,
        private _notificationsService: NotificationsService,
        private _router: Router,
        private _userService: UserService
        ) { }
    
    loadUserProfile(user: UserForDetail) {
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
        return this._httpClient
            .get(this.baseUrl + `users/${idUser}/bankAgencies`)
            .map(response => <ISelect[]>response);
            // .catch(this.errorService.handleError);
    }

    login(username: string, password: string) {
        return this._httpClient.post<UserForDetail>(`${this.baseUrl}auth/login`, { username:username, password:password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // localStorage.setItem('token', JSON.stringify(user.token));
                    this._store.dispatch(new LoadUserDetail(user));
                    // localStorage.setItem('currentUser', JSON.stringify(user));

                    // // store user details and jwt token in local storage to keep user logged in between page refreshes
                    // this._userService.getUser(user.id).subscribe(x=>{
                    //     let usercurrent = x;
                    //     console.log('usercurrent',usercurrent);
                       
                    // })
                    
                }
             
                return user;
            }));
    }

    register(model: any)
    {
        return this._httpClient.post(this.baseUrl + 'auth/register',model)
            // .catch(this.errorService.handleError);
    }

    accountActivation(code: string) {
        return this._httpClient
            .get(`${this.baseUrl}auth/account-activation/${code}`)
            .map(response => <any>response)

        // return this.http.post(this.baseUrl + 'auth/account-activation',code)
    }
    
    accountPasswordRecovery(mail: string) {
        return this._httpClient
            .get(`${this.baseUrl}auth/account-password-recovery/${mail}`)
            .map(response => <any>response)
    }

    getUserEncrypt(user: string) {
        return this._httpClient
            .get(`${this.baseUrl}auth/user-encrypt/${encodeURIComponent(user)}`)
            .map(response => <UserForRegister>response)
    }

    changePassword(user: UserForPasswordChange) {
        return this._httpClient
            .post<any>(`${this.baseUrl}auth/change-password`,user);
    }

    logout() {
        // remove user from local storage to log user out
        this.currentUser = null;
        this._store.dispatch(new ClearNavigation());
        this._store.dispatch(new ClearUserDetail());
        localStorage.clear();
        
        this._notificationsService.info('logged out success','Vous êtes maintenant déconnecté');
        this._router.navigate(['/pages/auth/login']);
    }

    loggedIn(){
        return null;
        // return tokenNotExpired('budgetToken');
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