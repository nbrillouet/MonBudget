import { UserTable } from "app/main/_models/user.model";
import { UserService } from "app/main/apps/referential/user/user.service";
import { LoadUserTableDatas, ClearUserTableDatas } from "./user-list.action";
import { UpdatePaginationUserTableFilter } from "../user-list-filter/user-list-filter.action";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { LoaderState } from "../../_base/loader-state";
import { Datas } from "app/main/_models/generics/detail-info.model";

export class UserTableStateModel extends Datas<UserTable[]> {
    constructor () {
        super();
    }
}

let tableInfo = new UserTableStateModel();
@State<UserTableStateModel>({
    name: 'UserTable',
    defaults : tableInfo
})

export class UserTableState extends LoaderState {
    constructor(
        private _userService: UserService,
        private _store: Store) {
            super();
    }

    @Selector()
    static get(state: UserTableStateModel) {
        return state;
    }

    @Action(LoadUserTableDatas)
    loadGrid(context: StateContext<UserTableStateModel>, action: LoadUserTableDatas) {
        this.loading(context,'datas');
        
        const state = context.getState();
        state.datas = null;
        context.patchState(state);

        this._userService.getUserTable(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = action.payload.datas;
                context.patchState(state);
                //TODO a controler
                this._store.dispatch(new UpdatePaginationUserTableFilter(action.payload.pagination));

                this.loaded(context,'datas');
            });
    }

    // @Action(LoadUserTableDatasSuccess)
    // loadSuccess(context: StateContext<UserTableStateModel>, action: LoadUserTableDatasSuccess) {
    //     let state = context.getState();
    //     state.datas = action.payload.datas;

    //     context.patchState(state);
    //     this._store.dispatch(new UpdatePaginationUserTableFilter(action.payload.pagination));
    // }

    @Action(ClearUserTableDatas)
    clear(context: StateContext<UserTableStateModel>) {
        return context.setState(new UserTableStateModel());
    }
}