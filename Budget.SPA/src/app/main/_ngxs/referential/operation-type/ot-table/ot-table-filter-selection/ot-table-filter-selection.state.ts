import { FilterSelection } from "app/main/_models/generics/filter.info.model";
import { FilterOtTableSelection } from "app/main/_models/filters/operation-type.filter";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { LoadOtTableFilterSelection } from "./ot-table-filter-selection.action";
import { OtService } from "app/main/_services/Referential/operation-type.service";

export class OtTableFilterSelectionStateModel extends FilterSelection<FilterOtTableSelection> {
    constructor () {
        super(FilterOtTableSelection);
    }
}

let otTableFilterSelectionStateModel = new OtTableFilterSelectionStateModel();

@State<OtTableFilterSelectionStateModel>({
    name: 'OtTableFilterSelection',
    defaults : otTableFilterSelectionStateModel
})

@Injectable()
export class OtTableFilterSelectionState extends LoaderState {

    constructor(
        private _otService: OtService
        ) {
            super();
    }

    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    // }

    @Selector()
    static get(state: OtTableFilterSelectionStateModel) {
        return state;
    }

    @Action(LoadOtTableFilterSelection)
    LoadOtTableFilterSelection(context: StateContext<OtTableFilterSelectionStateModel>, action: LoadOtTableFilterSelection) {
        this.loading(context,'filter-selection');
        
        const state = context.getState();
        state.selection = null;
        context.patchState(state);

        this._otService.getForTableFilter(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.selection = result;
                context.patchState(state);

                this.loaded(context,'filter-selection');
            });

    }

}