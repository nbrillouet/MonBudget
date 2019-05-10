// import { State, Selector, Action, StateContext } from "app/main/_ngxs/plan/plan-list-filter/node_modules/@ngxs/store";
import { DataInfo } from "app/main/_models/generics/detail-info.model";
import { PlanTableComboFilter } from "app/main/_models/Filters/plan.filter";
import { PlanService } from "app/main/apps/plan/plan.service";
// import { NotificationsService } from "app/main/_ngxs/plan/plan-list-filter/node_modules/angular2-notifications";
import { LoadPlanTableComboFilter, LoadPlanTableComboFilterSuccess, ChangePlanTableComboFilter } from "./plan-list-filter.action";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { NotificationsService } from "angular2-notifications";


export class PlanTableComboFilterStateModel extends DataInfo<PlanTableComboFilter> {
    constructor () {
        super();
    }
}

let planTableComboFilter = new PlanTableComboFilterStateModel();
@State<PlanTableComboFilterStateModel>({
    name: 'PlanTableComboFilter',
    defaults : planTableComboFilter
})

export class PlanTableComboFilterState {
    constructor(
        private _planService: PlanService,
        private _notification: NotificationsService) {
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
        const state = context.getState();

        if(!state.loadingInfo.loaded)
        {
            state.loadingInfo.loaded=false;
            state.loadingInfo.loading=true;
            state.datas = null;
            
            context.patchState(state);
            this._planService.getPlanTableComboFilter()
                .subscribe(result=> {
                    context.dispatch(new LoadPlanTableComboFilterSuccess(result));
                },error => {
                    this._notification.error('Erreur connexion',error);
                })
        }
    }

    @Action(LoadPlanTableComboFilterSuccess)
    loadSuccess(context: StateContext<PlanTableComboFilterStateModel>, action: LoadPlanTableComboFilterSuccess) {
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas = action.payload;
        
        context.patchState(state);
    }

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