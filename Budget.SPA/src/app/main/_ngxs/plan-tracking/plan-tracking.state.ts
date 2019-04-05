import { DetailInfo } from "app/main/_models/generics/detail-info.model";
import { FilterPlanTracking } from "app/main/_models/filters/plan-tracking.filter";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { PlanService } from "app/main/apps/plan/plan.service";
import { NotificationsService } from "angular2-notifications";
// import { LoadPlanTracking, LoadPlanTrackingSuccess, ChangePlanTrackingFilter, ClearPlanTracking } from "./plan-tracking.action";
import { PlanForTracking } from "app/main/_models/plan/plan-tracking.model";
import { LoadPlanForTracking, LoadPlanForTrackingSuccess, ChangePlanForTrackingFilter, ClearPlanForTracking } from "./plan-tracking.action";



export class PlanForTrackingStateModel extends DetailInfo<PlanForTracking,FilterPlanTracking> {
    
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

export class PlanForTrackingState {
    constructor(
        private _planService: PlanService,
        private _notification: NotificationsService) {
        
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
        const state = context.getState();
        state.dataInfos.loadingInfo.loaded=false;
        state.dataInfos.loadingInfo.loading=true;
        state.filter = action.payload;
        state.dataInfos.datas = null;
        
        context.patchState(state);

        this._planService.GetPlanTracking(state.filter)
            .subscribe(result=> {
                context.dispatch(new LoadPlanForTrackingSuccess(result));
            },error => {
                this._notification.error('Erreur connexion',error);
            })

    }

    @Action(LoadPlanForTrackingSuccess)
    loadSuccess(context: StateContext<PlanForTrackingStateModel>, action: LoadPlanForTrackingSuccess) {
        let state = context.getState();
        state.dataInfos.loadingInfo.loaded = true;
        state.dataInfos.loadingInfo.loading = false;
        state.dataInfos.datas = action.payload;

        context.patchState(state);
        
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