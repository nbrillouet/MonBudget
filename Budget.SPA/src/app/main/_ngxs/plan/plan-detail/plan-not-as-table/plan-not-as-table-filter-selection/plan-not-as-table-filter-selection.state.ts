import { FilterSelection } from "app/main/_models/generics/filter.info.model";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { LoadPlanNotAsTableFilterSelection } from "./plan-not-as-table-filter-selection.action";
import { PlanService } from "app/main/apps/plan/plan.service";
import { FilterPlanNotAsTableSelection } from "app/main/_models/filters/plan-not-as.filter";

export class PlanNotAsTableFilterSelectionStateModel extends FilterSelection<FilterPlanNotAsTableSelection> {
    constructor () {
        super(FilterPlanNotAsTableSelection);
    }
}

let planNotAsTableFilterSelectionStateModel = new PlanNotAsTableFilterSelectionStateModel();

@State<PlanNotAsTableFilterSelectionStateModel>({
    name: 'PlanNotAsTableFilterSelection',
    defaults : planNotAsTableFilterSelectionStateModel
})

@Injectable()
export class PlanNotAsTableFilterSelectionState extends LoaderState {

    constructor(
        private _planService: PlanService
        ) {
            super();
    }

    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    // }

    @Selector()
    static get(state: PlanNotAsTableFilterSelectionStateModel) {
        return state;
    }

    @Action(LoadPlanNotAsTableFilterSelection)
    LoadPlanNotAsTableFilterSelection(context: StateContext<PlanNotAsTableFilterSelectionStateModel>, action: LoadPlanNotAsTableFilterSelection) {
        this.loading(context,'filter-selection');
        
        const state = context.getState();
        state.selection = null;
        context.patchState(state);

        this._planService.getPlanNotAsTableFilter(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.selection = result;
                context.patchState(state);

                this.loaded(context,'filter-selection');
            });

    }

}