import { OperationForDetail } from "app/main/_models/referential/operation.model";
import { State, Action, Selector, StateContext } from "@ngxs/store";
import { OperationService } from "app/main/_services/Referential/operation.service";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { Datas } from "app/main/_models/generics/detail-info.model";
import { Injectable } from "@angular/core";
import { ClearOperationDetail, LoadOperationDetail } from "./operation-detail.action";

export class OperationDetailStateModel extends Datas<OperationForDetail> {
    constructor () {
        super();
    }
}

let operationDetailStateModel = new OperationDetailStateModel();

@State<OperationDetailStateModel>({
    name: 'OperationDetail',
    defaults : operationDetailStateModel
})

@Injectable()
export class OperationDetailState extends LoaderState {

    constructor(
        private _OperationService: OperationService
        ) {
            super();
    }

    @Selector()
    static get(state: OperationDetailStateModel) {
        return state;
    }

    @Action(LoadOperationDetail)
    LoadOperationDetail(context: StateContext<OperationDetailStateModel>, action: LoadOperationDetail) {
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

    @Action(ClearOperationDetail)
    ClearOperationDetail(context: StateContext<OperationDetailStateModel>) {
        return context.setState(new OperationDetailStateModel());
    }

    
    
}