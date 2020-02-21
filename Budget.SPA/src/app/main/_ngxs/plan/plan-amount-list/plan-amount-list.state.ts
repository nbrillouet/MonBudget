import { AsTable } from "app/main/_models/account-statement/account-statement-table.model";
import { PlanAmountFilter } from "app/main/_models/filters/plan-amount.filter";
import { PlanService } from "app/main/apps/plan/plan.service";
import { LoadPlanAmountTableDatas, ChangePlanAmountTableFilter, ClearPlanAmountTableDatas } from "./plan-amount-list.action";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { NotificationsService } from "angular2-notifications";
import { LoaderState } from "../../_base/loader-state";
import { DatasFilter } from "app/main/_models/generics/detail-info.model";
import { Injectable } from "@angular/core";

export class PlanAmountTableStateModel extends DatasFilter<AsTable[],PlanAmountFilter> {
    constructor () {
        super();
        this.filter = null; 
    }
}

let planAmountTableStateModel = new PlanAmountTableStateModel();
@State<PlanAmountTableStateModel>({
    name: 'PlanAmountTable',
    defaults : planAmountTableStateModel
})

@Injectable()
export class PlanAmountTableState extends LoaderState{
    constructor(
        private _planService: PlanService,
        private _notification: NotificationsService) {
            super();
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
        this.loading(context,'datas');
        
        const state = context.getState();
        state.filter = action.payload;
        state.datas = null;
        context.patchState(state);

        this._planService.getPlanAmountTable(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');
            });
    }

    // @Action(LoadPlanAmountTableDatasSuccess)
    // loadSuccess(context: StateContext<PlanAmountTableStateModel>, action: LoadPlanAmountTableDatasSuccess) {
    //     let state = context.getState();
    //     state.dataInfos.datas = action.payload;
        
    //     context.patchState(state);
    // }

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