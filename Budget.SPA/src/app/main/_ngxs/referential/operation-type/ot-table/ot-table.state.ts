import { Datas } from "app/main/_models/generics/detail-info.model";
import { OtTable } from "app/main/_models/referential/operation-type.model";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { LoadOtTable, ClearOtTable } from "./ot-table.action";
import { UpdatePaginationOtTableFilterSelected } from "./ot-table-filter-selected/ot-table-filter-selected.action";
import { OtService } from "app/main/_services/Referential/operation-type.service";

export class OtTableStateModel extends Datas<OtTable[]> {
    constructor () {
        super();
    }
}

let tableInfo = new OtTableStateModel();
@State<OtTableStateModel>({
    name: 'OtTable',
    defaults : tableInfo
})

@Injectable()
export class OtTableState extends LoaderState {
    constructor(
        private _otService: OtService,
        private _store: Store) {
            super();
    }

    @Selector()
    static get(state: OtTableStateModel) {
        return state;
    }

    @Action(LoadOtTable)
    LoadOtTable(context: StateContext<OtTableStateModel>, action: LoadOtTable) {
        this.loading(context,'datas');
        
        const state = context.getState();
        state.datas = null;
        context.patchState(state);

        this._otService.getOtTable(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result.datas;
                context.patchState(state);
                //TODO a controler
                this._store.dispatch(new UpdatePaginationOtTableFilterSelected(result.pagination));

                this.loaded(context,'datas');
            });
    }

    @Action(ClearOtTable)
    ClearOtTable(context: StateContext<OtTableStateModel>) {
        return context.setState(new OtTableStateModel());
    }
}
