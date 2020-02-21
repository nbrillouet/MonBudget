import { OperationForDetail } from "app/main/_models/referential/operation.model";
import { State, Action, Selector, StateContext } from "@ngxs/store";
import { OperationService } from "app/main/_services/Referential/operation.service";
import { LoadOperationForDetail, ClearOperationForDetail } from "./operation-detail.action";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { Datas } from "app/main/_models/generics/detail-info.model";
import { Injectable } from "@angular/core";

export class OperationForDetailStateModel extends Datas<OperationForDetail> {
    constructor () {
        super();
    }
}

let operationForDetailStateModel = new OperationForDetailStateModel();

@State<OperationForDetailStateModel>({
    name: 'OperationForDetail',
    defaults : operationForDetailStateModel
})

@Injectable()
export class OperationForDetailState extends LoaderState {

    constructor(
        private _OperationService: OperationService
        ) {
            super();
    }

    @Selector()
    static get(state: OperationForDetailStateModel) {
        return state;
    }

    @Action(LoadOperationForDetail)
    loadOperationForDetail(context: StateContext<OperationForDetailStateModel>, action: LoadOperationForDetail) {
        this.loading(context,'datas');
        
        const state = context.getState();
        state.datas = null;
        context.patchState(state);

        this._OperationService.getDetail(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');
            });

    }

    @Action(ClearOperationForDetail)
    clear(context: StateContext<OperationForDetailStateModel>) {
        return context.setState(new OperationForDetailStateModel());
    }

    
    
}