import { FilterOtfTableSelected } from "app/main/_models/filters/operation-type-family.filter";
import { FilterSelected } from "app/main/_models/generics/filter.info.model";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { UpdatePaginationOtfTableFilterSelected, SynchronizeOtfTableFilterSelected } from "./otf-table-filter-selected.action";
import { LoadOtfTable } from "../otf-table.action";


export class OtfTableFilterSelectedStateModel extends FilterSelected<FilterOtfTableSelected> {
    constructor () {
        super(FilterOtfTableSelected);
    }
}

let otfTableFilterSelectedStateModel = new OtfTableFilterSelectedStateModel();

@State<OtfTableFilterSelectedStateModel>({
    name: 'OtfTableFilterSelected',
    defaults : otfTableFilterSelectedStateModel
})

@Injectable()
export class OtfTableFilterSelectedState extends LoaderState {
    constructor(
        private _store: Store
        ) {
            super();
    }

    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    //   }

    @Selector()
    static get(state: OtfTableFilterSelectedStateModel) {
        return state;
    }
       

    @Action(UpdatePaginationOtfTableFilterSelected)
    UpdatePaginationOtfTableFilterSelected(context: StateContext<OtfTableFilterSelectedStateModel>, action: UpdatePaginationOtfTableFilterSelected) {
        let state = context.getState();
        state.selected.pagination = action.payload;
        context.patchState(state);
    }

    @Action(SynchronizeOtfTableFilterSelected)
    SynchronizeOtfTableFilterSelected(context: StateContext<OtfTableFilterSelectedStateModel>, action: SynchronizeOtfTableFilterSelected) {
        this.loading(context,'filter-selected');
        
        let state = context.getState();
        state.selected = action.payload;
        context.patchState(state);

        this.loaded(context,'filter-selected');

        this._store.dispatch(new LoadOtfTable(action.payload));
    }

}
