import { AsifTable } from "app/main/_models/account-statement-import/account-statement-import-file.model";
import { AsifService } from "app/main/apps/account-statement-import-file/asif.service";
import { State, Selector, Action, StateContext, Store } from "@ngxs/store";
import { LoaderState } from "../../_base/loader-state";
import { Datas } from "app/main/_models/generics/detail-info.model";
import { Injectable } from "@angular/core";
import { LoadAsifTable, ClearAsifTable } from "./asif-table.action";
import { UpdatePaginationAsifTableFilterSelected } from "./asif-table-filter-selected/asif-table-filter-selected.action";

export class AsifTableStateModel extends Datas<AsifTable[]> {
    constructor () {
        super();
    }
}

let tableInfo = new AsifTableStateModel();
@State<AsifTableStateModel>({
    name: 'AsifTable',
    defaults : tableInfo
})

@Injectable()
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

    @Action(LoadAsifTable)
    loadGrid(context: StateContext<AsifTableStateModel>, action: LoadAsifTable) {
        this.loading(context,'datas');

        const state = context.getState();
        state.datas = null;
        context.patchState(state);
        
        this._asifService.getAsifTable(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result.datas;
                context.patchState(state);
                        
                this._store.dispatch(new UpdatePaginationAsifTableFilterSelected(result.pagination));

                this.loaded(context,'datas');
            });
    }

    @Action(ClearAsifTable)
    clear(context: StateContext<AsifTableStateModel>) {
        return context.setState(new AsifTableStateModel());
    }



}