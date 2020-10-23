import { FilterSelected } from "app/main/_models/generics/filter.info.model";
import { FilterOtTableSelected } from "app/main/_models/filters/operation-type.filter";
import { State, Selector, Action, StateContext, Store } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { LoadOtTable } from "../ot-table.action";
import { UpdatePaginationOtTableFilterSelected, SynchronizeOtTableFilterSelected } from "./ot-table-filter-selected.action";


export class OtTableFilterSelectedStateModel extends FilterSelected<FilterOtTableSelected> {
    constructor () {
        super(FilterOtTableSelected);
    }
}

let otTableFilterSelectedStateModel = new OtTableFilterSelectedStateModel();

@State<OtTableFilterSelectedStateModel>({
    name: 'OtTableFilterSelected',
    defaults : otTableFilterSelectedStateModel
})

@Injectable()
export class OtTableFilterSelectedState extends LoaderState {
    constructor(
        private _store: Store
        ) {
            super();
    }

    @Selector()
    static get(state: OtTableFilterSelectedStateModel) {
        return state;
    }
       

    @Action(UpdatePaginationOtTableFilterSelected)
    UpdatePaginationOtTableFilterSelected(context: StateContext<OtTableFilterSelectedStateModel>, action: UpdatePaginationOtTableFilterSelected) {
        let state = context.getState();
        state.selected.pagination = action.payload;
        context.patchState(state);
    }

    @Action(SynchronizeOtTableFilterSelected)
    SynchronizeOtTableFilterSelected(context: StateContext<OtTableFilterSelectedStateModel>, action: SynchronizeOtTableFilterSelected) {
        this.loading(context,'filter-selected');
        let state = context.getState();
        state.selected = action.payload;
        context.patchState(state);
        this.loaded(context,'filter-selected');

        this._store.dispatch(new LoadOtTable(action.payload));
    }

}
