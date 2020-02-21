import { UserTable } from "app/main/_models/user.model";
import { UserService } from "app/main/apps/referential/user/user.service";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { LoaderState } from "../../_base/loader-state";
import { Datas } from "app/main/_models/generics/detail-info.model";
import { Injectable } from "@angular/core";
import { UpdatePaginationUserTableFilterSelected } from "./user-table-filter-selected/user-table-filter-selected.action";
import { LoadUserTable, ClearUserTable } from "./user-table.action";

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

@Injectable()
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

    @Action(LoadUserTable)
    loadGrid(context: StateContext<UserTableStateModel>, action: LoadUserTable) {
        this.loading(context,'datas');
        
        const state = context.getState();
        state.datas = null;
        context.patchState(state);

        this._userService.getUserTable(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result.datas;
                context.patchState(state);

                this._store.dispatch(new UpdatePaginationUserTableFilterSelected(result.pagination));

                this.loaded(context,'datas');
            });
    }

    @Action(ClearUserTable)
    clear(context: StateContext<UserTableStateModel>) {
        return context.setState(new UserTableStateModel());
    }
}