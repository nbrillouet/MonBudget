import { IUser, User } from "app/main/_models/user.model";
// import { State, Action, StateContext, Selector } from 'app/main/_ngxs/user/user-detail/node_modules/@ngxs/store';
import { AddUser, DeleteUser, User_DeleteShortcut, User_DeleteShortcutSuccess, User_AddShortcut, LoadUserDetailSuccess, LoadUserDetail } from "./user-detail.action";
import { UserService } from "app/main/apps/referential/user/user.service";
import { IUserShortcut } from "app/main/_models/user-shortcut.model";
import { State, Action, StateContext, Selector } from "@ngxs/store";
import { NotificationsService } from "angular2-notifications";
// import { NotificationsService } from "app/main/_ngxs/user/user-detail/node_modules/angular2-notifications";

export class UserDetailStateModel extends User  {

}


let user = null;// new User(); // <IUser> {id: null,userName: null,lastName: null,firstName: null,gender: null,age: null,dateCreated: null, dateLastActive: null,dateOfBirth:null,idGMapAddress : null,IdAvatarCloud : null,avatarUrl: null,shortcuts: null,banks: null}
@State<UserDetailStateModel>({
    name: 'user',
    defaults : user
    // defaults : {
    //     user : null
    // }
})

export class UserDetailState {
    constructor(
        private _userService: UserService,
        private _notification: NotificationsService) {
        
    }

    @Selector()
    static getUser(state: UserDetailStateModel) {
        return state;
    }

    @Action(LoadUserDetail)
    loadUserDetail(context: StateContext<UserDetailStateModel>, action: LoadUserDetail) {
        const state = context.getState();

        this._userService.getUser(action.payload.id)
            .subscribe(result=> {
                context.dispatch(new LoadUserDetailSuccess(result));
                this._notification.success('user-->chargement!','user chargé');
            });
            // ,error => {
            //     this.notification.error('Erreur connexion',error);
            // })
    }

    @Action(LoadUserDetailSuccess)
    loadUserDetailSuccess(context: StateContext<UserDetailStateModel>, action: LoadUserDetailSuccess) {

        context.patchState(
            action.payload
        );

    }


    @Action(AddUser)
    save(context: StateContext<UserDetailStateModel>, action: AddUser) {
        const state = context.getState();
        context.patchState(
             action.payload
        
        );
    }

    @Action(DeleteUser)
    remove(context: StateContext<UserDetailStateModel>, action: DeleteUser) {
        const state = context.getState();
        context.patchState(
            state
        );
    }

    @Action(User_DeleteShortcut)
    removeShortcut(context: StateContext<UserDetailStateModel>, action: User_DeleteShortcut) {
        const state = context.getState();

        this._userService.deleteShortcut(state.id,action.id)
            .subscribe(result=> {
                context.dispatch(new User_DeleteShortcutSuccess(action.id));

                state.shortcuts.splice(state.shortcuts.findIndex(x=>x.id==action.id), 1)
            })
    }

    @Action(User_DeleteShortcutSuccess)
    removeShortcutSuccess(context: StateContext<UserDetailStateModel>, action: User_DeleteShortcutSuccess) {
        const state = context.getState();
        state.shortcuts.splice(state.shortcuts.findIndex(x=>x.id==action.id), 1);
        
        context.patchState(
            state
        );

    }

    @Action(User_AddShortcut)
    addShortcut(context: StateContext<UserDetailStateModel>, action: User_AddShortcut) {
        const state = context.getState();

        this._userService.addShortcut(state.id,action.shortcut)
            .subscribe(result=> {
                state.shortcuts.push(<IUserShortcut>result);
                
                context.patchState(
                    state
                );
            })
    }

}