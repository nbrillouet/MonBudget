
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserForDetail, UserForRegister, UserForPasswordChange, UserForAuth } from '../_models/user.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IUserShortcut } from '../_models/user-shortcut.model';
import { environment } from '../../../environments/environment';
import { Store } from '@ngxs/store';
import { ClearUserDetail } from '../_ngxs/user/user-detail/user-detail.action';
import { ClearNavigation } from '../_ngxs/navigation/navigation.action';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';


@Injectable()
export class UserAuthService {
    baseUrl = environment.apiUrl;
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
        private _router: Router
        ) { }

    changeAvatar(avatarUrl: string) {
        this.avatarUrl.next(avatarUrl);
    }

    changeShortcuts(shortcuts: IUserShortcut[])
    {
        this.shortcuts.next(shortcuts);
    }

    login(username: string, password: string) {
        return this._httpClient
            .post<UserForAuth>(`${this.baseUrl}auth/login`, { username:username, password:password });
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
    }

}