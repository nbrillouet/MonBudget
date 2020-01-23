import { OtfDetail } from "app/main/_models/referential/operation-type-family.model";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { LoadOtfDetail, ClearOtfDetail } from "./operation-type-family-detail.action";
import { OtfService } from "app/main/apps/referential/operations/operation-type-family/operation-type-family.service";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { Datas } from "app/main/_models/generics/detail-info.model";


export class OtfDetailStateModel extends Datas<OtfDetail> {
    constructor () {
        super();
    }
}

let otfDetailStateModel = new OtfDetailStateModel();

@State<OtfDetailStateModel>({
    name: 'OtfDetail',
    defaults : otfDetailStateModel
})

export class OtfDetailState extends LoaderState {

    constructor(
        private _otfService: OtfService
        ) {
            super();
    }

    @Selector()
    static get(state: OtfDetailStateModel) {
    
        return state;
    }

    @Action(LoadOtfDetail)
    loadOtfDetail(context: StateContext<OtfDetailStateModel>, action: LoadOtfDetail) {
        this.loading(context,'datas');
        
        const state = context.getState();
        state.datas = null;
        context.patchState(state);

        this._otfService.getOtfDetail(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');
            });
    }

    // @Action(LoadOtfDetailSuccess)
    // loadSuccess(context: StateContext<OtfDetailStateModel>, action: LoadOtfDetailSuccess) {
    //     let state = context.getState();
    //     state.datas = action.payload;

    //     context.patchState(state);
    // }

    @Action(ClearOtfDetail)
    clear(context: StateContext<OtfDetailStateModel>) {
        return context.setState(new OtfDetailStateModel());
    }

    
    
}