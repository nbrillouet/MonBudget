import { DataInfos } from "app/main/_models/generics/table-info.model";
import { AsTable } from "app/main/_models/account-statement.model";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { AsService } from "app/main/apps/account-statement/account-statement.service";
import { LoadAsTableDatas, LoadAsTableDatasSuccess, ClearAsTableDatas } from "./account-statement-list.action";
import { UpdatePaginationAsTableFilter } from "../account-statement-list-filter/account-statement-filter.action";

export class AsTableStateModel extends DataInfos<AsTable> {
    constructor () {
        super();
    }
}

let asTableStateModel = new AsTableStateModel();
@State<AsTableStateModel>({
    name: 'AsTable',
    defaults : asTableStateModel
})

export class AsTableState {
    constructor(
        private _asService: AsService,
        private _store: Store
    ) {
    }

    @Selector()
    static get(state: AsTableStateModel) {
        return state;
    }

    // @Selector()
    // static getFilter(state: AsTableStateModel) {
    //     return state.filter;
    // }

    async delay(ms: number) {
        await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
      }

    @Action(LoadAsTableDatas)
    loadGrid(context: StateContext<AsTableStateModel>, action: LoadAsTableDatas) {
        const state = context.getState();
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;

        state.datas = null;
        context.patchState(state);
        
        console.log('action.payload', action.payload);
        // this.delay(3000).then(any=>{
        this._asService.getAsTable(action.payload)
            .subscribe(result=> {
                context.dispatch(new LoadAsTableDatasSuccess(result));
            });
        // });
    }

    @Action(LoadAsTableDatasSuccess)
    loadSuccess(context: StateContext<AsTableStateModel>, action: LoadAsTableDatasSuccess) {
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas = action.payload.datas;

        context.patchState(state);

        this._store.dispatch(new UpdatePaginationAsTableFilter(action.payload.pagination));
    }

    @Action(ClearAsTableDatas)
    clear(context: StateContext<AsTableStateModel>) {
        return context.setState(new AsTableStateModel());
    }



}

