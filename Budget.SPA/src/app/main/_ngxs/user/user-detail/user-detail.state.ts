import { UserForDetail } from "app/main/_models/user.model";
import { AddUser, DeleteUser, User_DeleteShortcut, User_AddShortcut, LoadUserDetail, ClearUserDetail, SynchronizeUserDetail } from "./user-detail.action";
import { UserService } from "app/main/apps/referential/user/user.service";
import { IUserShortcut } from "app/main/_models/user-shortcut.model";
import { State, Action, StateContext, Selector } from "@ngxs/store";
import { NotificationsService } from "angular2-notifications";
import { Injectable } from "@angular/core";
import { DataInfo } from "app/main/_models/generics/detail-info.model";
import { LoaderState } from "../../_base/loader-state";

export class UserDetailStateModel extends DataInfo<UserForDetail>  {

}

let user = new UserDetailStateModel();;
@State<UserDetailStateModel>({
    name: 'user',
    defaults : user
})

@Injectable()
export class UserDetailState extends LoaderState {
    constructor(
        private _userService: UserService,
        private _notificationsService: NotificationsService) {
        
            super();
    }

    @Selector()
    static getUser(state: UserDetailStateModel) {  return state; }

    @Action(LoadUserDetail)
    loadUserDetail(context: StateContext<UserDetailStateModel>, action: LoadUserDetail) {

        this.loading(context,'datas');
        context.patchState({datas: null});

        this._userService.getUserForDetail(action.payload.id).subscribe(result=> {
            context.patchState(
                {datas: result}
            );
            this.loaded(context,'datas');
        });

    }

    @Action(ClearUserDetail)
    clear(context: StateContext<UserDetailStateModel>) {
        return context.setState(new UserDetailStateModel());
    }

    @Action(AddUser)
    save(context: StateContext<UserDetailStateModel>, action: AddUser) {
        const state = context.getState();
        context.patchState(
            {datas: action.payload}
        );
    }

    @Action(SynchronizeUserDetail)
    SynchronizeUserDetail(context: StateContext<UserDetailStateModel>, action: SynchronizeUserDetail) {
        let state = context.getState();
        context.patchState(state);
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

        this._userService.deleteShortcut(state.datas.id,action.id)
            .subscribe(result=> {
                //TODO
                // state.shortcuts.splice(state.shortcuts.findIndex(x=>x.id==action.id), 1);
                // context.patchState(state);

            })
    }

    @Action(User_AddShortcut)
    addShortcut(context: StateContext<UserDetailStateModel>, action: User_AddShortcut) {
        const state = context.getState();
        //TODO
        // this._userService.addShortcut(state.id,action.shortcut)
        //     .subscribe(result=> {
        //         state.shortcuts.push(<IUserShortcut>result);
                
        //         context.patchState(
        //             state
        //         );
        //     })
    }

}