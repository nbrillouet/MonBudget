import { AsTable } from "app/main/_models/account-statement/account-statement-table.model";
import { PlanService } from "app/main/apps/plan/plan.service";
import { AsTableStateModel } from "../account-statement/account-statement-list/account-statement-list.state";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { LoadAsPlanForTable, ChangeAsPlanForTableFilter, ClearAsPlanForTable } from "./as-plan.action";
import { LoaderState } from "../_base/loader-state";
import { Datas } from "app/main/_models/generics/detail-info.model";

export class AsPlanTableStateModel extends Datas<AsTable[]> {
    
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

export class AsPlanTableState extends LoaderState{
    constructor(
        private _planService: PlanService) {
            super();
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
        this.loading(context,'datas');

        const state = context.getState();
        state.datas = null;
        context.patchState(state);

        this._planService.getAsNotInPlan(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');
            });
    }

    // @Action(LoadAsPlanForTableSuccess)
    // loadSuccess(context: StateContext<AsPlanTableStateModel>, action: LoadAsPlanForTableSuccess) {
    //     let state = context.getState();
    //     state.datas = action.payload;

    //     context.patchState(state);
        
    // }

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