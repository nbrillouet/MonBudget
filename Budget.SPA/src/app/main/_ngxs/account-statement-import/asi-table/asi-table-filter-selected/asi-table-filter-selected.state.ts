import { FilterSelected } from "app/main/_models/generics/filter.info.model";
import { FilterAsiTableSelected } from "app/main/_models/filters/account-statement-import.filter";
import { Injectable } from "@angular/core";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { UpdatePaginationAsiTableFilterSelected, SynchronizeAsiTableFilterSelected } from "./asi-table-filter-selected.action";
import { LoadAsiTable } from "../asi-table.action";


export class AsiTableFilterSelectedStateModel extends FilterSelected<FilterAsiTableSelected> {
    constructor () {
        super(FilterAsiTableSelected);
    }
}

let asiTableFilterSelectedStateModel = new AsiTableFilterSelectedStateModel();

@State<AsiTableFilterSelectedStateModel>({
    name: 'AsiTableFilterSelected',
    defaults : asiTableFilterSelectedStateModel
})

@Injectable()
export class AsiTableFilterSelectedState extends LoaderState {
    constructor(
        private _store: Store
        ) {
            super();
    }

    @Selector()
    static get(state: AsiTableFilterSelectedStateModel) {
        return state;
    }
       

    @Action(UpdatePaginationAsiTableFilterSelected)
    UpdatePaginationAsiTableFilterSelected(context: StateContext<AsiTableFilterSelectedStateModel>, action: UpdatePaginationAsiTableFilterSelected) {
        let state = context.getState();
        state.selected.pagination = action.payload;
        context.patchState(state);
    }

    @Action(SynchronizeAsiTableFilterSelected)
    SynchronizeAsiTableFilterSelected(context: StateContext<AsiTableFilterSelectedStateModel>, action: SynchronizeAsiTableFilterSelected) {
        this.loading(context,'filter-selected');
        let state = context.getState();
        state.selected = action.payload;
        context.patchState(state);
        this.loaded(context,'filter-selected');

        this._store.dispatch(new LoadAsiTable(action.payload));
    }

}
