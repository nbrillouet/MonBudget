import { AsTable } from "app/main/_models/account-statement/account-statement-table.model";
import { DataInfos } from "app/main/_models/generics/table-info.model";
import { PlanService } from "app/main/apps/plan/plan.service";
import { NotificationsService } from "angular2-notifications";
import { AsTableStateModel } from "../account-statement/account-statement-list/account-statement-list.state";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { LoadAsPlanForTable, LoadAsPlanForTableSuccess, ChangeAsPlanForTableFilter, ClearAsPlanForTable } from "./as-plan.action";


export class AsPlanTableStateModel extends DataInfos<AsTable> {
    
    constructor () {
        super();
        // this.filter = new FilterPlanTracking();
    }

}

let asPlanTableStateModel = new AsTableStateModel();
@State<AsTableStateModel>({
    name: 'AsPlanTable',
    defaults : asPlanTableStateModel
})

export class AsPlanTableState {
    constructor(
        private _planService: PlanService,
        private _notification: NotificationsService) {
    }

    @Selector()
    static get(state: AsPlanTableStateModel) {

        return state;
    }

    // @Selector()
    // static getFilter(state: AsPlanTableStateModel) {
    //     return state.filter;
    // }

    @Action(LoadAsPlanForTable)
    load(context: StateContext<AsPlanTableStateModel>, action: LoadAsPlanForTable) {
        const state = context.getState();

        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;
        state.datas = null;
        
        context.patchState(state);

        this._planService.getAsNotInPlan(action.payload)
            .subscribe(result=> {
                context.dispatch(new LoadAsPlanForTableSuccess(result));
            },error => {
                this._notification.error('Erreur connexion',error);
            })

    }

    @Action(LoadAsPlanForTableSuccess)
    loadSuccess(context: StateContext<AsPlanTableStateModel>, action: LoadAsPlanForTableSuccess) {
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas = action.payload;

        context.patchState(state);
        
    }

    @Action(ChangeAsPlanForTableFilter)
    changeFilter(context: StateContext<AsPlanTableStateModel>, action: ChangeAsPlanForTableFilter) {
        const state = context.getState();
        // state.filter=action.payload

        context.patchState(state);
        context.dispatch(new LoadAsPlanForTable(action.payload));
    }

    @Action(ClearAsPlanForTable)
    clear(context: StateContext<AsPlanTableStateModel>) {
        return context.setState(new AsPlanTableStateModel());
    }

    
}