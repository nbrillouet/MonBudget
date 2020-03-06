import { FilterSelected } from "app/main/_models/generics/filter.info.model";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { UpdatePaginationPlanNotAsTableFilterSelected, SynchronizePlanNotAsTableFilterSelected } from "./plan-not-as-table-filter-selected.action";
import { FilterPlanNotAsTableSelected } from "app/main/_models/filters/plan-not-as.filter";
import { LoadPlanNotAsTable } from "../plan-not-as-table.action";

export class PlanNotAsTableFilterSelectedStateModel extends FilterSelected<FilterPlanNotAsTableSelected> {
    constructor () {
        super(FilterPlanNotAsTableSelected);
    }
}

let planNotAsTableFilterSelectedStateModel = new PlanNotAsTableFilterSelectedStateModel();

@State<PlanNotAsTableFilterSelectedStateModel>({
    name: 'PlanNotAsTableFilterSelected',
    defaults : planNotAsTableFilterSelectedStateModel
})

@Injectable()
export class PlanNotAsTableFilterSelectedState extends LoaderState {
    constructor(
        private _store: Store
        ) {
            super();
    }

    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    //   }

    @Selector()
    static get(state: PlanNotAsTableFilterSelectedStateModel) {
        return state;
    }
       

    @Action(UpdatePaginationPlanNotAsTableFilterSelected)
    UpdatePaginationPlanNotAsTableFilterSelected(context: StateContext<PlanNotAsTableFilterSelectedStateModel>, action: UpdatePaginationPlanNotAsTableFilterSelected) {
        this.loading(context,'filter-selected');

        let state = context.getState();
        state.selected.pagination = action.payload;
        context.patchState(state);

        this.loaded(context,'filter-selected');
    }

    @Action(SynchronizePlanNotAsTableFilterSelected)
    SynchronizePlanNotAsTableFilterSelected(context: StateContext<PlanNotAsTableFilterSelectedStateModel>, action: SynchronizePlanNotAsTableFilterSelected) {
        this.loading(context,'filter-selected');
        let state = context.getState();
        state.selected = action.payload.filterPlanNotAsTableSelected;
        context.patchState(state);
        this.loaded(context,'filter-selected');
        this._store.dispatch(new LoadPlanNotAsTable(action.payload));
    }

}