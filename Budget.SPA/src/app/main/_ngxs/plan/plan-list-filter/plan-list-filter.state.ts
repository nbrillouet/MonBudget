import { PlanTableComboFilter } from "app/main/_models/Filters/plan.filter";
import { PlanService } from "app/main/apps/plan/plan.service";
import { LoadPlanTableComboFilter, ChangePlanTableComboFilter } from "./plan-list-filter.action";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { LoaderState } from "../../_base/loader-state";
import { Datas } from "app/main/_models/generics/detail-info.model";

export class PlanTableComboFilterStateModel extends Datas<PlanTableComboFilter> {
    constructor () {
        super();
    }
}

let planTableComboFilter = new PlanTableComboFilterStateModel();
@State<PlanTableComboFilterStateModel>({
    name: 'PlanTableComboFilter',
    defaults : planTableComboFilter
})

export class PlanTableComboFilterState extends LoaderState {
    constructor(
        private _planService: PlanService) {
            super();
    }

    @Selector()
    static get(state: PlanTableComboFilterStateModel) {
        return state;
    }

    // @Selector()
    // static getFilter(state: PlanTableComboFilterStateModel) {
    //     return state.filter;
    // }

    @Action(LoadPlanTableComboFilter)
    loadGrid(context: StateContext<PlanTableComboFilterStateModel>, action: LoadPlanTableComboFilter) {
        this.loading(context,'datas');
        
        const state = context.getState();
        state.datas = null;
        context.patchState(state);

        this._planService.getPlanTableComboFilter()
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');
            });
        
    }

    // @Action(LoadPlanTableComboFilterSuccess)
    // loadSuccess(context: StateContext<PlanTableComboFilterStateModel>, action: LoadPlanTableComboFilterSuccess) {
    //     let state = context.getState();
    //     state.datas = action.payload;
        
    //     context.patchState(state);
    // }

    @Action(ChangePlanTableComboFilter)
    changeFilter(context: StateContext<PlanTableComboFilterStateModel>, action: ChangePlanTableComboFilter) {
        const state = context.getState();

        if(action.payload.filterName='year') {
            state.datas.years.selected = action.payload.value;
        }

        context.patchState(state);
        // context.dispatch(new LoadPlanDatas(action.payload));
    }



}