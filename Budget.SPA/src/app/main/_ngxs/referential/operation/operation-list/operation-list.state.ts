import { OperationTable } from "app/main/_models/referential/operation.model";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { OperationService } from "app/main/_services/Referential/operation.service";
import { LoadOperationTableDatas, ClearOperationTableDatas } from "./operation-list.action";
import { UpdatePaginationOperationTableFilter } from "../operation-list-filter/operation-list-filter.action";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { Datas } from "app/main/_models/generics/detail-info.model";

export class OperationTableStateModel extends Datas<OperationTable[]> {
    constructor () {
        super();
    }
}

let tableInfo = new OperationTableStateModel();
@State<OperationTableStateModel>({
    name: 'OperationTable',
    defaults : tableInfo
})

export class OperationTableState extends LoaderState {
    constructor(
        private _operationService: OperationService,
        private _store: Store
        ) {
            super();
    }

    @Selector()
    static get(state: OperationTableStateModel) {
        return state;
    }

    @Action(LoadOperationTableDatas)
    loadGrid(context: StateContext<OperationTableStateModel>, action: LoadOperationTableDatas) {
        this.loading(context,'datas');
        
        const state = context.getState();
        state.datas = null;
        context.patchState(state);
        
        this._operationService.getTable(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result;
                context.patchState(state);
                //TODO: a controler
                this._store.dispatch(new UpdatePaginationOperationTableFilter(action.payload.pagination));

                this.loaded(context,'datas');
            });
    }

    // @Action(LoadOperationTableDatasSuccess)
    // loadSuccess(context: StateContext<OperationTableStateModel>, action: LoadOperationTableDatasSuccess) {

    // }

    @Action(ClearOperationTableDatas)
    clear(context: StateContext<OperationTableStateModel>) {
        return context.setState(new OperationTableStateModel());
    }
}