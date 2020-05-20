import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { AsifService } from "app/main/apps/account-statement-import-file/asif.service";
import { ReferentialService } from "app/main/_services/Referential/referential.service";
import { DataInfo } from "app/main/_models/generics/detail-info.model";
import { State, Action, StateContext, Selector } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoadAsifDetailFilter, ClearAsifDetailFilter, asifDetailFilterChangeOtf, asifDetailFilterChangeOt } from "./asif-detail-filter.action";
import { EnumSelectType } from "app/main/_models/generics/select.model";
import { FilterAsifDetail } from "app/main/_models/filters/account-statement-import-file.filter";

export class AsifDetailFilterStateModel extends DataInfo<FilterAsifDetail> {
    constructor() {
        super();
    }
}

let asifDetailFilterStateModel = new AsifDetailFilterStateModel();
@State<AsifDetailFilterStateModel>({
    name: 'AsifDetailFilter',
    defaults: asifDetailFilterStateModel
})
@Injectable()
export class AsifDetailFilterState extends LoaderState {
    constructor(
        private _asifService: AsifService,
        private _referentialService: ReferentialService
    ) {
        super();
    }

    @Selector()
    static get(state: AsifDetailFilterStateModel) {
        return state;
    }

    async delay(ms: number) {
        await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
    }

    @Action(LoadAsifDetailFilter)
    LoadAsifDetailFilter(context: StateContext<AsifDetailFilterStateModel>, action: LoadAsifDetailFilter) {
        this.loading(context,'datas');
        console.log('passage');
        const state = context.getState();
        state.datas = null;
        context.patchState(state);
        
        this._asifService.getDetailFilter(action.payload)
            .subscribe(result => {
                let state = context.getState();
                state.datas = result;
                context.patchState(state);
                
                this.loaded(context,'datas');
            });
    }

    @Action(ClearAsifDetailFilter)
    ClearAsifDetailFilter(context: StateContext<AsifDetailFilterStateModel>) {
        return context.setState(new AsifDetailFilterStateModel());
    }


    //====================================
    //          Operation type family
    //====================================
    // Le changement d'operation type family implique le changement de la liste operation Type
    @Action(asifDetailFilterChangeOtf)
    asifDetailFilterChangeOtf(context: StateContext<AsifDetailFilterStateModel>, action: asifDetailFilterChangeOtf) {
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
    @Action(asifDetailFilterChangeOt)
    asifDetailFilterChangeOt(context: StateContext<AsifDetailFilterStateModel>, action: asifDetailFilterChangeOt) {
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