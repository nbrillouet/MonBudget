import { DataInfo } from "app/main/_models/generics/detail-info.model";
import { FilterOtDetail } from "app/main/_models/filters/operation-type.filter";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { OtService } from "app/main/_services/Referential/operation-type.service";
import { LoadOtDetailFilter, ClearOtDetailFilter } from "./ot-detail-filter.action";

export class OtDetailFilterStateModel extends DataInfo<FilterOtDetail> {
    constructor() {
        super();
    }
}

let otDetailFilterStateModel = new OtDetailFilterStateModel();
@State<OtDetailFilterStateModel>({
    name: 'OtDetailFilter',
    defaults: otDetailFilterStateModel
})
@Injectable()
export class OtDetailFilterState extends LoaderState {
    constructor(
        private _otService: OtService
    ) {
        super();
    }

    @Selector()
    static get(state: OtDetailFilterStateModel) {
        return state;
    }

    async delay(ms: number) {
        await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
    }

    @Action(LoadOtDetailFilter)
    LoadOtDetailFilter(context: StateContext<OtDetailFilterStateModel>, action: LoadOtDetailFilter) {
        this.loading(context,'datas');

        const state = context.getState();
        state.datas = null;
        context.patchState(state);
        
        this._otService.getForDetailFilter(action.payload)
            .subscribe(result => {
                let state = context.getState();
                state.datas = result;
                context.patchState(state);
                
                this.loaded(context,'datas');
            });
    }

    @Action(ClearOtDetailFilter)
    ClearOtDetailFilter(context: StateContext<OtDetailFilterStateModel>) {
        return context.setState(new OtDetailFilterStateModel());
    }
}