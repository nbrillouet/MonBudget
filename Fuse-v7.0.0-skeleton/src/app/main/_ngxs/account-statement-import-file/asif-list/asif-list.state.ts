import { TableInfo, DataInfos } from "app/main/_models/generics/table-info.model";
// import { AsifTable } from "app/main/_models/account-statement-import-file/account-statement-import-file.model";
import { State, Selector, Action, StateContext, Store } from "@ngxs/store";
import { NotificationsService } from "angular2-notifications";
import { LoadAsifTableDatas, LoadAsifTableDatasSuccess, ClearAsifTableDatas } from "./asif-list.action";
// import { AsifService } from "app/main/apps/account-statement-import/account-statement-import-file/asif.service";
import { FilterAsifTableSelected } from "app/main/_models/filters/account-statement-import-file.filter";
import { AsifTable } from "app/main/_models/account-statement-import/account-statement-import-file.model";
import { AsifService } from "app/main/apps/account-statement-import-file/asif.service";
import { UpdatePaginationAsifTableFilter } from "../asif-list-filter/asif-list-filter.action";


export class AsifTableStateModel extends DataInfos<AsifTable> {
    constructor () {
        super();
        // this.filter = null; //new PlanFilter();
    }
}

let tableInfo = new AsifTableStateModel();
@State<AsifTableStateModel>({
    name: 'AsifTable',
    defaults : tableInfo
})

export class AsifTableState {
    constructor(
        private _asifService: AsifService,
        private _store: Store,
        private _notification: NotificationsService) {
    }

    @Selector()
    static get(state: AsifTableStateModel) {
        return state;
    }

    // @Selector()
    // static getFilter(state: AsifTableStateModel) {
    //     return state.filter;
    // }

    @Action(LoadAsifTableDatas)
    loadGrid(context: StateContext<AsifTableStateModel>, action: LoadAsifTableDatas) {
        const state = context.getState();
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;
        // state.datas = action.payload;
        state.datas = null;
        
        context.patchState(state);
        this._asifService.getAsifTable(action.payload)
            .subscribe(result=> {
                context.dispatch(new LoadAsifTableDatasSuccess(result));
            });
    }

    @Action(LoadAsifTableDatasSuccess)
    loadSuccess(context: StateContext<AsifTableStateModel>, action: LoadAsifTableDatasSuccess) {
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas = action.payload.datas;

        context.patchState(state);
        this._store.dispatch(new UpdatePaginationAsifTableFilter(action.payload.pagination));
    }

    @Action(ClearAsifTableDatas)
    clear(context: StateContext<AsifTableStateModel>) {
        return context.setState(new AsifTableStateModel());
    }



}