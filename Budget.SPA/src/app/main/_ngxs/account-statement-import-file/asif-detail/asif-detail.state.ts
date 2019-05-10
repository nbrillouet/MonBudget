import { DataInfo } from "app/main/_models/generics/detail-info.model";
import { AsifDetail } from "app/main/_models/account-statement-import/account-statement-import-file.model";
import { AsifService } from "app/main/apps/account-statement-import-file/asif.service";
import { LoadAsifDetail, LoadAsifDetailSuccess, asifDetailChangeOperationTypeFamily, asifDetailChangeOperationTypeFamilySuccess, asifDetailChangeOperationType, asifDetailChangeOperationTypeSuccess, ClearAsifDetail } from "./asif-detail.action";
import { ReferentialService } from "app/main/_services/Referential/referential.service";
import { EnumSelectType, ISelect } from "app/main/_models/generics/select.model";
import { ComboSimple } from "app/main/_models/generics/combo.model";
import { State, Selector, Action, StateContext } from "@ngxs/store";

export class AsifDetailStateModel extends DataInfo<AsifDetail> {
    constructor () {
        super();
    }
}

let asifDetailStateModel = new AsifDetailStateModel();

@State<AsifDetailStateModel>({
    name: 'AsifDetail',
    defaults : asifDetailStateModel
})

export class AsifDetailState {

    constructor(
        private _asifService: AsifService,
        private _referentialService: ReferentialService
        // private _store: Store
        ) {
    }

    @Selector()
    static get(state: AsifDetailStateModel) {
 
        return state;
    }

    // @Selector()
    // static getFilter(state: PlanTableComboFilterStateModel) {
    //     return state.filter;
    // }

    @Action(LoadAsifDetail)
    loadAsifDetail(context: StateContext<AsifDetailStateModel>, action: LoadAsifDetail) {
        const state = context.getState();
        
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;
        state.datas = null;
        
        context.patchState(state);
        this._asifService.getAsifDetail(action.payload)
            .subscribe(result=> {
                context.dispatch(new LoadAsifDetailSuccess(result));
            });

    }

    @Action(LoadAsifDetailSuccess)
    loadSuccess(context: StateContext<AsifDetailStateModel>, action: LoadAsifDetailSuccess) {
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas = action.payload;
        // state.filters = new FilterAsifTable();
        // state.filters.selected.idImport = action.payload.selected.idImport;

        context.patchState(state);

        // context.dispatch(new ChangeAsifTableFilter(action.payload));
    }

    @Action(ClearAsifDetail)
    clear(context: StateContext<AsifDetailStateModel>) {
        return context.setState(new AsifDetailStateModel());
    }

    //====================================
    //          OperationTypeFamily
    //====================================
    @Action(asifDetailChangeOperationTypeFamily)
    asifDetailChangeOperationTypeFamily(context: StateContext<AsifDetailStateModel>, action: asifDetailChangeOperationTypeFamily) {
        console.log('change operationType: Open');
        const state = context.getState();
        
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;
        state.datas.operationTypeFamily.selected = action.payload;
        state.datas.operationType = new ComboSimple<ISelect>();
        
        context.patchState(state);
        this._referentialService.operationTypeService.GetSelectList(action.payload.id,EnumSelectType.inconnu)
            .subscribe(result=> {
                console.log('asif: change operationType: state',state);
                context.dispatch(new asifDetailChangeOperationTypeFamilySuccess(result));
            });
    }

    @Action(asifDetailChangeOperationTypeFamilySuccess)
    asifDetailChangeOperationTypeFamilySuccess(context: StateContext<AsifDetailStateModel>, action: asifDetailChangeOperationTypeFamilySuccess) {
        console.log('change operationType: Closed');
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas.operationType.list = action.payload;
        state.datas.operationType.selected = action.payload[0];

        context.patchState(state);
    }

    //====================================
    //          OperationType
    //====================================
    @Action(asifDetailChangeOperationType)
    asifDetailChangeOperationType(context: StateContext<AsifDetailStateModel>, action: asifDetailChangeOperationType) {
        const state = context.getState();
        
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;
        state.datas.operationType.selected = action.payload.operationType;
        state.datas.operationMethod.selected = action.payload.operationMethod;
        state.datas.operation = new ComboSimple<ISelect>();
        
        context.patchState(state);
        this._referentialService.operationService.GetSelectList(action.payload.operationMethod.id,action.payload.operationType.id,EnumSelectType.inconnu)
            .subscribe(result => {
                context.dispatch(new asifDetailChangeOperationTypeSuccess(result));
            });


        // this._referentialService.operationTypeService.GetSelectList(action.payload.id,EnumSelectType.inconnu)
        //     .subscribe(result=> {
        //         context.dispatch(new asifDetailChangeOperationTypeSuccess(result));
        //     });
    }

    @Action(asifDetailChangeOperationTypeSuccess)
    asifDetailChangeOperationTypeSuccess(context: StateContext<AsifDetailStateModel>, action: asifDetailChangeOperationTypeSuccess) {
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas.operation.list = action.payload;
        state.datas.operation.selected = action.payload[0];

        context.patchState(state);
    }
    
}
