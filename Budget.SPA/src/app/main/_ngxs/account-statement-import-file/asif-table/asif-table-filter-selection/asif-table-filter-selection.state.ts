import { FilterSelection } from "app/main/_models/generics/filter.info.model";
import { FilterAsifTableSelection } from "app/main/_models/filters/account-statement-import-file.filter";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { AsifService } from "app/main/apps/account-statement-import-file/asif.service";
import { LoadAsifTableFilterSelection } from "./asif-table-filter-selection.action";

export class AsifTableFilterSelectionStateModel extends FilterSelection<FilterAsifTableSelection> {
    constructor () {
        super(FilterAsifTableSelection);
    }
}

let asifTableFilterSelectionStateModel = new AsifTableFilterSelectionStateModel();

@State<AsifTableFilterSelectionStateModel>({
    name: 'AsifTableFilterSelection',
    defaults : asifTableFilterSelectionStateModel
})

@Injectable()
export class AsifTableFilterSelectionState extends LoaderState {

    constructor(
        private _asifService: AsifService
        ) {
            super();
    }

    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    // }

    @Selector()
    static get(state: AsifTableFilterSelectionStateModel) {
        return state;
    }

    @Action(LoadAsifTableFilterSelection)
    LoadAsifTableFilterSelection(context: StateContext<AsifTableFilterSelectionStateModel>, action: LoadAsifTableFilterSelection) {
        this.loading(context,'filter-selection');
        
        const state = context.getState();
        state.selection = null;
        context.patchState(state);

        this._asifService.getAsifTableFilter(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.selection = result;
                context.patchState(state);

                this.loaded(context,'filter-selection');
            });

    }

}