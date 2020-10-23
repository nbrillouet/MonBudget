import { Datas } from "app/main/_models/generics/detail-info.model";
import { OtfTable } from "app/main/_models/referential/operation-type-family.model";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { LoadOtfTable, ClearOtfTable } from "./otf-table.action";
import { UpdatePaginationOtfTableFilterSelected } from "./otf-table-filter-selected/otf-table-filter-selected.action";
import { OtfService } from "app/main/_services/Referential/operation-type-family.service";

export class OtfTableStateModel extends Datas<OtfTable[]> {
    constructor () {
        super();
    }
}

let tableInfo = new OtfTableStateModel();
@State<OtfTableStateModel>({
    name: 'OtfTable',
    defaults : tableInfo
})

@Injectable()
export class OtfTableState extends LoaderState {
    constructor(
        private _otfService: OtfService,
        private _store: Store) {
            super();
    }

    @Selector()
    static get(state: OtfTableStateModel) {
        return state;
    }

    @Action(LoadOtfTable)
    LoadOtfTable(context: StateContext<OtfTableStateModel>, action: LoadOtfTable) {
        this.loading(context,'datas');
        
        const state = context.getState();
        state.datas = null;
        context.patchState(state);

        this._otfService.getOtfTable(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result.datas;
                context.patchState(state);

                this._store.dispatch(new UpdatePaginationOtfTableFilterSelected(result.pagination));

                this.loaded(context,'datas');
            });
    }

    @Action(ClearOtfTable)
    ClearOtfTable(context: StateContext<OtfTableStateModel>) {
        return context.setState(new OtfTableStateModel());
    }
}

