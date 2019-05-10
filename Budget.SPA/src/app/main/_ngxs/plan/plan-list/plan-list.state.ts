import { PlanFilter } from "app/main/_models/Filters/plan.filter";
import { TableInfo } from "app/main/_models/generics/table-info.model";
// import { Selector, Action, StateContext, State } from "app/main/_ngxs/plan/plan-list/node_modules/@ngxs/store";
import { LoadPlanTableDatas, LoadPlanTableDatasSuccess, ChangePlanTableFilter, ClearPlanTableDatas } from "./plan-list.action";
import { PlanService } from "app/main/apps/plan/plan.service";
// import { NotificationsService } from "app/main/_ngxs/plan/plan-list/node_modules/angular2-notifications";
import { PlanTable } from "app/main/_models/plan/plan.model";
import { Selector, Action, StateContext, State } from "@ngxs/store";
import { NotificationsService } from "angular2-notifications";

export class PlanTableStateModel extends TableInfo<PlanTable,PlanFilter> {
    constructor () {
        super();
        this.filter = null; //new PlanFilter();
    }
}

let tableInfo = new PlanTableStateModel();
@State<PlanTableStateModel>({
    name: 'PlanTable',
    defaults : tableInfo
})

export class PlanTableState {
    constructor(
        private planService: PlanService,
        private notification: NotificationsService) {
    }

    @Selector()
    static get(state: PlanTableStateModel) {

        return state;
    }

    @Selector()
    static getFilter(state: PlanTableStateModel) {
        return state.filter;
    }

    @Action(LoadPlanTableDatas)
    loadGrid(context: StateContext<PlanTableStateModel>, action: LoadPlanTableDatas) {
        const state = context.getState();
        state.dataInfos.loadingInfo.loaded=false;
        state.dataInfos.loadingInfo.loading=true;
        state.filter = action.payload;
        state.dataInfos.datas = null;
        
        context.patchState(state);

        this.planService.get(action.payload)
            .subscribe(result=> {
                context.dispatch(new LoadPlanTableDatasSuccess(result));
            },error => {
                this.notification.error('Erreur connexion',error);
            })
    }

    @Action(LoadPlanTableDatasSuccess)
    loadSuccess(context: StateContext<PlanTableStateModel>, action: LoadPlanTableDatasSuccess) {
        let state = context.getState();
        state.dataInfos.loadingInfo.loaded = true;
        state.dataInfos.loadingInfo.loading = false;
        state.dataInfos.datas = action.payload;
        
        context.patchState(state);
    }

    @Action(ChangePlanTableFilter)
    changeFilter(context: StateContext<PlanTableStateModel>, action: ChangePlanTableFilter) {
        const state = context.getState();
        state.filter=action.payload

        context.patchState(state);
        context.dispatch(new LoadPlanTableDatas(action.payload));
    }

    @Action(ClearPlanTableDatas)
    clear(context: StateContext<PlanTableStateModel>) {
        return context.setState(new PlanTableStateModel());
    }



}
