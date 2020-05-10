
import { AsiTable } from "app/main/_models/account-statement-import/account-statement-import.model";
import { AsiService } from "app/main/apps/account-statement-import/asi.service";
import { State, Selector, StateContext, Action, Store } from "@ngxs/store";
import { LoaderState } from "../../_base/loader-state";
import { Datas } from "app/main/_models/generics/detail-info.model";
import { Injectable } from "@angular/core";
import { UpdatePaginationAsiTableFilterSelected } from "./asi-table-filter-selected/asi-table-filter-selected.action";
import { LoadAsiTable, ClearAsiTable } from "./asi-table.action";

export class AsiTableStateModel extends Datas<AsiTable[]> {
    constructor () {
        super();
    }
}

let tableInfo = new AsiTableStateModel();
@State<AsiTableStateModel>({
    name: 'AsiTable',
    defaults : tableInfo
})

@Injectable()
export class AsiTableState extends LoaderState {
    constructor(
        private _asiService: AsiService,
        private _store: Store
        
        ) {
            super();
    }

    @Selector()
    static get(state: AsiTableStateModel) {
        return state;
    }

    // @Selector()
    // static getFilter(state: AsiHistoTableStateModel) {
    //     return state.filter;
    // }

    @Action(LoadAsiTable)
    loadGrid(context: StateContext<AsiTableStateModel>, action: LoadAsiTable) {
        this.loading(context,'datas');

        const state = context.getState();
        state.datas = null;
        context.patchState(state);

        this._asiService.getAsiTable(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result.datas;
                context.patchState(state);

                this._store.dispatch(new UpdatePaginationAsiTableFilterSelected(result.pagination));
                
                this.loaded(context,'datas');
            });
    }

    @Action(ClearAsiTable)
    clear(context: StateContext<AsiTableStateModel>) {
        return context.setState(new AsiTableStateModel());
    }



}