// import { State, Selector, StateContext, Action, Store } from "app/main/_ngxs/account-statement-import/asi-list/node_modules/@ngxs/store";
import { DataInfos } from "app/main/_models/generics/table-info.model";
// import { NotificationsService } from "app/main/_ngxs/account-statement-import/asi-list/node_modules/angular2-notifications";
import { ClearAsiTableDatas, LoadAsiTableDatasSuccess, LoadAsiTableDatas } from "./asi-list.action";
import { AsiTable } from "app/main/_models/account-statement-import/account-statement-import.model";
import { UpdatePaginationAsiTableFilter } from "../asi-list-filter/asi-list-filter.action";
import { AsiService } from "app/main/apps/account-statement-import/asi.service";
import { State, Selector, StateContext, Action, Store } from "@ngxs/store";


export class AsiTableStateModel extends DataInfos<AsiTable> {
    constructor () {
        super();
        // this.filter = null; 
    }
}

let tableInfo = new AsiTableStateModel();
@State<AsiTableStateModel>({
    name: 'AsiTable',
    defaults : tableInfo
})

export class AsiTableState {
    constructor(
        private _asiService: AsiService,
        // private _notification: NotificationsService,
        private _store: Store
        
        ) {
    }

    @Selector()
    static get(state: AsiTableStateModel) {
        return state;
    }

    // @Selector()
    // static getFilter(state: AsiHistoTableStateModel) {
    //     return state.filter;
    // }

    @Action(LoadAsiTableDatas)
    loadGrid(context: StateContext<AsiTableStateModel>, action: LoadAsiTableDatas) {
        const state = context.getState();
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;
        //Affectation des filtres
        // state.filter = action.payload;
        
        state.datas = null;
                
        context.patchState(state);

        this._asiService.getAsiTable(action.payload)
            .subscribe(result=> {
                context.dispatch(new LoadAsiTableDatasSuccess(result));
            });
    }

    @Action(LoadAsiTableDatasSuccess)
    loadSuccess(context: StateContext<AsiTableStateModel>, action: LoadAsiTableDatasSuccess) {
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas = action.payload.datas;

        context.patchState(state);

        this._store.dispatch(new UpdatePaginationAsiTableFilter(action.payload.pagination));
    }

    // @Action(ChangeAsiHistoTableFilter)
    // changeFilter(context: StateContext<AsiHistoTableStateModel>, action: ChangeAsiHistoTableFilter) {
    //     const state = context.getState();
    //     state.filter=action.payload

    //     context.patchState(state);
    //     context.dispatch(new LoadAsiHistoTableDatas(action.payload));
    // }

    @Action(ClearAsiTableDatas)
    clear(context: StateContext<AsiTableStateModel>) {
        return context.setState(new AsiTableStateModel());
    }



}