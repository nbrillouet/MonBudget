import { PlanService } from "app/main/apps/plan/plan.service";
import { Datas } from "app/main/_models/generics/detail-info.model";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { LoadPlanNotAsTable, ClearPlanNotAsTable } from "./plan-not-as-table.action";
import { UpdatePaginationPlanNotAsTableFilterSelected } from "./plan-not-as-table-filter-selected/plan-not-as-table-filter-selected.action";
import { PlanNotAsTable } from "app/main/_models/plan/plan-not-as/plan-not-as.model";

export class PlanNotAsTableStateModel extends Datas<PlanNotAsTable[]> {
    constructor () {
        super();
    }
}

let tableInfo = new PlanNotAsTableStateModel();
@State<PlanNotAsTableStateModel>({
    name: 'PlanNotAsTable',
    defaults : tableInfo
})

@Injectable()
export class PlanNotAsTableState extends LoaderState {
    constructor(
        private _planService: PlanService,
        private _store: Store) {
            super();
    }

    @Selector()
    static get(state: PlanNotAsTableStateModel) {
        return state;
    }

    @Action(LoadPlanNotAsTable)
    loadGrid(context: StateContext<PlanNotAsTableStateModel>, action: LoadPlanNotAsTable) {
        this.loading(context,'datas');
        
        const state = context.getState();
        state.datas = null;
        context.patchState(state);

        this._planService.getPlanNotAsTable(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result.datas;
                context.patchState(state);

                this._store.dispatch(new UpdatePaginationPlanNotAsTableFilterSelected(result.pagination));

                this.loaded(context,'datas');
            });
    }

    @Action(ClearPlanNotAsTable)
    clear(context: StateContext<PlanNotAsTableStateModel>) {
        return context.setState(new PlanNotAsTableStateModel());
    }
}


// import { AsTable } from "app/main/_models/account-statement/account-statement-table.model";
// import { PlanService } from "app/main/apps/plan/plan.service";
// import { State, Selector, Action, StateContext } from "@ngxs/store";
// import { LoadAsPlanForTable, ChangeAsPlanForTableFilter, ClearAsPlanForTable } from "./as-plan.action";
// import { Datas } from "app/main/_models/generics/detail-info.model";
// import { Injectable } from "@angular/core";
// import { LoaderState } from "app/main/_ngxs/_base/loader-state";

// export class AsPlanTableStateModel extends Datas<AsTable[]> {
    
//     constructor () {
//         super();
//         // this.filter = new FilterPlanTracking();
//     }

// }

// let asPlanTableStateModel = new AsPlanTableStateModel();
// @State<AsPlanTableStateModel>({
//     name: 'AsPlanTable',
//     defaults : asPlanTableStateModel
// })

// @Injectable()
// export class AsPlanTableState extends LoaderState{
//     constructor(
//         private _planService: PlanService) {
//             super();
//     }

//     @Selector()
//     static get(state: AsPlanTableStateModel) {

//         return state;
//     }

//     // @Selector()
//     // static getFilter(state: AsPlanTableStateModel) {
//     //     return state.filter;
//     // }

//     @Action(LoadAsPlanForTable)
//     load(context: StateContext<AsPlanTableStateModel>, action: LoadAsPlanForTable) {
//         this.loading(context,'datas');

//         const state = context.getState();
//         state.datas = null;
//         context.patchState(state);

//         this._planService.getAsNotInPlan(action.payload)
//             .subscribe(result=> {
//                 let state = context.getState();
//                 state.datas = result;
//                 context.patchState(state);

//                 this.loaded(context,'datas');
//             });
//     }

//     // @Action(LoadAsPlanForTableSuccess)
//     // loadSuccess(context: StateContext<AsPlanTableStateModel>, action: LoadAsPlanForTableSuccess) {
//     //     let state = context.getState();
//     //     state.datas = action.payload;

//     //     context.patchState(state);
        
//     // }

//     @Action(ChangeAsPlanForTableFilter)
//     changeFilter(context: StateContext<AsPlanTableStateModel>, action: ChangeAsPlanForTableFilter) {
//         const state = context.getState();
//         // state.filter=action.payload

//         context.patchState(state);
//         context.dispatch(new LoadAsPlanForTable(action.payload));
//     }

//     @Action(ClearAsPlanForTable)
//     clear(context: StateContext<AsPlanTableStateModel>) {
//         return context.setState(new AsPlanTableStateModel());
//     }

    
// }