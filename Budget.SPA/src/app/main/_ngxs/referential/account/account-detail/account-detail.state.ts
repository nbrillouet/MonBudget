import { DetailInfo } from "app/main/_models/generics/detail-info.model";
import { AccountForDetail } from "app/main/_models/referential/account.model";
import { FilterForDetail } from "app/main/_models/filters/shared/filterDetail.filter";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { ReferentialService } from "app/main/_services/Referential/referential.service";
import { LoadAccountDetail, SynchronizeAccountDetail, ClearAccountDetail } from "./account-detail.action";
import { LoadAccountDetailFilter } from "./account-detail-filter/account-detail-filter.action";

export class AccountDetailStateModel extends DetailInfo<AccountForDetail, FilterForDetail> {
    constructor () {
        super();
        this.filter = new FilterForDetail();
    }
}

let detailInfo = new AccountDetailStateModel();
@State<AccountDetailStateModel>({
    name: 'AccountDetail',
    defaults : detailInfo
})

@Injectable()
export class AccountDetailState extends LoaderState {
    constructor(
        private _referentialService: ReferentialService
    ) 
    {
        super();
        
    }

    //fonction delay (test asynchro)
    async delay(ms: number) {
        await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    }

    @Selector() static get(state: AccountDetailStateModel) { return state;  }
    @Selector() static getFilter(state: AccountDetailStateModel) { return state.filter; }

    @Action(LoadAccountDetail)
    LoadOtfDetail(context: StateContext<AccountDetailStateModel>, action: LoadAccountDetail) {
        
        this.loading(context,'datas');
        const state = context.getState();

        state.filter = action.payload;
        state.datas = null;

        context.patchState(state);
        
        this._referentialService.accountService.getForDetail(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');

                //chargement des filtres associés
                context.dispatch(new LoadAccountDetailFilter(state.datas));
            });
    }

    
    @Action(SynchronizeAccountDetail)
    SynchronizeAccountDetail(context: StateContext<AccountDetailStateModel>, action: SynchronizeAccountDetail) {
        let state = context.getState();
        context.patchState(state);
    }

    @Action(ClearAccountDetail)
    ClearAccountDetail(context: StateContext<AccountDetailStateModel>) {
        return context.setState(new AccountDetailStateModel());
    }
}

// import { ReferentialService } from "app/main/_services/Referential/referential.service";
// import { IAccountForDetail } from "app/main/_models/referential/account.model";
// import { State, Selector, Action, StateContext } from "@ngxs/store";
// import { LoadAccountForDetail, ClearAccountForDetail, AccountForDetailChangeBankFamily, AccountForDetailChangeBankSubFamily } from "./account-detail.action";
// import { ComboSimple } from "app/main/_models/generics/combo.model";
// import { ISelect, EnumSelectType } from "app/main/_models/generics/select.model";
// import { LoaderState } from "app/main/_ngxs/_base/loader-state";
// import { Datas } from "app/main/_models/generics/detail-info.model";
// import { Injectable } from "@angular/core";

// export class AccountForDetailStateModel extends Datas<IAccountForDetail> {
//     constructor () {
//         super();
//     }
// }

// let accountForDetailStateModel = new AccountForDetailStateModel();

// @State<AccountForDetailStateModel>({
//     name: 'AccountForDetail',
//     defaults : accountForDetailStateModel
// })

// @Injectable()
// export class AccountForDetailState extends LoaderState {

//     constructor(
//         private _referentialService: ReferentialService
//         ) {
//             super();
//     }

//     @Selector()
//     static get(state: AccountForDetailStateModel) {

//         return state;
//     }

//     @Action(LoadAccountForDetail)
//     loadAccountForDetail(context: StateContext<AccountForDetailStateModel>, action: LoadAccountForDetail) {
//         this.loading(context,'datas');
        
//         const state = context.getState();
//         state.datas = null;
//         context.patchState(state);

//         this._referentialService.accountService.getForDetail(action.payload)
//             .subscribe(result=> {
//                 let state = context.getState();
//                 state.datas = result;
//                 context.patchState(state);

//                 this.loaded(context,'datas');
//             });

//     }

//     // @Action(LoadAccountForDetailSuccess)
//     // loadSuccess(context: StateContext<AccountForDetailStateModel>, action: LoadAccountForDetailSuccess) {
//     //     let state = context.getState();
//     //     state.datas = action.payload;

//     //     context.patchState(state);
//     // }

//     @Action(ClearAccountForDetail)
//     clear(context: StateContext<AccountForDetailStateModel>) {
//         return context.setState(new AccountForDetailStateModel());
//     }

//     //====================================
//     //          BankFamily
//     //====================================
//     @Action(AccountForDetailChangeBankFamily)
//     accountForDetailChangeBankFamily(context: StateContext<AccountForDetailStateModel>, action: AccountForDetailChangeBankFamily) {
//         this.loading(context,'bankFamily');
        
//         const state = context.getState();
//         state.datas.bankFamily.selected = action.payload;
//         state.datas.bankSubFamily = new ComboSimple<ISelect>();
//         context.patchState(state);

//         this._referentialService.bankSubFamilyService.GetSelectList(action.payload.id,EnumSelectType.inconnu)
//             .subscribe(result=> {
//                 let state = context.getState();
//                 state.datas.bankSubFamily.list = result;
//                 state.datas.bankSubFamily.selected = result[0];
//                 context.patchState(state);

//                 this.loaded(context,'bankFamily');
//             });
//     }

//     // @Action(AccountForDetailChangeBankFamilySuccess)
//     // accountForDetailChangeBankFamilySuccess(context: StateContext<AccountForDetailStateModel>, action: AccountForDetailChangeBankFamilySuccess) {

//     //     let state = context.getState();
//     //     state.datas.bankSubFamily.list = action.payload;
//     //     state.datas.bankSubFamily.selected = action.payload[0];

//     //     context.patchState(state);
//     // }

//     //====================================
//     //          BankSubFamily
//     //====================================
//     @Action(AccountForDetailChangeBankSubFamily)
//     accountForDetailChangeBankSubFamily(context: StateContext<AccountForDetailStateModel>, action: AccountForDetailChangeBankSubFamily) {
//         this.loading(context,'bankSubFamily');
        
//         const state = context.getState();
//         state.datas.bankSubFamily.selected = action.payload;
//         state.datas.bankAgency = new ComboSimple<ISelect>();
//         context.patchState(state);

//         this._referentialService.bankAgencyService.GetSelectList(action.payload.id,EnumSelectType.inconnu)
//             .subscribe(result=> {
//                 let state = context.getState();
//                 state.datas.bankAgency.list = result;
//                 state.datas.bankAgency.selected = result[0];
//                 context.patchState(state);

//                 this.loaded(context,'bankSubFamily');
//             });
//     }

//     // @Action(AccountForDetailChangeBankSubFamilySuccess)
//     // accountForDetailChangeBankSubFamilySuccess(context: StateContext<AccountForDetailStateModel>, action: AccountForDetailChangeBankSubFamilySuccess) {

//     //     let state = context.getState();
//     //     state.datas.bankAgency.list = action.payload;
//     //     state.datas.bankAgency.selected = action.payload[0];

//     //     context.patchState(state);
//     // }

    
    
// }