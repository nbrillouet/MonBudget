import { DetailInfo } from "app/main/_models/generics/detail-info.model";
import { State, Selector, StateContext, Action } from "@ngxs/store";
import { AsService } from "app/main/apps/account-statement/account-statement.service";
import { LoadAsSolde, LoadAsSoldeSuccess, ChangeAsSoldeFilter } from "./account-statement-solde.action";
import { AsSolde } from "app/main/_models/account-statement.model";
import { FilterAsTableSelected } from "app/main/_models/filters/account-statement.filter";

export class AsSoldeStateModel extends DetailInfo<AsSolde,FilterAsTableSelected> {
    constructor () {
        super();
        this.filter = new FilterAsTableSelected();
    }
}

let detailInfo = new AsSoldeStateModel();

@State<AsSoldeStateModel>({
    
    name: 'asSolde',
    defaults : detailInfo 
})

export class AsSoldeState {
    constructor(
        private _asService: AsService
    ) {
        
    }

    @Selector()
    static get(state: AsSoldeStateModel) {
        return state;
    }

    @Selector()
    static getFilter(state: FilterAsTableSelected) {
        return state;
    }

    @Action(LoadAsSolde)
    loadGrid(context: StateContext<AsSoldeStateModel>, action: LoadAsSolde) {
        const state = context.getState();
        state.dataInfos.loadingInfo.loaded=false;
        state.dataInfos.loadingInfo.loading=true;
        state.filter = action.payload;
        state.dataInfos.datas = null;

        context.patchState(state);

        this._asService.getAsSolde(action.payload)
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

    // @Action(ChangeAsSoldeFilter)
    // changeFilter(context: StateContext<AsSoldeStateModel>, action: ChangeAsSoldeFilter) {
    //     const state = context.getState();
    //     state.filter=action.payload


    //     context.patchState(state);
    //     context.dispatch(new LoadAsSolde(action.payload));
    // }



}