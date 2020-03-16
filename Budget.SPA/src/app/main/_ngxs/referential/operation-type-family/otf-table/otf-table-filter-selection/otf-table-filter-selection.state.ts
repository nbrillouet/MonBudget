import { FilterSelection } from "app/main/_models/generics/filter.info.model";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { Injectable } from "@angular/core";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { LoadOtfTableFilterSelection } from "./otf-table-filter-selection.action";
import { FilterOtfTableSelection } from "app/main/_models/filters/operation-type-family.filter";
import { OtfService } from "app/main/_services/Referential/operation-type-family.service";

export class OtfTableFilterSelectionStateModel extends FilterSelection<FilterOtfTableSelection> {
    constructor () {
        super(FilterOtfTableSelection);
    }
}

let otfTableFilterSelectionStateModel = new OtfTableFilterSelectionStateModel();

@State<OtfTableFilterSelectionStateModel>({
    name: 'OtfTableFilterSelection',
    defaults : otfTableFilterSelectionStateModel
})

@Injectable()
export class OtfTableFilterSelectionState extends LoaderState {

    constructor(
        private _otfService: OtfService
        ) {
            super();
    }

    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    // }

    @Selector()
    static get(state: OtfTableFilterSelectionStateModel) {
        return state;
    }

    @Action(LoadOtfTableFilterSelection)
    LoadOtfTableFilterSelection(context: StateContext<OtfTableFilterSelectionStateModel>, action: LoadOtfTableFilterSelection) {
        this.loading(context,'filter-selection');
        
        const state = context.getState();
        state.selection = null;
        context.patchState(state);

        this._otfService.getOtfTableFilter(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.selection = result;
                context.patchState(state);

                this.loaded(context,'filter-selection');
            });

    }

}