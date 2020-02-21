import { OtDetail } from "app/main/_models/referential/operation-type.model";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { OtService } from "app/main/apps/referential/operations/operation-type/operation-type.service";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { Datas } from "app/main/_models/generics/detail-info.model";
import { Injectable } from "@angular/core";
import { LoadOtDetail, ClearOtDetail } from "./ot-detail.action";

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

@Injectable()
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

    @Action(ClearOtDetail)
    clear(context: StateContext<OtDetailStateModel>) {
        return context.setState(new OtDetailStateModel());
    }

    
    
}