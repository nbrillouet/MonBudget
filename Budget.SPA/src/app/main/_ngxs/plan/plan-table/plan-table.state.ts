import { Datas } from "app/main/_models/generics/detail-info.model";
import { PlanTable } from "app/main/_models/plan/plan.model";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "../../_base/loader-state";
import { PlanService } from "app/main/apps/plan/plan.service";
import { UpdatePaginationPlanTableFilterSelected } from "./plan-table-filter-selected/plan-table-filter-selected.action";
import { LoadPlanTable, ClearPlanTable } from "./plan-table.action";

export class PlanTableStateModel extends Datas<PlanTable[]> {
    constructor () {
        super();
    }
}

let tableInfo = new PlanTableStateModel();
@State<PlanTableStateModel>({
    name: 'PlanTable',
    defaults : tableInfo
})

@Injectable()
export class PlanTableState extends LoaderState {
    constructor(
        private _planService: PlanService,
        private _store: Store) {
            super();
    }

    @Selector()
    static get(state: PlanTableStateModel) {
        return state;
    }

    @Action(LoadPlanTable)
    loadGrid(context: StateContext<PlanTableStateModel>, action: LoadPlanTable) {
        this.loading(context,'datas');
        
        const state = context.getState();
        state.datas = null;
        context.patchState(state);

        this._planService.getPlanTable(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result.datas;
                context.patchState(state);

                this._store.dispatch(new UpdatePaginationPlanTableFilterSelected(result.pagination));

                this.loaded(context,'datas');
            });
    }

    @Action(ClearPlanTable)
    clear(context: StateContext<PlanTableStateModel>) {
        return context.setState(new PlanTableStateModel());
    }
}


// import { PlanFilter } from "app/main/_models/Filters/plan.filter";
// import { LoadPlanTableDatas, ChangePlanTableFilter, ClearPlanTableDatas } from "./plan-list.action";
// import { PlanService } from "app/main/apps/plan/plan.service";
// import { PlanTable } from "app/main/_models/plan/plan.model";
// import { Selector, Action, StateContext, State } from "@ngxs/store";
// import { NotificationsService } from "angular2-notifications";
// import { LoaderState } from "../../_base/loader-state";
// import { DatasFilter } from "app/main/_models/generics/detail-info.model";
// import { Injectable } from "@angular/core";

// export class PlanTableStateModel extends DatasFilter<PlanTable[],PlanFilter> {
//     constructor () {
//         super();
//         this.filter = null;
//     }
// }

// let tableInfo = new PlanTableStateModel();
// @State<PlanTableStateModel>({
//     name: 'PlanTable',
//     defaults : tableInfo
// })

// @Injectable()
// export class PlanTableState extends LoaderState {
//     constructor(
//         private planService: PlanService,
//         private notification: NotificationsService) {
//             super();
//     }

//     @Selector()
//     static get(state: PlanTableStateModel) {
//         return state;
//     }

//     @Selector()
//     static getFilter(state: PlanTableStateModel) {
//         return state.filter;
//     }

//     @Action(LoadPlanTableDatas)
//     loadGrid(context: StateContext<PlanTableStateModel>, action: LoadPlanTableDatas) {
//         this.loading(context,'datas');

//         const state = context.getState();
//         state.filter = action.payload;
//         state.datas = null;
//         context.patchState(state);

//         this.planService.get(action.payload)
//             .subscribe(result=> {
//                 let state = context.getState();
//                 state.datas = result;
//                 context.patchState(state);

//                 this.loaded(context,'datas');
//         });
//     }

//     // @Action(LoadPlanTableDatasSuccess)
//     // loadSuccess(context: StateContext<PlanTableStateModel>, action: LoadPlanTableDatasSuccess) {
//     //     let state = context.getState();
//     //     state.dataInfos.datas = action.payload;
        
//     //     context.patchState(state);
//     // }

//     @Action(ChangePlanTableFilter)
//     changeFilter(context: StateContext<PlanTableStateModel>, action: ChangePlanTableFilter) {
//         const state = context.getState();
//         state.filter=action.payload

//         context.patchState(state);
//         context.dispatch(new LoadPlanTableDatas(action.payload));
//     }

//     @Action(ClearPlanTableDatas)
//     clear(context: StateContext<PlanTableStateModel>) {
//         return context.setState(new PlanTableStateModel());
//     }



// }
