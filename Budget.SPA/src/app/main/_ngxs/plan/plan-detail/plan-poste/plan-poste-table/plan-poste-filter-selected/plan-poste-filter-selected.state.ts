import { FilterSelected } from "app/main/_models/generics/filter.info.model";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { UpdatePaginationPlanPosteTableFilterSelected, SynchronizePlanPosteTableFilterSelected } from "./plan-poste-filter-selected.action";
import { FilterPlanPosteTableSelected } from "app/main/_models/filters/plan-poste.filter";
import { LoadPlanPosteTable } from "../plan-poste-table.action";

export class PlanPosteTableFilterSelectedStateModel extends FilterSelected<FilterPlanPosteTableSelected> {
    constructor () {
        super(FilterPlanPosteTableSelected);
    }
}

let planPosteTableFilterSelectedStateModel = new PlanPosteTableFilterSelectedStateModel();

@State<PlanPosteTableFilterSelectedStateModel>({
    name: 'PlanPosteTableFilterSelected',
    defaults : planPosteTableFilterSelectedStateModel
})

@Injectable()
export class PlanPosteTableFilterSelectedState extends LoaderState {
    constructor(
        private _store: Store
        ) {
            super();
    }

    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    //   }

    @Selector()
    static get(state: PlanPosteTableFilterSelectedStateModel) {
        return state;
    }
       

    @Action(UpdatePaginationPlanPosteTableFilterSelected)
    UpdatePaginationPlanPosteTableFilterSelected(context: StateContext<PlanPosteTableFilterSelectedStateModel>, action: UpdatePaginationPlanPosteTableFilterSelected) {
        this.loading(context,'filter-selected');

        let state = context.getState();
        state.selected.pagination = action.payload;
        context.patchState(state);

        this.loaded(context,'filter-selected');
    }

    @Action(SynchronizePlanPosteTableFilterSelected)
    SynchronizePlanPosteTableFilterSelected(context: StateContext<PlanPosteTableFilterSelectedStateModel>, action: SynchronizePlanPosteTableFilterSelected) {
        this.loading(context,'filter-selected');
        let state = context.getState();
        state.selected = action.payload;
        context.patchState(state);
        this.loaded(context,'filter-selected');

        this._store.dispatch(new LoadPlanPosteTable(action.payload));
    }

}