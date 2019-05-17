import { ReferentialService } from "app/main/_services/Referential/referential.service";
import { DataInfo } from "app/main/_models/generics/detail-info.model";
import { IAccountForDetail } from "app/main/_models/referential/account.model";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { LoadAccountForDetail, LoadAccountForDetailSuccess, ClearAccountForDetail, AccountForDetailChangeBankFamilySuccess, AccountForDetailChangeBankFamily, AccountForDetailChangeBankSubFamilySuccess, AccountForDetailChangeBankSubFamily } from "./account-detail.action";
import { ComboSimple } from "app/main/_models/generics/combo.model";
import { ISelect, EnumSelectType } from "app/main/_models/generics/select.model";


export class AccountForDetailStateModel extends DataInfo<IAccountForDetail> {
    constructor () {
        super();
    }
}

let accountForDetailStateModel = new AccountForDetailStateModel();

@State<AccountForDetailStateModel>({
    name: 'AccountForDetail',
    defaults : accountForDetailStateModel
})

export class AccountForDetailState {

    constructor(
        // private _AccountService: AccountService,
        private _referentialService: ReferentialService
        ) {
    }

    @Selector()
    static get(state: AccountForDetailStateModel) {

        return state;
    }

    @Action(LoadAccountForDetail)
    loadAccountForDetail(context: StateContext<AccountForDetailStateModel>, action: LoadAccountForDetail) {
        const state = context.getState();
        
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;
        state.datas = null;
        
        context.patchState(state);
        this._referentialService.accountService.GetForDetail(action.payload)
            .subscribe(result=> {
                context.dispatch(new LoadAccountForDetailSuccess(result));
            });

    }

    @Action(LoadAccountForDetailSuccess)
    loadSuccess(context: StateContext<AccountForDetailStateModel>, action: LoadAccountForDetailSuccess) {
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas = action.payload;

        context.patchState(state);
    }

    @Action(ClearAccountForDetail)
    clear(context: StateContext<AccountForDetailStateModel>) {
        return context.setState(new AccountForDetailStateModel());
    }

    //====================================
    //          BankFamily
    //====================================
    @Action(AccountForDetailChangeBankFamily)
    accountForDetailChangeBankFamily(context: StateContext<AccountForDetailStateModel>, action: AccountForDetailChangeBankFamily) {
        const state = context.getState();
        
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;
        state.datas.bankFamily.selected = action.payload;
        state.datas.bankSubFamily = new ComboSimple<ISelect>();
        
        context.patchState(state);
        this._referentialService.bankSubFamilyService.GetSelectList(action.payload.id,EnumSelectType.inconnu)
            .subscribe(result=> {
                context.dispatch(new AccountForDetailChangeBankFamilySuccess(result));
            });
    }

    @Action(AccountForDetailChangeBankFamilySuccess)
    accountForDetailChangeBankFamilySuccess(context: StateContext<AccountForDetailStateModel>, action: AccountForDetailChangeBankFamilySuccess) {

        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas.bankSubFamily.list = action.payload;
        state.datas.bankSubFamily.selected = action.payload[0];

        context.patchState(state);
    }

    //====================================
    //          BankSubFamily
    //====================================
    @Action(AccountForDetailChangeBankSubFamily)
    accountForDetailChangeBankSubFamily(context: StateContext<AccountForDetailStateModel>, action: AccountForDetailChangeBankSubFamily) {
        const state = context.getState();
        
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;
        state.datas.bankSubFamily.selected = action.payload;
        state.datas.bankAgency = new ComboSimple<ISelect>();
        
        context.patchState(state);
        this._referentialService.bankAgencyService.GetSelectList(action.payload.id,EnumSelectType.inconnu)
            .subscribe(result=> {
                context.dispatch(new AccountForDetailChangeBankSubFamilySuccess(result));
            });
    }

    @Action(AccountForDetailChangeBankSubFamilySuccess)
    accountForDetailChangeBankSubFamilySuccess(context: StateContext<AccountForDetailStateModel>, action: AccountForDetailChangeBankSubFamilySuccess) {

        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas.bankAgency.list = action.payload;
        state.datas.bankAgency.selected = action.payload[0];

        context.patchState(state);
    }

    
    
}