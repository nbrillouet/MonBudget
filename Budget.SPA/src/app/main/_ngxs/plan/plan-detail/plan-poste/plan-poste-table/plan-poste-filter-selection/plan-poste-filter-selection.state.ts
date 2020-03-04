import { FilterSelection } from "app/main/_models/generics/filter.info.model";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { PlanService } from "app/main/apps/plan/plan.service";
import { LoadPlanPosteTableFilterSelection } from "./plan-poste-filter-selection.action";
import { FilterPlanPosteTableSelection } from "app/main/_models/filters/plan-poste.filter";
import { PlanPosteService } from "app/main/apps/plan/plan-poste.service";

export class PlanPosteTableFilterSelectionStateModel extends FilterSelection<FilterPlanPosteTableSelection> {
    constructor () {
        super(FilterPlanPosteTableSelection);
    }
}

let planPosteTableFilterSelectionStateModel = new PlanPosteTableFilterSelectionStateModel();

@State<PlanPosteTableFilterSelectionStateModel>({
    name: 'PlanPosteTableFilterSelection',
    defaults : planPosteTableFilterSelectionStateModel
})

@Injectable()
export class PlanPosteTableFilterSelectionState extends LoaderState {

    constructor(
        private _planPosteService: PlanPosteService
        ) {
            super();
    }

    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    // }

    @Selector()
    static get(state: PlanPosteTableFilterSelectionStateModel) {
        return state;
    }

    @Action(LoadPlanPosteTableFilterSelection)
    LoadPlanPosteTableFilterSelection(context: StateContext<PlanPosteTableFilterSelectionStateModel>, action: LoadPlanPosteTableFilterSelection) {
        this.loading(context,'filter-selection');
        
        const state = context.getState();
        state.selection = null;
        context.patchState(state);

        this._planPosteService.getPlanPosteTableFilter(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.selection = result;
                context.patchState(state);

                this.loaded(context,'filter-selection');
            });

    }

}