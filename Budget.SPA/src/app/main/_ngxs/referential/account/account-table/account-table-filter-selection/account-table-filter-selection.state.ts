import { FilterSelection } from "app/main/_models/generics/filter.info.model";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { ReferentialService } from "app/main/_services/Referential/referential.service";
import { LoadAccountTableFilterSelection } from "./account-table-filter-selection.action";
import { FilterAccountTableSelection } from "app/main/_models/filters/account.filter";

export class AccountTableFilterSelectionStateModel extends FilterSelection<FilterAccountTableSelection> {
    constructor () {
        super(FilterAccountTableSelection);
    }
}

let accountTableFilterSelectionStateModel = new AccountTableFilterSelectionStateModel();

@State<AccountTableFilterSelectionStateModel>({
    name: 'AccountTableFilterSelection',
    defaults : accountTableFilterSelectionStateModel
})

@Injectable()
export class AccountTableFilterSelectionState extends LoaderState {

    constructor(
        private _referentialService: ReferentialService
        // private _store: Store
        ) {
            super();
    }

    @Selector()
    static get(state: AccountTableFilterSelectionStateModel) {
        return state;
    }

    @Action(LoadAccountTableFilterSelection)
    LoadAccountTableFilterSelection(context: StateContext<AccountTableFilterSelectionStateModel>, action: LoadAccountTableFilterSelection) {
        this.loading(context,'filter-selection');
        
        const state = context.getState();
        state.selection = null;
        context.patchState(state);
        this._referentialService.accountService.getForTableFilter(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.selection = result;
                context.patchState(state);

                this.loaded(context,'filter-selection');
            });

    }
}