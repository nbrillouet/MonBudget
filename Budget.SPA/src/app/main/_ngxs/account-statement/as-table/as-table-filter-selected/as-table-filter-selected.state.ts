import { FilterAsTableSelected } from "app/main/_models/filters/account-statement.filter";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { UpdatePaginationAsTableFilterSelected, SynchronizeAsTableFilterSelected } from "./as-table-filter-selected.action";
import { FilterSelected } from "app/main/_models/generics/filter.info.model";
import { LoadAsTable } from "../as-table.action";

export class AsTableFilterSelectedStateModel extends FilterSelected<FilterAsTableSelected> {
    constructor () {
        super(FilterAsTableSelected);
    }
}

let asTableFilterSelectedStateModel = new AsTableFilterSelectedStateModel();

@State<AsTableFilterSelectedStateModel>({
    name: 'AsTableFilterSelected',
    defaults : asTableFilterSelectedStateModel
})

@Injectable()
export class AsTableFilterSelectedState extends LoaderState {
    constructor(
        private _store: Store
        ) {
            super();
    }

    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    //   }

    @Selector()
    static get(state: AsTableFilterSelectedStateModel) {
        return state;
    }
       

    @Action(UpdatePaginationAsTableFilterSelected)
    UpdatePaginationAsTableFilterSelected(context: StateContext<AsTableFilterSelectedStateModel>, action: UpdatePaginationAsTableFilterSelected) {
        let state = context.getState();
        state.selected.pagination = action.payload;
        context.patchState(state);
    }

    @Action(SynchronizeAsTableFilterSelected)
    SynchronizeAsTableFilterSelected(context: StateContext<AsTableFilterSelectedStateModel>, action: SynchronizeAsTableFilterSelected) {
        this.loading(context,'filter-selected');
        let state = context.getState();
        state.selected = action.payload;
        context.patchState(state);
        this.loaded(context,'filter-selected');

        this._store.dispatch(new LoadAsTable(action.payload));
    }

}