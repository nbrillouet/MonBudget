import { DataInfos } from "app/main/_models/generics/table-info.model";
import { OperationTable } from "app/main/_models/referential/operation.model";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { OperationService } from "app/main/_services/Referential/operation.service";
import { LoadOperationTableDatas, LoadOperationTableDatasSuccess, ClearOperationTableDatas } from "./operation-list.action";
import { UpdatePaginationOperationTableFilter } from "../operation-list-filter/operation-list-filter.action";


export class OperationTableStateModel extends DataInfos<OperationTable> {
    constructor () {
        super();
    }
}

let tableInfo = new OperationTableStateModel();
@State<OperationTableStateModel>({
    name: 'OperationTable',
    defaults : tableInfo
})

export class OperationTableState {
    constructor(
        private _operationService: OperationService,
        private _store: Store
        ) {
    }

    @Selector()
    static get(state: OperationTableStateModel) {
        return state;
    }

    @Action(LoadOperationTableDatas)
    loadGrid(context: StateContext<OperationTableStateModel>, action: LoadOperationTableDatas) {
        const state = context.getState();
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;

        state.datas = null;
        context.patchState(state);
        
        this._operationService.getTable(action.payload)
            .subscribe(result=> {
                context.dispatch(new LoadOperationTableDatasSuccess(result));
            });
    }

    @Action(LoadOperationTableDatasSuccess)
    loadSuccess(context: StateContext<OperationTableStateModel>, action: LoadOperationTableDatasSuccess) {
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas = action.payload.datas;

        context.patchState(state);


        this._store.dispatch(new UpdatePaginationOperationTableFilter(action.payload.pagination));
    }

    @Action(ClearOperationTableDatas)
    clear(context: StateContext<OperationTableStateModel>) {
        return context.setState(new OperationTableStateModel());
    }
}