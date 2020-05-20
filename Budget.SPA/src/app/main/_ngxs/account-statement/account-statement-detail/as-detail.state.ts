import { DetailInfo } from "app/main/_models/generics/detail-info.model";
import { AsForDetail } from "app/main/_models/account-statement/account-statement-detail.model";
import { FilterForDetail } from "app/main/_models/filters/shared/filterDetail.filter";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "../../_base/loader-state";
import { AsService } from "app/main/apps/account-statement/account-statement.service";
import { LoadAsDetail, SynchronizeAsDetail, ClearAsDetail } from "./as-detail.action";
import { LoadAsDetailFilter } from "./as-detail-filter/as-detail-filter.action";

export class AsDetailStateModel extends DetailInfo<AsForDetail, FilterForDetail> {
    constructor () {
        super();
        this.filter = new FilterForDetail();
    }
}

let detailInfo = new AsDetailStateModel();
@State<AsDetailStateModel>({
    name: 'AsDetail',
    defaults : detailInfo
})
@Injectable()
export class AsDetailState extends LoaderState {
    constructor(
        private _asService: AsService
    ) 
    {
        super();
        
    }

    //fonction delay (test asynchro)
    async delay(ms: number) {
        await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    }

    @Selector() static get(state: AsDetailStateModel) { return state;  }
    @Selector() static getFilter(state: AsDetailStateModel) { return state.filter; }

    @Action(LoadAsDetail)
    load(context: StateContext<AsDetailStateModel>, action: LoadAsDetail) {
        
        this.loading(context,'datas');
        const state = context.getState();

        state.filter = action.payload;
        state.datas = null;

        context.patchState(state);
        
        this._asService.getForDetail(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');

                //chargement des filtres associés
                context.dispatch(new LoadAsDetailFilter(state.datas));
            });
    }

    @Action(SynchronizeAsDetail)
    synchronize(context: StateContext<AsDetailStateModel>, action: SynchronizeAsDetail) {
        let state = context.getState();
        context.patchState(state);
    }

    @Action(ClearAsDetail)
    clear(context: StateContext<AsDetailStateModel>) {
        return context.setState(new AsDetailStateModel());
    }
}