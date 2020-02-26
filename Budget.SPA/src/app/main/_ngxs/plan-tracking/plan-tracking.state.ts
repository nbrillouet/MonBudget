import { FilterPlanTracking } from "app/main/_models/filters/plan-tracking.filter";
import { PlanService } from "app/main/apps/plan/plan.service";
import { PlanForTracking } from "app/main/_models/plan/plan-tracking.model";
import { LoadPlanForTracking, ChangePlanForTrackingFilter, ClearPlanForTracking } from "./plan-tracking.action";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { NotificationsService } from "angular2-notifications";
import { LoaderState } from "../_base/loader-state";
import { DatasFilter } from "app/main/_models/generics/detail-info.model";
import { Injectable } from "@angular/core";


export class PlanForTrackingStateModel extends DatasFilter<PlanForTracking,FilterPlanTracking> {
    
    constructor () {
        super();
        this.filter = new FilterPlanTracking();
    }

}

let detailInfo = new PlanForTrackingStateModel();
@State<PlanForTrackingStateModel>({
    name: 'PlanTracking',
    defaults : detailInfo
})

@Injectable()
export class PlanForTrackingState extends LoaderState {
    constructor(
        private _planService: PlanService,
        private _notification: NotificationsService) {
            super();
    }

    @Selector()
    static get(state: PlanForTrackingStateModel) {
        return state;
    }

    @Selector()
    static getFilter(state: PlanForTrackingStateModel) {
        return state.filter;
    }

    @Action(LoadPlanForTracking)
    load(context: StateContext<PlanForTrackingStateModel>, action: LoadPlanForTracking) {
        this.loading(context,'datas');

        const state = context.getState();
        state.filter = action.payload;
        state.datas = null;
        context.patchState(state);

        this._planService.GetPlanTracking(state.filter)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');
            });
    }

    @Action(ChangePlanForTrackingFilter)
    changeFilter(context: StateContext<PlanForTrackingStateModel>, action: ChangePlanForTrackingFilter) {
        const state = context.getState();
        state.filter=action.payload

        context.patchState(state);
        context.dispatch(new LoadPlanForTracking(action.payload));
    }

    @Action(ClearPlanForTracking)
    clear(context: StateContext<PlanForTrackingStateModel>) {
        return context.setState(new PlanForTrackingStateModel());
    }

    
}