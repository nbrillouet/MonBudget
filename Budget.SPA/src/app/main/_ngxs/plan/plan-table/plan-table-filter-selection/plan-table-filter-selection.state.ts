import { FilterSelection } from "app/main/_models/generics/filter.info.model";
import { FilterPlanTableSelection } from "app/main/_models/Filters/plan.filter";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { PlanService } from "app/main/apps/plan/plan.service";
import { LoadPlanTableFilterSelection } from "./plan-table-filter-selection.action";

export class PlanTableFilterSelectionStateModel extends FilterSelection<FilterPlanTableSelection> {
    constructor () {
        super(FilterPlanTableSelection);
    }
}

let planTableFilterSelectionStateModel = new PlanTableFilterSelectionStateModel();

@State<PlanTableFilterSelectionStateModel>({
    name: 'PlanTableFilterSelection',
    defaults : planTableFilterSelectionStateModel
})

@Injectable()
export class PlanTableFilterSelectionState extends LoaderState {

    constructor(
        private _planService: PlanService
        ) {
            super();
    }

    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    // }

    @Selector()
    static get(state: PlanTableFilterSelectionStateModel) {
        return state;
    }

    @Action(LoadPlanTableFilterSelection)
    LoadPlanTableFilterSelection(context: StateContext<PlanTableFilterSelectionStateModel>, action: LoadPlanTableFilterSelection) {
        this.loading(context,'filter-selection');
        
        const state = context.getState();
        state.selection = null;
        context.patchState(state);
        
        this._planService.getPlanTableFilter(action.payload).subscribe(result=> {
            let state = context.getState();
            state.selection = result;
            context.patchState(state);

            this.loaded(context,'filter-selection');
        });

    }

}