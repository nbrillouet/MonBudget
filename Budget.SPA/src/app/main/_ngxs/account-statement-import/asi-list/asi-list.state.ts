import { ClearAsiTableDatas, LoadAsiTableDatas } from "./asi-list.action";
import { AsiTable } from "app/main/_models/account-statement-import/account-statement-import.model";
import { UpdatePaginationAsiTableFilter } from "../asi-list-filter/asi-list-filter.action";
import { AsiService } from "app/main/apps/account-statement-import/asi.service";
import { State, Selector, StateContext, Action, Store } from "@ngxs/store";
import { LoaderState } from "../../_base/loader-state";
import { Datas } from "app/main/_models/generics/detail-info.model";


export class AsiTableStateModel extends Datas<AsiTable> {
    constructor () {
        super();
    }
}

let tableInfo = new AsiTableStateModel();
@State<AsiTableStateModel>({
    name: 'AsiTable',
    defaults : tableInfo
})

export class AsiTableState extends LoaderState {
    constructor(
        private _asiService: AsiService,
        private _store: Store
        
        ) {
            super();
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
        this.loading(context,'datas');

        const state = context.getState();
        state.datas = null;
        context.patchState(state);

        this._asiService.getAsiTable(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result.datas;
                context.patchState(state);

                //TODO a controler
                this._store.dispatch(new UpdatePaginationAsiTableFilter(action.payload.pagination));
                
                this.loaded(context,'datas');
            });
    }

    // @Action(LoadAsiTableDatasSuccess)
    // loadSuccess(context: StateContext<AsiTableStateModel>, action: LoadAsiTableDatasSuccess) {
    //     let state = context.getState();
    //     state.datas = action.payload.datas;

    //     context.patchState(state);

    //     this._store.dispatch(new UpdatePaginationAsiTableFilter(action.payload.pagination));
    // }

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