import { DataInfo } from "app/main/_models/generics/detail-info.model";
import { FilterAccountDetail } from "app/main/_models/filters/account.filter";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { ReferentialService } from "app/main/_services/Referential/referential.service";
import { LoadAccountDetailFilter, ClearAccountDetailFilter, AccountDetailFilterChangeBankFamily, AccountDetailFilterChangeBankSubFamily } from "./account-detail-filter.action";
import { EnumSelectType } from "app/main/_models/generics/select.model";

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

    //====================================
    //          Bank family
    //====================================
    // Le changement de bank family implique le changement de BANK_SUB_FAMILY
    @Action(AccountDetailFilterChangeBankFamily)
    AccountDetailFilterChangeBankFamily(context: StateContext<AccountDetailFilterStateModel>, action: AccountDetailFilterChangeBankFamily) {
        this.loading(context,'bankFamily');
        const state = context.getState();
        state.datas.bankSubFamily = [];

        context.patchState(state);
        this._referentialService.bankSubFamilyService.GetSelectList(action.payload.id,EnumSelectType.inconnu)
            .subscribe(result=> {
                let state = context.getState();
                state.datas.bankSubFamily = result;
                context.patchState(state);

                this.loaded(context,'bankFamily');
            });
    }

    //====================================
    //          Bank sub family
    //====================================
    // Le changement de bank sub family implique le changement de BANK_AGENCY
    @Action(AccountDetailFilterChangeBankSubFamily)
    AccountDetailFilterChangeBankSubFamily(context: StateContext<AccountDetailFilterStateModel>, action: AccountDetailFilterChangeBankSubFamily) {
        this.loading(context,'bankSubFamily');
        const state = context.getState();
        state.datas.bankAgency = [];

        context.patchState(state);
        this._referentialService.bankAgencyService.GetSelectList(action.payload.id,EnumSelectType.inconnu)
            .subscribe(result=> {
                let state = context.getState();
                state.datas.bankAgency = result;
                context.patchState(state);

                this.loaded(context,'bankSubFamily');
            });
    }
}