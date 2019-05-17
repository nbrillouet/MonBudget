import { DataInfo } from "app/main/_models/generics/detail-info.model";
import { OperationForDetail } from "app/main/_models/referential/operation.model";
import { State, Action, Selector, StateContext } from "@ngxs/store";
import { OperationService } from "app/main/_services/Referential/operation.service";
import { ReferentialService } from "app/main/_services/Referential/referential.service";
import { LoadOperationForDetail, LoadOperationForDetailSuccess, ClearOperationForDetail } from "./operation-detail.action";

export class OperationForDetailStateModel extends DataInfo<OperationForDetail> {
    constructor () {
        super();
    }
}

let operationForDetailStateModel = new OperationForDetailStateModel();

@State<OperationForDetailStateModel>({
    name: 'OperationForDetail',
    defaults : operationForDetailStateModel
})

export class OperationForDetailState {

    constructor(
        private _OperationService: OperationService,
        private _referentialService: ReferentialService
        ) {
    }

    @Selector()
    static get(state: OperationForDetailStateModel) {
        return state;
    }

    @Action(LoadOperationForDetail)
    loadOperationForDetail(context: StateContext<OperationForDetailStateModel>, action: LoadOperationForDetail) {
        const state = context.getState();
        
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;
        state.datas = null;
        
        context.patchState(state);
        this._OperationService.getDetail(action.payload)
            .subscribe(result=> {
                context.dispatch(new LoadOperationForDetailSuccess(result));
            });

    }

    @Action(LoadOperationForDetailSuccess)
    loadSuccess(context: StateContext<OperationForDetailStateModel>, action: LoadOperationForDetailSuccess) {
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas = action.payload;

        context.patchState(state);
    }

    @Action(ClearOperationForDetail)
    clear(context: StateContext<OperationForDetailStateModel>) {
        return context.setState(new OperationForDetailStateModel());
    }

    
    
}