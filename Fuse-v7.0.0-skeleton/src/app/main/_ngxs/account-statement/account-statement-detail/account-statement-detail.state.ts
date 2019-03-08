import { DataInfo } from "app/main/_models/generics/detail-info.model";
import { AsDetail } from "app/main/_models/account-statement.model";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { AsService } from "app/main/apps/account-statement/account-statement.service";
import { ReferentialService } from "app/main/_services/Referential/referential.service";
import { LoadAsDetail, LoadAsDetailSuccess, asDetailChangeOperationTypeFamily, asDetailChangeOperationTypeFamilySuccess, asDetailChangeOperationType, asDetailChangeOperationTypeSuccess } from "./account-statement-detail.action";
import { ComboSimple } from "app/main/_models/generics/combo.model";
import { ISelect, EnumSelectType } from "app/main/_models/generics/select.model";

export class AsDetailStateModel extends DataInfo<AsDetail> {
    constructor () {
        super();
    }
}

let asDetailStateModel = new AsDetailStateModel();

@State<AsDetailStateModel>({
    name: 'AsDetail',
    defaults : asDetailStateModel
})

export class AsDetailState {

    constructor(
        private _asService: AsService,
        private _referentialService: ReferentialService
        ) {
    }

    @Selector()
    static get(state: AsDetailStateModel) {
 
        return state;
    }

    // @Selector()
    // static getFilter(state: PlanTableComboFilterStateModel) {
    //     return state.filter;
    // }

    @Action(LoadAsDetail)
    loadAsDetail(context: StateContext<AsDetailStateModel>, action: LoadAsDetail) {
        const state = context.getState();
        
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;
        state.datas = null;
        
        context.patchState(state);
        this._asService.getAsDetail(action.payload)
            .subscribe(result=> {
                context.dispatch(new LoadAsDetailSuccess(result));
            });

    }

    @Action(LoadAsDetailSuccess)
    loadSuccess(context: StateContext<AsDetailStateModel>, action: LoadAsDetailSuccess) {
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas = action.payload;

        context.patchState(state);

    }

    //====================================
    //          OperationTypeFamily
    //====================================
    @Action(asDetailChangeOperationTypeFamily)
    asDetailChangeOperationTypeFamily(context: StateContext<AsDetailStateModel>, action: asDetailChangeOperationTypeFamily) {
        console.log('change operationType: Open');
        const state = context.getState();
        
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;
        state.datas.operationTypeFamily.selected = action.payload;
        state.datas.operationType = new ComboSimple<ISelect>();
        
        context.patchState(state);
        this._referentialService.operationTypeService.GetSelectList(action.payload.id,EnumSelectType.inconnu)
            .subscribe(result=> {
                console.log('change operationType: go api');
                context.dispatch(new asDetailChangeOperationTypeFamilySuccess(result));
            });
    }

    @Action(asDetailChangeOperationTypeFamilySuccess)
    asDetailChangeOperationTypeFamilySuccess(context: StateContext<AsDetailStateModel>, action: asDetailChangeOperationTypeFamilySuccess) {
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
    @Action(asDetailChangeOperationType)
    asDetailChangeOperationType(context: StateContext<AsDetailStateModel>, action: asDetailChangeOperationType) {
        const state = context.getState();
        
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;
        state.datas.operationType.selected = action.payload.operationType;
        state.datas.operationMethod.selected = action.payload.operationMethod;
        state.datas.operation = new ComboSimple<ISelect>();
        
        context.patchState(state);
        this._referentialService.operationService.GetSelectList(action.payload.operationMethod.id,action.payload.operationType.id,EnumSelectType.inconnu)
            .subscribe(result => {
                context.dispatch(new asDetailChangeOperationTypeSuccess(result));
            });
    }

    @Action(asDetailChangeOperationTypeSuccess)
    asifDetailChangeOperationTypeSuccess(context: StateContext<AsDetailStateModel>, action: asDetailChangeOperationTypeSuccess) {
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.datas.operation.list = action.payload;
        state.datas.operation.selected = action.payload[0];

        context.patchState(state);
    }
    
}
