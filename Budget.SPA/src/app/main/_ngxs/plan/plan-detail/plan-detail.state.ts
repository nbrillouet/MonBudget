
import { PlanDetailFilter } from "app/main/_models/Filters/plan.filter";
// import { State, Selector, Action, StateContext } from "app/main/_ngxs/plan/plan-detail/node_modules/@ngxs/store";
import { PlanService } from "app/main/apps/plan/plan.service";
// import { NotificationsService } from "app/main/_ngxs/plan/plan-detail/node_modules/angular2-notifications";
import { LoadPlanDetailDatas, LoadPlanDetailDatasSuccess, ChangePlanDetailFilter, ClearPlanDetailDatas } from "./plan-detail.action";
import { DetailInfo } from "app/main/_models/generics/detail-info.model";
import { PlanDetail } from "app/main/_models/plan/plan.model";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { NotificationsService } from "angular2-notifications";

export class PlanDetailStateModel extends DetailInfo<PlanDetail,PlanDetailFilter> {
    
    constructor () {
        super();
        this.filter = new PlanDetailFilter();
    }

}

let detailInfo = new PlanDetailStateModel();
@State<PlanDetailStateModel>({
    name: 'PlanDetail',
    defaults : detailInfo
})

export class PlanDetailState {

    constructor(
        private _planService: PlanService,
        private _notification: NotificationsService) {
        
    }

    @Selector()
    static get(state: PlanDetailStateModel) {
        return state;
    }

    @Selector()
    static getFilter(state: PlanDetailStateModel) {
        return state.filter;
    }

    @Action(LoadPlanDetailDatas)
    load(context: StateContext<PlanDetailStateModel>, action: LoadPlanDetailDatas) {
        const state = context.getState();
        state.dataInfos.loadingInfo.loaded=false;
        state.dataInfos.loadingInfo.loading=true;
        state.filter = action.payload;
        state.dataInfos.datas = null;
        
        context.patchState(state);

        this._planService.GetForDetailById(action.payload.id)
            .subscribe(result=> {
                context.dispatch(new LoadPlanDetailDatasSuccess(result));
            },error => {
                this._notification.error('Erreur connexion',error);
            });

    }

    @Action(LoadPlanDetailDatasSuccess)
    loadSuccess(context: StateContext<PlanDetailStateModel>, action: LoadPlanDetailDatasSuccess) {
        let state = context.getState();
        state.dataInfos.loadingInfo.loaded = true;
        state.dataInfos.loadingInfo.loading = false;
        state.dataInfos.datas = action.payload;

        context.patchState(state);
        
    }

    @Action(ChangePlanDetailFilter)
    changeFilter(context: StateContext<PlanDetailStateModel>, action: ChangePlanDetailFilter) {
        const state = context.getState();
        state.filter=action.payload
        // state.loadingInfo.loaded=false;
        // state.loadingInfo.loading=true;
        // state.datas = null;
        // state.pagination = new Pagination();
        context.patchState(state);
        context.dispatch(new LoadPlanDetailDatas(action.payload));
    }

    @Action(ClearPlanDetailDatas)
    clear(context: StateContext<PlanDetailStateModel>) {
        return context.setState(new PlanDetailStateModel());
    }

    


}