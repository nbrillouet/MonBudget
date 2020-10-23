import { FilterSelected } from "app/main/_models/generics/filter.info.model";
import { FilterOperationTableSelected } from "app/main/_models/filters/operation.filter";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { UpdatePaginationOperationTableFilterSelected, SynchronizeOperationTableFilterSelected } from "./operation-table-filter-selected.action";
import { LoadOperationTable } from "../operation-table.action";

export class OperationTableFilterSelectedStateModel extends FilterSelected<FilterOperationTableSelected> {
    constructor () {
        super(FilterOperationTableSelected);
    }
}

let operationTableFilterSelectedStateModel = new OperationTableFilterSelectedStateModel();

@State<OperationTableFilterSelectedStateModel>({
    name: 'OperationTableFilterSelected',
    defaults : operationTableFilterSelectedStateModel
})

@Injectable()
export class OperationTableFilterSelectedState extends LoaderState {
    constructor(
        private _store: Store
        ) {
            super();
    }

    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    //   }

    @Selector()
    static get(state: OperationTableFilterSelectedStateModel) {
        return state;
    }
       

    @Action(UpdatePaginationOperationTableFilterSelected)
    UpdatePaginationOperationTableFilterSelected(context: StateContext<OperationTableFilterSelectedStateModel>, action: UpdatePaginationOperationTableFilterSelected) {
        this.loading(context,'filter-selected');

        let state = context.getState();
        state.selected.pagination = action.payload;
        context.patchState(state);

        this.loaded(context,'filter-selected');
    }

    @Action(SynchronizeOperationTableFilterSelected)
    SynchronizeOperationTableFilterSelected(context: StateContext<OperationTableFilterSelectedStateModel>, action: SynchronizeOperationTableFilterSelected) {
        this.loading(context,'filter-selected');
        
        let state = context.getState();
        state.selected = action.payload;
        context.patchState(state);

        this.loaded(context,'filter-selected');

        this._store.dispatch(new LoadOperationTable(action.payload));
    }

}
