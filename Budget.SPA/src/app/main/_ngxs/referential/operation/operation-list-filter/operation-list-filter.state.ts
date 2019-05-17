import { FilterInfo } from "app/main/_models/generics/filter.info.model";
import { FilterOperationTable } from "app/main/_models/filters/operation.filter";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { OperationService } from "app/main/_services/Referential/operation.service";
import { LoadOperationTableFilter, LoadOperationTableFilterSuccess, ChangeOperationTableFilter, UpdatePaginationOperationTableFilter } from "./operation-list-filter.action";
import { LoadOperationTableDatas } from "../operation-list/operation-list.action";

export class OperationTableFilterStateModel extends FilterInfo<FilterOperationTable> {
    constructor () {
        super(FilterOperationTable);
    }
}

let operationTableFilterStateModel = new OperationTableFilterStateModel();

@State<OperationTableFilterStateModel>({
    name: 'OperationTableFilter',
    defaults : operationTableFilterStateModel
})

export class OperationTableFilterState {

    constructor(
        private _operationService: OperationService,
        private _store: Store
        ) {
            
    }

    @Selector()
    static get(state: OperationTableFilterStateModel) {
 
        return state;
    }

    @Action(LoadOperationTableFilter)
    loadOperationfTableFilter(context: StateContext<OperationTableFilterStateModel>, action: LoadOperationTableFilter) {
        const state = context.getState();
        
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;
        state.filters = null;
        
        context.patchState(state);
        this._operationService.getTableFilter(action.payload.selected)
            .subscribe(result=> {
                context.dispatch(new LoadOperationTableFilterSuccess(result));
            });

    }

    @Action(LoadOperationTableFilterSuccess)
    loadSuccess(context: StateContext<OperationTableFilterStateModel>, action: LoadOperationTableFilterSuccess) {
        
        //conserver le payload
        let payload = JSON.parse(JSON.stringify(action.payload.selected));

        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.filters = action.payload;

        context.patchState(state);
        
        context.dispatch(new ChangeOperationTableFilter(payload));
        
    }

    @Action(ChangeOperationTableFilter)
    changeFilter(context: StateContext<OperationTableFilterStateModel>, action: ChangeOperationTableFilter) {
        
        this._store.dispatch(new LoadOperationTableDatas(action.payload));

     }

    @Action(UpdatePaginationOperationTableFilter)
    UpdatePaginationOperationTableFilter(context: StateContext<OperationTableFilterStateModel>, action: UpdatePaginationOperationTableFilter) {
        const state = context.getState();
        
        state.filters.selected.pagination = action.payload;

        context.patchState(state);

    }
}