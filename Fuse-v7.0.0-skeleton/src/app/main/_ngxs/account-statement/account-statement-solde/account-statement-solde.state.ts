import { DetailInfo } from "app/main/_models/generics/detail-info.model";
import { AsFilter } from "app/main/_models/Filters/filter-account-statement";
import { State, Selector, StateContext, Action } from "@ngxs/store";
import { AccountStatementService } from "app/main/apps/account-statement/account-statement.service";
import { LoadAsSolde, LoadAsSoldeSuccess, ChangeAsSoldeFilter } from "./account-statement-solde.action";
import { AsSolde } from "app/main/_models/account-statement.model";

export class AsSoldeStateModel extends DetailInfo<AsSolde,AsFilter> {
    constructor () {
        super();
        this.filter = new AsFilter();
    }
}

let detailInfo = new AsSoldeStateModel();

@State<AsSoldeStateModel>({
    
    name: 'accountStatementSolde',
    defaults : detailInfo 
})

export class AsSoldeState {
    constructor(
        private _accountStatementService: AccountStatementService
    ) {
        
    }

    @Selector()
    static get(state: AsSoldeStateModel) {
        return state;
    }

    @Selector()
    static getFilter(state: AsFilter) {
        return state.filter;
    }

    @Action(LoadAsSolde)
    loadGrid(context: StateContext<AsSoldeStateModel>, action: LoadAsSolde) {
        const state = context.getState();
        state.dataInfos.loadingInfo.loaded=false;
        state.dataInfos.loadingInfo.loading=true;
        state.filter = action.payload;
        state.dataInfos.datas = null;

        context.patchState(state);

        this._accountStatementService.getSolde(action.payload)
            .subscribe(result=> {

                context.dispatch(new LoadAsSoldeSuccess(result));
            })

    }

    @Action(LoadAsSoldeSuccess)
    loadSuccess(context: StateContext<AsSoldeStateModel>, action: LoadAsSoldeSuccess) {
        let state = context.getState();
        state.dataInfos.loadingInfo.loaded = true;
        state.dataInfos.loadingInfo.loading = false;
        state.dataInfos.datas = action.payload;

        context.patchState(state);
        
    }

    @Action(ChangeAsSoldeFilter)
    changeFilter(context: StateContext<AsSoldeStateModel>, action: ChangeAsSoldeFilter) {
        const state = context.getState();
        state.filter=action.payload


        context.patchState(state);
        context.dispatch(new LoadAsSolde(action.payload));
    }



}