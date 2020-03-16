import { DataInfo } from "app/main/_models/generics/detail-info.model";
import { FilterOtfDetail } from "app/main/_models/filters/operation-type-family.filter";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { OtfService } from "app/main/_services/Referential/operation-type-family.service";
import { LoadOtfDetailFilter, ClearOtfDetailFilter } from "./otf-detail-filter.action";

export class OtfDetailFilterStateModel extends DataInfo<FilterOtfDetail> {
    constructor() {
        super();
    }
}

let otfDetailFilterStateModel = new OtfDetailFilterStateModel();
@State<OtfDetailFilterStateModel>({
    name: 'OtfDetailFilter',
    defaults: otfDetailFilterStateModel
})
@Injectable()
export class OtfDetailFilterState extends LoaderState {
    constructor(
        private _otfService: OtfService
    ) {
        super();
    }

    @Selector()
    static get(state: OtfDetailFilterStateModel) {
        return state;
    }

    async delay(ms: number) {
        await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
    }

    @Action(LoadOtfDetailFilter)
    LoadOtfDetailFilter(context: StateContext<OtfDetailFilterStateModel>, action: LoadOtfDetailFilter) {
        this.loading(context,'datas');

        const state = context.getState();
        state.datas = null;
        context.patchState(state);
        
        this._otfService.getForDetailFilter(action.payload)
            .subscribe(result => {
                let state = context.getState();
                state.datas = result;
                context.patchState(state);
                
                this.loaded(context,'datas');
            });
    }

    @Action(ClearOtfDetailFilter)
    ClearOtfDetailFilter(context: StateContext<OtfDetailFilterStateModel>) {
        return context.setState(new OtfDetailFilterStateModel());
    }
}