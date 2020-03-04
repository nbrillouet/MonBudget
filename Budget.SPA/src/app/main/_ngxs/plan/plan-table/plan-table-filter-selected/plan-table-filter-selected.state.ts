import { FilterSelected } from "app/main/_models/generics/filter.info.model";
import { FilterPlanTableSelected } from "app/main/_models/Filters/plan.filter";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { UpdatePaginationPlanTableFilterSelected, SynchronizePlanTableFilterSelected } from "./plan-table-filter-selected.action";
import { LoadPlanTable } from "../plan-table.action";


export class PlanTableFilterSelectedStateModel extends FilterSelected<FilterPlanTableSelected> {
    constructor () {
        super(FilterPlanTableSelected);
    }
}

let planTableFilterSelectedStateModel = new PlanTableFilterSelectedStateModel();

@State<PlanTableFilterSelectedStateModel>({
    name: 'PlanTableFilterSelected',
    defaults : planTableFilterSelectedStateModel
})

@Injectable()
export class PlanTableFilterSelectedState extends LoaderState {
    constructor(
        private _store: Store
        ) {
            super();
    }

    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    //   }

    @Selector()
    static get(state: PlanTableFilterSelectedStateModel) {
        return state;
    }
       

    @Action(UpdatePaginationPlanTableFilterSelected)
    UpdatePaginationPlanTableFilterSelected(context: StateContext<PlanTableFilterSelectedStateModel>, action: UpdatePaginationPlanTableFilterSelected) {
        this.loading(context,'filter-selected');

        let state = context.getState();
        state.selected.pagination = action.payload;
        context.patchState(state);

        this.loaded(context,'filter-selected');
    }

    @Action(SynchronizePlanTableFilterSelected)
    SynchronizePlanTableFilterSelected(context: StateContext<PlanTableFilterSelectedStateModel>, action: SynchronizePlanTableFilterSelected) {
        this.loading(context,'filter-selected');
        let state = context.getState();
        state.selected = action.payload;
        context.patchState(state);
        this.loaded(context,'filter-selected');

        this._store.dispatch(new LoadPlanTable(action.payload));
    }

}

// import { PlanTableComboFilter } from "app/main/_models/Filters/plan.filter";
// import { PlanService } from "app/main/apps/plan/plan.service";
// import { LoadPlanTableComboFilter, ChangePlanTableComboFilter } from "./plan-list-filter.action";
// import { State, Selector, Action, StateContext } from "@ngxs/store";
// import { LoaderState } from "../../_base/loader-state";
// import { Datas } from "app/main/_models/generics/detail-info.model";
// import { Injectable } from "@angular/core";

// export class PlanTableComboFilterStateModel extends Datas<PlanTableComboFilter> {
//     constructor () {
//         super();
//     }
// }

// let planTableComboFilter = new PlanTableComboFilterStateModel();
// @State<PlanTableComboFilterStateModel>({
//     name: 'PlanTableComboFilter',
//     defaults : planTableComboFilter
// })

// @Injectable()
// export class PlanTableComboFilterState extends LoaderState {
//     constructor(
//         private _planService: PlanService) {
//             super();
//     }

//     @Selector()
//     static get(state: PlanTableComboFilterStateModel) {
//         return state;
//     }

//     // @Selector()
//     // static getFilter(state: PlanTableComboFilterStateModel) {
//     //     return state.filter;
//     // }

//     @Action(LoadPlanTableComboFilter)
//     loadGrid(context: StateContext<PlanTableComboFilterStateModel>, action: LoadPlanTableComboFilter) {
//         this.loading(context,'datas');
        
//         const state = context.getState();
//         state.datas = null;
//         context.patchState(state);

//         this._planService.getPlanTableComboFilter()
//             .subscribe(result=> {
//                 let state = context.getState();
//                 state.datas = result;
//                 context.patchState(state);

//                 this.loaded(context,'datas');
//             });
        
//     }

//     // @Action(LoadPlanTableComboFilterSuccess)
//     // loadSuccess(context: StateContext<PlanTableComboFilterStateModel>, action: LoadPlanTableComboFilterSuccess) {
//     //     let state = context.getState();
//     //     state.datas = action.payload;
        
//     //     context.patchState(state);
//     // }

//     @Action(ChangePlanTableComboFilter)
//     changeFilter(context: StateContext<PlanTableComboFilterStateModel>, action: ChangePlanTableComboFilter) {
//         const state = context.getState();

//         if(action.payload.filterName='year') {
//             state.datas.years.selected = action.payload.value;
//         }

//         context.patchState(state);
//         // context.dispatch(new LoadPlanDatas(action.payload));
//     }



// }