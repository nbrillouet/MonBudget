import { FilterSelection } from "app/main/_models/generics/filter.info.model";
import { FilterOperationTableSelection } from "app/main/_models/filters/operation.filter";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { LoadOperationTableFilterSelection } from "./operation-table-filter-selection.state";
import { OperationService } from "app/main/_services/Referential/operation.service";

export class OperationTableFilterSelectionStateModel extends FilterSelection<FilterOperationTableSelection> {
    constructor () {
        super(FilterOperationTableSelection);
    }
}

let operationTableFilterSelectionStateModel = new OperationTableFilterSelectionStateModel();

@State<OperationTableFilterSelectionStateModel>({
    name: 'OperationTableFilterSelection',
    defaults : operationTableFilterSelectionStateModel
})

@Injectable()
export class OperationTableFilterSelectionState extends LoaderState {

    constructor(
        private _operationService: OperationService
        ) {
            super();
    }

    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    // }

    @Selector()
    static get(state: OperationTableFilterSelectionStateModel) {
        return state;
    }

    @Action(LoadOperationTableFilterSelection)
    LoadOperationTableFilterSelection(context: StateContext<OperationTableFilterSelectionStateModel>, action: LoadOperationTableFilterSelection) {
        this.loading(context,'filter-selection');
        
        const state = context.getState();
        state.selection = null;
        context.patchState(state);

        this._operationService.getOperationTableFilter(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.selection = result;
                context.patchState(state);

                this.loaded(context,'filter-selection');
            });

    }

}