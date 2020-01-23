import { OtDetail } from "app/main/_models/referential/operation-type.model";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { LoadOtDetail, ClearOtDetail } from "./operation-type-detail.action";
import { OtService } from "app/main/apps/referential/operations/operation-type/operation-type.service";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { Datas } from "app/main/_models/generics/detail-info.model";

export class OtDetailStateModel extends Datas<OtDetail> {
    constructor () {
        super();
    }
}

let otDetailStateModel = new OtDetailStateModel();

@State<OtDetailStateModel>({
    name: 'OtDetail',
    defaults : otDetailStateModel
})

export class OtDetailState extends LoaderState {

    constructor(
        private _otService: OtService
        ) {
            super();
    }

    @Selector()
    static get(state: OtDetailStateModel) {
        return state;
    }

    @Action(LoadOtDetail)
    loadOtDetail(context: StateContext<OtDetailStateModel>, action: LoadOtDetail) {
        this.loading(context,'datas');
        
        const state = context.getState();
        state.datas = null;
        context.patchState(state);

        this._otService.getOtDetail(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');
            });

    }

    // @Action(LoadOtDetailSuccess)
    // loadSuccess(context: StateContext<OtDetailStateModel>, action: LoadOtDetailSuccess) {
    //     let state = context.getState();
    //     state.datas = action.payload;

    //     context.patchState(state);
    // }

    @Action(ClearOtDetail)
    clear(context: StateContext<OtDetailStateModel>) {
        return context.setState(new OtDetailStateModel());
    }

    
    
}