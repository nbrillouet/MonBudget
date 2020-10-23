import { DataInfo } from "app/main/_models/generics/detail-info.model";
import { UserForAuth } from "app/main/_models/user.model";
import { LoaderState } from "../../_base/loader-state";
import { UserAuthService } from "app/main/_services/auth.service";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { Login } from "./user-auth.action";
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

    // @Action(SynchronizeAsDetail)
    // synchronize(context: StateContext<AsDetailStateModel>, action: SynchronizeAsDetail) {
    //     let state = context.getState();
    //     context.patchState(state);
    // }

    // @Action(ClearAsDetail)
    // clear(context: StateContext<AsDetailStateModel>) {
    //     return context.setState(new AsDetailStateModel());
    // }
}