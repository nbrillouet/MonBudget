import { DataInfo } from "app/main/_models/generics/detail-info.model";
import { UserForAuth } from "app/main/_models/user.model";
import { LoaderState } from "../../_base/loader-state";
import { UserAuthService } from "app/main/_services/auth.service";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { Login, Logout, AccountPasswordRecovery, AccountActivation, ChangePassword, Register } from "./user-auth.action";
import { NotificationsService } from "angular2-notifications";
import { Router } from "@angular/router";
import { LoadUserDetail } from "../user-detail/user-detail.action";

export class UserAuthStateModel extends DataInfo<UserForAuth> {
    constructor () {
        super();
    }
}

let detailInfo = new UserAuthStateModel();
@State<UserAuthStateModel>({
    name: 'userAuth',
    defaults : detailInfo
})

@Injectable()
export class UserAuthState extends LoaderState {
    constructor(
        private _userAuthService: UserAuthService,
        private _notificationsService: NotificationsService,
        private _router: Router
    ) 
    {
        super();
    }

    @Selector() static get(state: UserAuthState) { return state;  }

    @Action(Login)
    login(context: StateContext<UserAuthStateModel>, action: Login) {

        this.loading(context,'login');

        this._userAuthService.login(action.payload.username, action.payload.password).subscribe(result=> {

            localStorage.setItem('userInfo', JSON.stringify(result));

            //chargement du detail utilisateur
            context.dispatch(new LoadUserDetail({id:result.id}));
            
            this._notificationsService.success('Connexion réussie!','Vous êtes maintenant connecté');

            this._router.navigate(['/apps/dashboards/dashboard-home']);

            this.loaded(context,'login');
        });
    }

    @Action(Logout)
    logout(context: StateContext<UserAuthStateModel>, action: Logout) {
        this.loading(context,'logout');
        this._userAuthService.logout();
        this.loaded(context,'logout');
    }

    @Action(AccountPasswordRecovery)
    accountPasswordRecovery(context: StateContext<UserAuthStateModel>, action: AccountPasswordRecovery) {
        this.loading(context,'accountPasswordRecovery');

        this._userAuthService.accountPasswordRecovery(action.payload.email).subscribe(()=>{
            this._notificationsService.success('Réinitialisation mot de passe','Un email a été envoyé');
            this.loaded(context,'accountPasswordRecovery');
        });
    }

    @Action(AccountActivation)
    accountActivation(context: StateContext<UserAuthStateModel>, action: AccountActivation) {
        this.loading(context,'accountActivation');
        
        this._userAuthService.accountActivation(action.payload.validationCode).subscribe(()=>{
            this._notificationsService.success('Activation compte','Votre compte est activé!')
            this._router.navigate(['/pages/auth/login']);
            
            this.loaded(context,'accountActivation');
        });
    }

    @Action(ChangePassword)
    changePassword(context: StateContext<UserAuthStateModel>, action: ChangePassword) {
        this.loading(context,'changePassword');

        this._userAuthService.changePassword(action.payload.userForPasswordChange).subscribe(()=>{
            this._notificationsService.success('Modification mot de passe','votre mot de passe est modifié!');
            this._router.navigate(['/pages/auth/login']);

            this.loaded(context,'changePassword');
        });
    }

    @Action(Register)
    register(context: StateContext<UserAuthStateModel>, action: Register) {
        this.loading(context,'register');

        this._userAuthService.register(action.payload.userForRegister).subscribe(()=>{
            this._router.navigate(['/pages/auth/mail-confirm']);

            this.loaded(context,'register');
        });
    }
 
}