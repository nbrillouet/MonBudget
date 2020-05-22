import { FilterSelected } from "app/main/_models/generics/filter.info.model";
import { FilterAccountTableSelected } from "app/main/_models/filters/account.filter";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { SynchronizeAccountTableFilterSelected, UpdatePaginationAccountTableFilterSelected } from "./account-table-filter-selected.action";
import { LoadAccountTable } from "../account-table.action";

export class AccountTableFilterSelectedStateModel extends FilterSelected<FilterAccountTableSelected> {
    constructor () {
        super(FilterAccountTableSelected);
    }
}

let accountTableFilterSelectedStateModel = new AccountTableFilterSelectedStateModel();

@State<AccountTableFilterSelectedStateModel>({
    name: 'AccountTableFilterSelected',
    defaults : accountTableFilterSelectedStateModel
})

@Injectable()
export class AccountTableFilterSelectedState extends LoaderState {
    constructor(
        private _store: Store
        ) {
            super();
    }

    @Selector()
    static get(state: AccountTableFilterSelectedStateModel) {
        return state;
    }

    @Action(UpdatePaginationAccountTableFilterSelected)
    UpdatePaginationAccountTableFilterSelected(context: StateContext<AccountTableFilterSelectedStateModel>, action: UpdatePaginationAccountTableFilterSelected) {
        let state = context.getState();
        state.selected.pagination = action.payload;
        context.patchState(state);
    }

    @Action(SynchronizeAccountTableFilterSelected)
    SynchronizeAccountTableFilterSelected(context: StateContext<AccountTableFilterSelectedStateModel>, action: SynchronizeAccountTableFilterSelected) {
        
        this.loading(context,'filter-selected');
        let state = context.getState();
        state.selected = action.payload;
        context.patchState(state);
        this.loaded(context,'filter-selected');

        this._store.dispatch(new LoadAccountTable(action.payload));
    }

}