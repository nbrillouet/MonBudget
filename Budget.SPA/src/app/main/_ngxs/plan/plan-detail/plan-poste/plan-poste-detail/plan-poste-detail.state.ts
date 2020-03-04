import { PlanPosteForDetail } from "app/main/_models/plan.model";
import { PlanPosteDetailFilter } from "app/main/_models/filters/plan-poste.filter";
import { LoadPlanPosteDetailDatas, ChangePlanPosteDetailFilter, ClearPlanPosteDetailDatas, PlanPosteDetailChangePlanPosteFrequencies } from "./plan-poste-detail.action";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { NotificationsService } from "angular2-notifications";
import { DatasFilter } from "app/main/_models/generics/detail-info.model";
import { Injectable } from "@angular/core";
import { PlanPosteService } from "app/main/apps/plan/plan-poste.service";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";

export class PlanPosteDetailStateModel extends DatasFilter<PlanPosteForDetail,PlanPosteDetailFilter> {
    
    constructor () {
        super();
        this.filter = new PlanPosteDetailFilter();
    }
}

let detailInfo = new PlanPosteDetailStateModel();
@State<PlanPosteDetailStateModel>({
    name: 'PlanPosteDetail',
    defaults : detailInfo
})

@Injectable()
export class PlanPosteDetailState extends LoaderState {
    constructor(
        private _planPosteService: PlanPosteService,
        private _notification: NotificationsService) {
            super();
    }

    @Selector()
    static get(state: PlanPosteDetailStateModel) {

        return state;
    }

    @Selector()
    static getFilter(state: PlanPosteDetailStateModel) {
        return state.filter;
    }

    @Action(LoadPlanPosteDetailDatas)
    load(context: StateContext<PlanPosteDetailStateModel>, action: LoadPlanPosteDetailDatas) {
        this.loading(context,'datas');
        
        const state = context.getState();
        state.filter = action.payload;
        state.datas = null;
        context.patchState(state);

        this._planPosteService.GetPlanPosteForDetailById(action.payload.id,action.payload.idPlan,action.payload.idPoste)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');
            });
    }

    @Action(ChangePlanPosteDetailFilter)
    changeFilter(context: StateContext<PlanPosteDetailStateModel>, action: ChangePlanPosteDetailFilter) {
        const state = context.getState();
        state.filter=action.payload

        context.patchState(state);
        context.dispatch(new LoadPlanPosteDetailDatas(action.payload));
    }
   
    @Action(ClearPlanPosteDetailDatas)
    clear(context: StateContext<PlanPosteDetailStateModel>) {
        return context.setState(new PlanPosteDetailStateModel());
    }

    //====================================
    //          PlanPosteFrequencies
    //====================================
    @Action(PlanPosteDetailChangePlanPosteFrequencies)
    PlanPosteDetailChangePlanPosteFrequencies(context: StateContext<PlanPosteDetailStateModel>, action: PlanPosteDetailChangePlanPosteFrequencies) {
        this.loading(context,'planPosteFrequencies');

        const state = context.getState();
        state.datas.planPosteFrequencies = null;
        context.patchState(state);

        this._planPosteService.getPlanPosteFrequencies(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas.planPosteFrequencies = result;
                context.patchState(state);

                this.loaded(context,'planPosteFrequencies');
            });
    }

    
}