import { DataInfo } from "app/main/_models/generics/detail-info.model";
import { OtDetail } from "app/main/_models/referential/operation-type.model";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { ReferentialService } from "app/main/_services/Referential/referential.service";
import { LoadOtDetail, LoadOtDetailSuccess, ClearOtDetail } from "./operation-type-detail.action";
import { OtService } from "app/main/apps/referential/operations/operation-type/operation-type.service";

export class OtDetailStateModel extends DataInfo<OtDetail> {
    constructor () {
        super();
    }
}

let otDetailStateModel = new OtDetailStateModel();

@State<OtDetailStateModel>({
    name: 'OtDetail',
    defaults : otDetailStateModel
})

export class OtDetailState {

    constructor(
        private _otService: OtService,
        private _referentialService: ReferentialService
        ) {
    }

    @Selector()
    static get(state: OtDetailStateModel) {
        return state;
    }

    @Action(LoadOtDetail)
    loadOtDetail(context: StateContext<OtDetailStateModel>, action: LoadOtDetail) {
        const state = context.getState();
        
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;
        state.datas = null;
        
        context.patchState(state);
        this._otService.getOtDetail(action.payload)
            .subscribe(result=> {
                context.dispatch(new LoadOtDetailSuccess(result));
            });

    }

    @Action(LoadOtDetailSuccess)
    loadSuccess(context: StateContext<OtDetailStateModel>, action: LoadOtDetailSuccess) {
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas = action.payload;

        context.patchState(state);
    }

    @Action(ClearOtDetail)
    clear(context: StateContext<OtDetailStateModel>) {
        return context.setState(new OtDetailStateModel());
    }

    
    
}