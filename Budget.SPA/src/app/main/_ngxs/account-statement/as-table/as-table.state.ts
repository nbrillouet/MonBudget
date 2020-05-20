import { AsTable } from "app/main/_models/account-statement/account-statement-table.model";
import { AsService } from "app/main/apps/account-statement/account-statement.service";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { LoaderState } from "../../_base/loader-state";
import { Datas } from "app/main/_models/generics/detail-info.model";
import { Injectable } from "@angular/core";
import { ClearAsTable, LoadAsTable } from "./as-table.action";
import { UpdatePaginationAsTableFilterSelected } from "./as-table-filter-selected/as-table-filter-selected.action";

export class AsTableStateModel extends Datas<AsTable[]> {
    constructor () {
        super();
    }
}

let asTableStateModel = new AsTableStateModel();
@State<AsTableStateModel>({
    name: 'AsTable',
    defaults : asTableStateModel
})

@Injectable()
export class AsTableState extends LoaderState {
    constructor(
        private _asService: AsService,
        private _store: Store
    ) {
        super();
    }

    @Selector()
    static get(state: AsTableStateModel) {
        return state;
    }

    async delay(ms: number) {
        await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    }

    @Action(LoadAsTable)
    LoadAsTable(context: StateContext<AsTableStateModel>, action: LoadAsTable) {
        this.loading(context,'datas');
        
        const state = context.getState();
        state.datas = null;
        context.patchState(state);
        
        this._asService.getAsTable(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result.datas;
                context.patchState(state);

                this.loaded(context,'datas');
                this._store.dispatch(new UpdatePaginationAsTableFilterSelected(result.pagination));
            });
    }

    @Action(ClearAsTable)
    ClearAsTable(context: StateContext<AsTableStateModel>) {
        return context.setState(new AsTableStateModel());
    }



}

