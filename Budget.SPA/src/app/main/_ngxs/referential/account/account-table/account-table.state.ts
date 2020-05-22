import { Datas } from "app/main/_models/generics/detail-info.model";
import { AccountForTable } from "app/main/_models/referential/account.model";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { ReferentialService } from "app/main/_services/Referential/referential.service";
import { LoadAccountTable, ClearAccountTable } from "./account-table.action";
import { UpdatePaginationAccountTableFilterSelected } from "./account-table-filter-selected/account-table-filter-selected.action";

export class AccountTableStateModel extends Datas<AccountForTable[]> {
    constructor () {
        super();
    }
}

let accountTableStateModel = new AccountTableStateModel();
@State<AccountTableStateModel>({
    name: 'AccountForTable',
    defaults : accountTableStateModel
})

@Injectable()
export class AccountTableState extends LoaderState {
    constructor(
        private _referentialService: ReferentialService,
        private _store: Store
    ) {
        super();
    }

    @Selector()
    static get(state: AccountTableStateModel) {
        return state;
    }

    async delay(ms: number) {
        await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    }

    @Action(LoadAccountTable)
    LoadAccountTable(context: StateContext<AccountTableStateModel>, action: LoadAccountTable) {
        this.loading(context,'datas');
        
        const state = context.getState();
        state.datas = null;
        context.patchState(state);
        
        this._referentialService.accountService.getForTable(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result.datas;
                context.patchState(state);

                this.loaded(context,'datas');
                this._store.dispatch(new UpdatePaginationAccountTableFilterSelected(result.pagination));
            });
    }

    @Action(ClearAccountTable)
    ClearAccountTable(context: StateContext<AccountTableStateModel>) {
        return context.setState(new AccountTableStateModel());
    }



}