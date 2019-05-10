import { OtfDetail } from "app/main/_models/referential/operation-type-family.model";
import { OtfService } from "app/main/apps/referential/operation/operation-type-family/operation-type-family.service";
import { DataInfo } from "app/main/_models/generics/detail-info.model";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { ReferentialService } from "app/main/_services/Referential/referential.service";
import { LoadOtfDetail, LoadOtfDetailSuccess, ClearOtfDetail } from "./operation-type-family-detail.action";


export class OtfDetailStateModel extends DataInfo<OtfDetail> {
    constructor () {
        super();
    }
}

let otfDetailStateModel = new OtfDetailStateModel();

@State<OtfDetailStateModel>({
    name: 'OtfDetail',
    defaults : otfDetailStateModel
})

export class OtfDetailState {

    constructor(
        private _otfService: OtfService,
        private _referentialService: ReferentialService
        // private _store: Store
        ) {
    }

    @Selector()
    static get(state: OtfDetailStateModel) {
        console.log('state',state);
        return state;
    }

    @Action(LoadOtfDetail)
    loadOtfDetail(context: StateContext<OtfDetailStateModel>, action: LoadOtfDetail) {
        const state = context.getState();
        
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;
        state.datas = null;
        
        context.patchState(state);
        this._otfService.getOtfDetail(action.payload)
            .subscribe(result=> {
                context.dispatch(new LoadOtfDetailSuccess(result));
            });

    }

    @Action(LoadOtfDetailSuccess)
    loadSuccess(context: StateContext<OtfDetailStateModel>, action: LoadOtfDetailSuccess) {
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas = action.payload;

        context.patchState(state);
    }

    @Action(ClearOtfDetail)
    clear(context: StateContext<OtfDetailStateModel>) {
        return context.setState(new OtfDetailStateModel());
    }

    
    
}