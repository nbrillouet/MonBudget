import { LoadAsifTableDatas, ClearAsifTableDatas } from "./asif-list.action";
import { AsifTable } from "app/main/_models/account-statement-import/account-statement-import-file.model";
import { AsifService } from "app/main/apps/account-statement-import-file/asif.service";
import { UpdatePaginationAsifTableFilter } from "../asif-list-filter/asif-list-filter.action";
import { State, Selector, Action, StateContext, Store } from "@ngxs/store";
import { LoaderState } from "../../_base/loader-state";
import { Datas } from "app/main/_models/generics/detail-info.model";

export class AsifTableStateModel extends Datas<AsifTable> {
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

export class AsifTableState extends LoaderState {
    constructor(
        private _asifService: AsifService,
        private _store: Store
        ) {
            super();
    }

    @Selector()
    static get(state: AsifTableStateModel) {
        return state;
    }

    // @Selector()
    // static getFilter(state: AsifTableStateModel) {
    //     return state.filter;
    // }
    async delay(ms: number) {
        await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    }

    @Action(LoadAsifTableDatas)
    loadGrid(context: StateContext<AsifTableStateModel>, action: LoadAsifTableDatas) {
        this.loading(context,'datas');

        const state = context.getState();
        state.datas = null;
        context.patchState(state);
        
        this._asifService.getAsifTable(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result.datas;
                context.patchState(state);
        
                // this._store.dispatch(new UpdatePaginationAsifTableFilter(action.payload.pagination));
                this._store.dispatch(new UpdatePaginationAsifTableFilter(result.pagination));

                this.loaded(context,'datas');
            });
    }

    // @Action(LoadAsifTableDatasSuccess)
    // loadSuccess(context: StateContext<AsifTableStateModel>, action: LoadAsifTableDatasSuccess) {
    //     let state = context.getState();
    //     state.datas = action.payload.datas;
    //     // state.pagination = action.payload.pagination;

    //     context.patchState(state);


    //     this._store.dispatch(new UpdatePaginationAsifTableFilter(action.payload.pagination));

    //     this.loading(context,'datas');
    // }

    @Action(ClearAsifTableDatas)
    clear(context: StateContext<AsifTableStateModel>) {
        return context.setState(new AsifTableStateModel());
    }



}