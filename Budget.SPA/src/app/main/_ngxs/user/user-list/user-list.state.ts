import { DataInfos } from "app/main/_models/generics/table-info.model";
import { UserTable } from "app/main/_models/user.model";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { UserService } from "app/main/apps/referential/user/user.service";
import { NotificationsService } from "angular2-notifications";
import { LoadUserTableDatas, LoadUserTableDatasSuccess, ClearUserTableDatas } from "./user-list.action";
import { UpdatePaginationUserTableFilter } from "../user-list-filter/user-list-filter.action";

export class UserTableStateModel extends DataInfos<UserTable> {
    constructor () {
        super();
        // this.filter = null; //new PlanFilter();
    }
}

let tableInfo = new UserTableStateModel();
@State<UserTableStateModel>({
    name: 'UserTable',
    defaults : tableInfo
})

export class UserTableState {
    constructor(
        private _userService: UserService,
        private _store: Store,
        private _notification: NotificationsService) {
    }

    @Selector()
    static get(state: UserTableStateModel) {
        return state;
    }

    @Action(LoadUserTableDatas)
    loadGrid(context: StateContext<UserTableStateModel>, action: LoadUserTableDatas) {
        const state = context.getState();
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;
        // state.datas = action.payload;
        state.datas = null;
        
        context.patchState(state);
        this._userService.getUserTable(action.payload)
            .subscribe(result=> {
                context.dispatch(new LoadUserTableDatasSuccess(result));
            });
    }

    @Action(LoadUserTableDatasSuccess)
    loadSuccess(context: StateContext<UserTableStateModel>, action: LoadUserTableDatasSuccess) {
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas = action.payload.datas;

        context.patchState(state);
        this._store.dispatch(new UpdatePaginationUserTableFilter(action.payload.pagination));
    }

    @Action(ClearUserTableDatas)
    clear(context: StateContext<UserTableStateModel>) {
        return context.setState(new UserTableStateModel());
    }
}