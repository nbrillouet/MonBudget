import { Injectable } from "@angular/core";
import { FilterUserTableSelected } from "app/main/_models/filters/user.filter";
import { FilterSelected } from "app/main/_models/generics/filter.info.model";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { SynchronizeUserTableFilterSelected, UpdatePaginationUserTableFilterSelected } from "./user-table-filter-selected.action";
import { LoadUserTable } from "../user-table.action";

export class UserTableFilterSelectedStateModel extends FilterSelected<FilterUserTableSelected> {
    constructor () {
        super(FilterUserTableSelected);
    }
}

let userTableFilterSelectedStateModel = new UserTableFilterSelectedStateModel();

@State<UserTableFilterSelectedStateModel>({
    name: 'UserTableFilterSelected',
    defaults : userTableFilterSelectedStateModel
})

@Injectable()
export class UserTableFilterSelectedState extends LoaderState {
    constructor(
        private _store: Store
        ) {
            super();
    }

    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    //   }

    @Selector()
    static get(state: UserTableFilterSelectedStateModel) {
        return state;
    }
       

    @Action(UpdatePaginationUserTableFilterSelected)
    UpdatePaginationUserTableFilterSelected(context: StateContext<UserTableFilterSelectedStateModel>, action: UpdatePaginationUserTableFilterSelected) {
        this.loading(context,'filter-selected');

        let state = context.getState();
        state.selected.pagination = action.payload;
        context.patchState(state);

        this.loaded(context,'filter-selected');
    }

    @Action(SynchronizeUserTableFilterSelected)
    SynchronizeUserTableFilterSelected(context: StateContext<UserTableFilterSelectedStateModel>, action: SynchronizeUserTableFilterSelected) {
        this.loading(context,'filter-selected');
        let state = context.getState();
        state.selected = action.payload;
        context.patchState(state);
        this.loaded(context,'filter-selected');

        this._store.dispatch(new LoadUserTable(action.payload));
    }

}
