import { Datas } from "app/main/_models/generics/detail-info.model";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoadPlanPosteTable, ClearPlanPosteTable } from "./plan-poste-table.action";
import { UpdatePaginationPlanPosteTableFilterSelected } from "./plan-poste-filter-selected/plan-poste-filter-selected.action";
import { PlanPosteService } from "app/main/apps/plan/plan-poste.service";
import { PlanPosteTable } from "app/main/_models/plan.model";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";

export class PlanPosteTableStateModel extends Datas<PlanPosteTable[]> {
    constructor () {
        super();
    }
}

let tableInfo = new PlanPosteTableStateModel();
@State<PlanPosteTableStateModel>({
    name: 'PlanPosteTable',
    defaults : tableInfo
})

@Injectable()
export class PlanPosteTableState extends LoaderState {
    constructor(
        private _planPosteService: PlanPosteService,
        private _store: Store) {
            super();
    }

    @Selector()
    static get(state: PlanPosteTableStateModel) {
        return state;
    }

    @Action(LoadPlanPosteTable)
    loadGrid(context: StateContext<PlanPosteTableStateModel>, action: LoadPlanPosteTable) {
        this.loading(context,'datas');
        
        const state = context.getState();
        state.datas = null;
        context.patchState(state);

        this._planPosteService.getPlanPosteTable(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result.datas;
                context.patchState(state);

                this._store.dispatch(new UpdatePaginationPlanPosteTableFilterSelected(result.pagination));

                this.loaded(context,'datas');
        });
    }

    @Action(ClearPlanPosteTable)
    clear(context: StateContext<PlanPosteTableStateModel>) {
        return context.setState(new PlanPosteTableStateModel());
    }
}