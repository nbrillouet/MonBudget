import { IUser, User } from "app/main/_models/user.model";
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddUser, DeleteUser, LoadUser, LoadUserSuccess, User_DeleteShortcut, User_DeleteShortcutSuccess, User_AddShortcut } from "./user.action";
import { UserService } from "app/main/apps/referential/user/user.service";
import { IUserShortcut } from "app/main/_models/user-shortcut.model";
import { NotificationsService } from "angular2-notifications";

export class UserStateModel extends User  {

}


let user = null;// new User(); // <IUser> {id: null,userName: null,lastName: null,firstName: null,gender: null,age: null,dateCreated: null, dateLastActive: null,dateOfBirth:null,idGMapAddress : null,IdAvatarCloud : null,avatarUrl: null,shortcuts: null,banks: null}
@State<UserStateModel>({
    name: 'user',
    defaults : user
    // defaults : {
    //     user : null
    // }
})

export class UserState {
    constructor(
        private userService: UserService,
        private notification: NotificationsService) {
        
    }

    @Selector()
    static getUser(state: UserStateModel) {
        return state;
    }

    @Action(LoadUser)
    load(context: StateContext<UserStateModel>, action: LoadUser) {
        const state = context.getState();

        this.userService.getUser(action.payload.id)
            .subscribe(result=> {
                context.dispatch(new LoadUserSuccess(result));
                this.notification.success('user-->chargement!','user chargé');
            },error => {
                this.notification.error('Erreur connexion',error);
            })
    }

    @Action(LoadUserSuccess)
    loadSuccess(context: StateContext<UserStateModel>, action: LoadUser) {

        context.patchState(
            action.payload
        );

    }


    @Action(AddUser)
    save(context: StateContext<UserStateModel>, action: AddUser) {
        const state = context.getState();
        context.patchState(
             action.payload
        
        );
    }

    @Action(DeleteUser)
    remove(context: StateContext<UserStateModel>, action: DeleteUser) {
        const state = context.getState();
        context.patchState(
            state
        );
    }

    @Action(User_DeleteShortcut)
    removeShortcut(context: StateContext<UserStateModel>, action: User_DeleteShortcut) {
        const state = context.getState();

        this.userService.deleteShortcut(state.id,action.id)
            .subscribe(result=> {
                context.dispatch(new User_DeleteShortcutSuccess(action.id));

                state.shortcuts.splice(state.shortcuts.findIndex(x=>x.id==action.id), 1)
            })
    }

    @Action(User_DeleteShortcutSuccess)
    removeShortcutSuccess(context: StateContext<UserStateModel>, action: User_DeleteShortcutSuccess) {
        const state = context.getState();
        state.shortcuts.splice(state.shortcuts.findIndex(x=>x.id==action.id), 1);
        
        context.patchState(
            state
        );

    }

    @Action(User_AddShortcut)
    addShortcut(context: StateContext<UserStateModel>, action: User_AddShortcut) {
        const state = context.getState();

        this.userService.addShortcut(state.id,action.shortcut)
            .subscribe(result=> {
                state.shortcuts.push(<IUserShortcut>result);
                
                context.patchState(
                    state
                );
            })
    }

}