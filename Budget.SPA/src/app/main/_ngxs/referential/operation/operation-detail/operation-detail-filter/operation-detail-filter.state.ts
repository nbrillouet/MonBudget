import { DataInfo } from "app/main/_models/generics/detail-info.model";
import { FilterOperationDetail } from "app/main/_models/filters/operation.filter";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { ReferentialService } from "app/main/_services/Referential/referential.service";
import { LoadOperationDetailFilter, ClearOperationDetailFilter } from "./operation-detail-filter.action";

export class OperationDetailFilterStateModel extends DataInfo<FilterOperationDetail> {
    constructor() {
        super();
    }
}

let operationDetailFilterStateModel = new OperationDetailFilterStateModel();
@State<OperationDetailFilterStateModel>({
    name: 'OperationDetailFilter',
    defaults: operationDetailFilterStateModel
})

export class OperationDetailFilterState extends LoaderState {
    constructor(
        private _referentialService: ReferentialService
    ) {
        super();
    }

    @Selector()
    static get(state: OperationDetailFilterStateModel) {
        return state;
    }

    async delay(ms: number) {
        await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
    }

    @Action(LoadOperationDetailFilter)
    LoadOperationDetailFilter(context: StateContext<OperationDetailFilterStateModel>, action: LoadOperationDetailFilter) {
        this.loading(context,'datas');
        
        const state = context.getState();
        state.datas = null;
        context.patchState(state);
        
        this._referentialService.operationService.getDetailFilter(action.payload)
            .subscribe(result => {
                let state = context.getState();
                state.datas = result;
                context.patchState(state);
                
                this.loaded(context,'datas');
            });
    }

    @Action(ClearOperationDetailFilter)
    ClearOperationDetailFilter(context: StateContext<OperationDetailFilterStateModel>) {
        return context.setState(new OperationDetailFilterStateModel());
    }