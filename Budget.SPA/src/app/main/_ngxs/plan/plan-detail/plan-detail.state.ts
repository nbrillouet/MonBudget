
import { PlanDetailFilter } from "app/main/_models/Filters/plan.filter";
import { PlanService } from "app/main/apps/plan/plan.service";
import { LoadPlanDetailDatas, ChangePlanDetailFilter, ClearPlanDetailDatas } from "./plan-detail.action";
import { PlanDetail } from "app/main/_models/plan/plan.model";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { NotificationsService } from "angular2-notifications";
import { LoaderState } from "../../_base/loader-state";
import { DatasFilter } from "app/main/_models/generics/detail-info.model";
import { Injectable } from "@angular/core";

export class PlanDetailStateModel extends DatasFilter<PlanDetail,PlanDetailFilter> {
    
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

@Injectable()
export class PlanDetailState extends LoaderState {

    constructor(
        private _planService: PlanService,
        private _notification: NotificationsService) {
        super();
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
        this.loading(context,'datas');
        
        const state = context.getState();
        state.filter = action.payload;
        state.datas = null;
        context.patchState(state);

        this._planService.GetForDetailById(action.payload.id)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');
            });

    }

    // @Action(LoadPlanDetailDatasSuccess)
    // loadSuccess(context: StateContext<PlanDetailStateModel>, action: LoadPlanDetailDatasSuccess) {
    //     let state = context.getState();
    //     state.dataInfos.datas = action.payload;

    //     context.patchState(state);
        
    // }

    @Action(ChangePlanDetailFilter)
    changeFilter(context: StateContext<PlanDetailStateModel>, action: ChangePlanDetailFilter) {
        const state = context.getState();
        state.filter=action.payload
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