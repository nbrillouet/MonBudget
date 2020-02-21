import { FilterSelection } from "app/main/_models/generics/filter.info.model";
import { FilterAsiTableSelection } from "app/main/_models/filters/account-statement-import.filter";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { AsiService } from "app/main/apps/account-statement-import/asi.service";
import { LoadAsiTableFilterSelection } from "./asi-table-filter-selection.action";


export class AsiTableFilterSelectionStateModel extends FilterSelection<FilterAsiTableSelection> {
    constructor () {
        super(FilterAsiTableSelection);
    }
}

let asiTableFilterSelectionStateModel = new AsiTableFilterSelectionStateModel();

@State<AsiTableFilterSelectionStateModel>({
    name: 'AsiTableFilterSelection',
    defaults : asiTableFilterSelectionStateModel
})

@Injectable()
export class AsiTableFilterSelectionState extends LoaderState {

    constructor(
        private _asiService: AsiService
        ) {
            super();
    }

    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    // }

    @Selector()
    static get(state: AsiTableFilterSelectionStateModel) {
        return state;
    }

    @Action(LoadAsiTableFilterSelection)
    LoadAsiTableFilterSelection(context: StateContext<AsiTableFilterSelectionStateModel>, action: LoadAsiTableFilterSelection) {
        this.loading(context,'filter-selection');
        
        const state = context.getState();
        state.selection = null;
        context.patchState(state);

        this._asiService.getAsiTableFilter(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.selection = result;
                context.patchState(state);

                this.loaded(context,'filter-selection');
            });

    }

}