import { DataInfos } from "app/main/_models/generics/table-info.model";
import { OtfTable } from "app/main/_models/referential/operation-type-family.model";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { LoadOtfTableDatas, LoadOtfTableDatasSuccess, ClearOtfTableDatas } from "./operation-type-family-list.action";
import { UpdatePaginationOtfTableFilter } from "../operation-type-family-list-filter/operation-type-family-list-filter.action";
import { OtfService } from "app/main/apps/referential/operations/operation-type-family/operation-type-family.service";

export class OtfTableStateModel extends DataInfos<OtfTable> {
    constructor () {
        super();
    }
}

let tableInfo = new OtfTableStateModel();
@State<OtfTableStateModel>({
    name: 'OtfTable',
    defaults : tableInfo
})

export class OtfTableState {
    constructor(
        private _otfService: OtfService,
        private _store: Store
        // private _notification: NotificationsService
        ) {
    }

    @Selector()
    static get(state: OtfTableStateModel) {
        return state;
    }


    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    //   }

    @Action(LoadOtfTableDatas)
    loadGrid(context: StateContext<OtfTableStateModel>, action: LoadOtfTableDatas) {
        const state = context.getState();
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;
        // state.datas = action.payload;
        state.datas = null;
        context.patchState(state);
        
        // this.delay(3000).then(any=>{
        this._otfService.getOtfTable(action.payload)
            .subscribe(result=> {
                context.dispatch(new LoadOtfTableDatasSuccess(result));
            });
        // });
    }

    @Action(LoadOtfTableDatasSuccess)
    loadSuccess(context: StateContext<OtfTableStateModel>, action: LoadOtfTableDatasSuccess) {
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas = action.payload.datas;
        // state.pagination = action.payload.pagination;

        context.patchState(state);


        this._store.dispatch(new UpdatePaginationOtfTableFilter(action.payload.pagination));
    }

    @Action(ClearOtfTableDatas)
    clear(context: StateContext<OtfTableStateModel>) {
        return context.setState(new OtfTableStateModel());
    }



}