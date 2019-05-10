import { DataInfos } from "app/main/_models/generics/table-info.model";
import { OtTable } from "app/main/_models/referential/operation-type.model";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { OtService } from "app/main/apps/referential/operation/operation-type/operation-type.service";
import { LoadOtTableDatas, LoadOtTableDatasSuccess, ClearOtTableDatas } from "./operation-type-list.action";
import { UpdatePaginationOtTableFilter } from "../operation-type-list-filter/operation-type-list-filter.action";

export class OtTableStateModel extends DataInfos<OtTable> {
    constructor () {
        super();
    }
}

let tableInfo = new OtTableStateModel();
@State<OtTableStateModel>({
    name: 'OtTable',
    defaults : tableInfo
})

export class OtTableState {
    constructor(
        private _otService: OtService,
        private _store: Store
        ) {
    }

    @Selector()
    static get(state: OtTableStateModel) {
        return state;
    }

    @Action(LoadOtTableDatas)
    loadGrid(context: StateContext<OtTableStateModel>, action: LoadOtTableDatas) {
        const state = context.getState();
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;

        state.datas = null;
        context.patchState(state);
        
        this._otService.getOtTable(action.payload)
            .subscribe(result=> {
                context.dispatch(new LoadOtTableDatasSuccess(result));
            });
    }

    @Action(LoadOtTableDatasSuccess)
    loadSuccess(context: StateContext<OtTableStateModel>, action: LoadOtTableDatasSuccess) {
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas = action.payload.datas;

        context.patchState(state);


        this._store.dispatch(new UpdatePaginationOtTableFilter(action.payload.pagination));
    }

    @Action(ClearOtTableDatas)
    clear(context: StateContext<OtTableStateModel>) {
        return context.setState(new OtTableStateModel());
    }



}