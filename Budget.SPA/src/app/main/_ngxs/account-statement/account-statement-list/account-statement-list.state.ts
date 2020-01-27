import { AsTable } from "app/main/_models/account-statement/account-statement-table.model";
import { AsService } from "app/main/apps/account-statement/account-statement.service";
import { LoadAsTableDatas, ClearAsTableDatas } from "./account-statement-list.action";
import { UpdatePaginationAsTableFilter } from "../account-statement-list-filter/account-statement-filter.action";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { LoaderState } from "../../_base/loader-state";
import { Datas } from "app/main/_models/generics/detail-info.model";

export class AsTableStateModel extends Datas<AsTable> {
    constructor () {
        super();
    }
}

let asTableStateModel = new AsTableStateModel();
@State<AsTableStateModel>({
    name: 'AsTable',
    defaults : asTableStateModel
})

export class AsTableState extends LoaderState {
    constructor(
        private _asService: AsService,
        private _store: Store
    ) {
        super();
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
    LoadAsTableDatas(context: StateContext<AsTableStateModel>, action: LoadAsTableDatas) {
        this.loading(context,'datas');
        
        const state = context.getState();
        state.datas = null;
        context.patchState(state);
        
        this._asService.getAsTable(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result.datas;
                context.patchState(state);
                //TODO a controler
                this._store.dispatch(new UpdatePaginationAsTableFilter(result.pagination));

                this.loaded(context,'datas');
            });
    }

    // @Action(LoadAsTableDatasSuccess)
    // loadSuccess(context: StateContext<AsTableStateModel>, action: LoadAsTableDatasSuccess) {
    //     let state = context.getState();
    //     state.datas = action.payload.datas;

    //     context.patchState(state);

    //     this._store.dispatch(new UpdatePaginationAsTableFilter(action.payload.pagination));
    // }

    @Action(ClearAsTableDatas)
    clear(context: StateContext<AsTableStateModel>) {
        return context.setState(new AsTableStateModel());
    }



}

