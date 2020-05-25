import { DataInfo } from "app/main/_models/generics/detail-info.model";
import { FilterAccountDetail } from "app/main/_models/filters/account.filter";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { ReferentialService } from "app/main/_services/Referential/referential.service";
import { LoadAccountDetailFilter, ClearAccountDetailFilter } from "./account-detail-filter.action";

export class AccountDetailFilterStateModel extends DataInfo<FilterAccountDetail> {
    constructor() {
        super();
    }
}

let accountDetailFilterStateModel = new AccountDetailFilterStateModel();
@State<AccountDetailFilterStateModel>({
    name: 'AccountDetailFilter',
    defaults: accountDetailFilterStateModel
})

@Injectable()
export class AccountDetailFilterState extends LoaderState {
    constructor(
        private _referentialService: ReferentialService
    ) {
        super();
    }

    @Selector()
    static get(state: AccountDetailFilterStateModel) {
        return state;
    }

    async delay(ms: number) {
        await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
    }

    @Action(LoadAccountDetailFilter)
    LoadAccountDetailFilter(context: StateContext<AccountDetailFilterStateModel>, action: LoadAccountDetailFilter) {
        this.loading(context,'datas');

        const state = context.getState();
        state.datas = null;
        context.patchState(state);
        
        this._referentialService.accountService.getForDetailFilter(action.payload)
            .subscribe(result => {
                let state = context.getState();
                state.datas = result;
                context.patchState(state);
                
                this.loaded(context,'datas');
            });
    }

    @Action(ClearAccountDetailFilter)
    ClearAccountDetailFilter(context: StateContext<AccountDetailFilterStateModel>) {
        return context.setState(new AccountDetailFilterStateModel());
    }
}