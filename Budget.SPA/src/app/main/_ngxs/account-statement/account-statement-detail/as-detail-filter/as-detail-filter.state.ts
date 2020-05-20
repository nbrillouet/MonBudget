import { AsService } from "app/main/apps/account-statement/account-statement.service";
import { DataInfo } from "app/main/_models/generics/detail-info.model";
import { FilterAsDetail } from "app/main/_models/filters/account-statement.filter";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { LoadAsDetailFilter, ClearAsDetailFilter, asDetailFilterChangeOtf, asDetailFilterChangeOt } from "./as-detail-filter.action";
import { ReferentialService } from "app/main/_services/Referential/referential.service";
import { EnumSelectType } from "app/main/_models/generics/select.model";

export class AsDetailFilterStateModel extends DataInfo<FilterAsDetail> {
    constructor() {
        super();
    }
}

let asDetailFilterStateModel = new AsDetailFilterStateModel();
@State<AsDetailFilterStateModel>({
    name: 'AsDetailFilter',
    defaults: asDetailFilterStateModel
})
@Injectable()
export class AsDetailFilterState extends LoaderState {
    constructor(
        private _asService: AsService,
        private _referentialService: ReferentialService
    ) {
        super();
    }

    @Selector()
    static get(state: AsDetailFilterStateModel) {
        return state;
    }

    async delay(ms: number) {
        await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
    }

    @Action(LoadAsDetailFilter)
    LoadAsDetailFilter(context: StateContext<AsDetailFilterStateModel>, action: LoadAsDetailFilter) {
        this.loading(context,'datas');
        
        const state = context.getState();
        state.datas = null;
        context.patchState(state);
        
        this._asService.getDetailFilter(action.payload)
            .subscribe(result => {
                let state = context.getState();
                state.datas = result;
                context.patchState(state);
                
                this.loaded(context,'datas');
            });
    }

    @Action(ClearAsDetailFilter)
    ClearAsDetailFilter(context: StateContext<AsDetailFilterStateModel>) {
        return context.setState(new AsDetailFilterStateModel());
    }


    //====================================
    //          Operation type family
    //====================================
    // Le changement d'operation type family implique le changement de la liste operation Type
    @Action(asDetailFilterChangeOtf)
    asDetailFilterChangeOtf(context: StateContext<AsDetailFilterStateModel>, action: asDetailFilterChangeOtf) {
        this.loading(context,'otf');
        const state = context.getState();
        state.datas.operationType = [];

        context.patchState(state);
        this._referentialService.operationTypeService.GetSelectList(action.payload.id,EnumSelectType.inconnu)
            .subscribe(result=> {
                let state = context.getState();
                state.datas.operationType = result;
                context.patchState(state);

                this.loaded(context,'otf');
            });
    }

    //====================================
    //          Operation type
    //====================================
    // Le changement d'operation type implique le changement de la liste operation
    @Action(asDetailFilterChangeOt)
    asDetailFilterChangeOt(context: StateContext<AsDetailFilterStateModel>, action: asDetailFilterChangeOt) {
        this.loading(context,'ot');
        const state = context.getState();
        state.datas.operation = [];

        context.patchState(state);
        this._referentialService.operationService.GetSelectList(action.payload.operationMethod.id,action.payload.operationType.id,EnumSelectType.inconnu)
            .subscribe(result=> {
                let state = context.getState();
                state.datas.operation = result;
                context.patchState(state);

                this.loaded(context,'ot');
            });
    }
}