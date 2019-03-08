import { TableInfo } from "app/main/_models/generics/table-info.model";
import { AsTable } from "app/main/_models/account-statement/account-statement-table.model";
import { PlanAmountFilter } from "app/main/_models/filters/plan-amount.filter";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { PlanService } from "app/main/apps/plan/plan.service";
import { NotificationsService } from "angular2-notifications";
import { LoadPlanAmountTableDatas, LoadPlanAmountTableDatasSuccess, ChangePlanAmountTableFilter, ClearPlanAmountTableDatas } from "./plan-amount-list.action";

export class PlanAmountTableStateModel extends TableInfo<AsTable,PlanAmountFilter> {
    constructor () {
        super();
        this.filter = null; //new PlanFilter();
    }
}

let planAmountTableStateModel = new PlanAmountTableStateModel();
@State<PlanAmountTableStateModel>({
    name: 'PlanAmountTable',
    defaults : planAmountTableStateModel
})

export class PlanAmountTableState {
    constructor(
        private _planService: PlanService,
        private _notification: NotificationsService) {
    }

    @Selector()
    static get(state: PlanAmountTableStateModel) {

        return state;
    }

    @Selector()
    static getFilter(state: PlanAmountTableStateModel) {
        return state.filter;
    }

    @Action(LoadPlanAmountTableDatas)
    loadGrid(context: StateContext<PlanAmountTableStateModel>, action: LoadPlanAmountTableDatas) {
        const state = context.getState();
        state.dataInfos.loadingInfo.loaded=false;
        state.dataInfos.loadingInfo.loading=true;
        state.filter = action.payload;
        state.dataInfos.datas = null;
        
        context.patchState(state);

        this._planService.getPlanAmountTable(action.payload)
            .subscribe(result=> {
                context.dispatch(new LoadPlanAmountTableDatasSuccess(result));
            },error => {
                this._notification.error('Erreur connexion',error);
            })
    }

    @Action(LoadPlanAmountTableDatasSuccess)
    loadSuccess(context: StateContext<PlanAmountTableStateModel>, action: LoadPlanAmountTableDatasSuccess) {
        let state = context.getState();
        state.dataInfos.loadingInfo.loaded = true;
        state.dataInfos.loadingInfo.loading = false;
        state.dataInfos.datas = action.payload;
        
        context.patchState(state);
    }

    @Action(ChangePlanAmountTableFilter)
    changeFilter(context: StateContext<PlanAmountTableStateModel>, action: ChangePlanAmountTableFilter) {
        const state = context.getState();
        state.filter=action.payload

        context.patchState(state);
        context.dispatch(new LoadPlanAmountTableDatas(action.payload));
    }

    @Action(ClearPlanAmountTableDatas)
    clear(context: StateContext<PlanAmountTableStateModel>) {
        return context.setState(new PlanAmountTableStateModel());
    }
}