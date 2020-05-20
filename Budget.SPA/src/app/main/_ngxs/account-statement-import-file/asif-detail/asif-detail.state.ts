import { DetailInfo } from "app/main/_models/generics/detail-info.model";
import { AsifForDetail } from "app/main/_models/account-statement-import/account-statement-import-file.model";
import { FilterForDetail } from "app/main/_models/filters/shared/filterDetail.filter";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "../../_base/loader-state";
import { AsifService } from "app/main/apps/account-statement-import-file/asif.service";
import { LoadAsifDetail, SynchronizeAsifDetail, ClearAsifDetail } from "./asif-detail.action";
import { LoadAsifDetailFilter } from "./asif-detail-filter/asif-detail-filter.action";


export class AsifDetailStateModel extends DetailInfo<AsifForDetail, FilterForDetail> {
    constructor () {
        super();
        this.filter = new FilterForDetail();
    }
}

let detailInfo = new AsifDetailStateModel();
@State<AsifDetailStateModel>({
    name: 'AsifDetail',
    defaults : detailInfo
})

@Injectable()
export class AsifDetailState extends LoaderState {
    constructor(
        private _asifService: AsifService
    ) 
    {
        super();
        
    }

    //fonction delay (test asynchro)
    async delay(ms: number) {
        await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    }

    @Selector() static get(state: AsifDetailStateModel) { return state;  }
    @Selector() static getFilter(state: AsifDetailStateModel) { return state.filter; }

    @Action(LoadAsifDetail)
    load(context: StateContext<AsifDetailStateModel>, action: LoadAsifDetail) {
        
        this.loading(context,'datas');
        const state = context.getState();

        state.filter = action.payload;
        state.datas = null;

        context.patchState(state);
        
        this._asifService.getForDetail(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');

                //chargement des filtres associés
                context.dispatch(new LoadAsifDetailFilter(state.datas));
            });
    }

    @Action(SynchronizeAsifDetail)
    synchronize(context: StateContext<AsifDetailStateModel>, action: SynchronizeAsifDetail) {
        let state = context.getState();
        context.patchState(state);
    }

    @Action(ClearAsifDetail)
    clear(context: StateContext<AsifDetailStateModel>) {
        return context.setState(new AsifDetailStateModel());
    }
}
// import { AsifDetail } from "app/main/_models/account-statement-import/account-statement-import-file.model";
// import { AsifService } from "app/main/apps/account-statement-import-file/asif.service";
// import { LoadAsifDetail, asifDetailChangeOperationTypeFamily, asifDetailChangeOperationType, ClearAsifDetail, SynchronizeAsifDetail } from "./asif-detail.action";
// import { ReferentialService } from "app/main/_services/Referential/referential.service";
// import { EnumSelectType, ISelect } from "app/main/_models/generics/select.model";
// import { ComboSimple } from "app/main/_models/generics/combo.model";
// import { State, Selector, Action, StateContext } from "@ngxs/store";
// import { LoaderState } from "../../_base/loader-state";
// import { Datas } from "app/main/_models/generics/detail-info.model";
// import { Injectable } from "@angular/core";

// export class AsifDetailStateModel extends Datas<AsifDetail> {
//     constructor () {
//         super();
//     }
// }

// let asifDetailStateModel = new AsifDetailStateModel();

// @State<AsifDetailStateModel>({
//     name: 'AsifDetail',
//     defaults : asifDetailStateModel
// })

// @Injectable()
// export class AsifDetailState extends LoaderState {
//     constructor(
//         private _asifService: AsifService,
//         private _referentialService: ReferentialService
//         ) {
//             super();
//     }

//     @Selector()
//     static get(state: AsifDetailStateModel) {
 
//         return state;
//     }

//     // @Selector()
//     // static getFilter(state: PlanTableComboFilterStateModel) {
//     //     return state.filter;
//     // }

//     @Action(LoadAsifDetail)
//     loadAsifDetail(context: StateContext<AsifDetailStateModel>, action: LoadAsifDetail) {
//         this.loading(context,'datas');
        
//         const state = context.getState();
//         state.datas = null;
//         context.patchState(state);

//         this._asifService.getAsifDetail(action.payload)
//             .subscribe(result=> {
//                 let state = context.getState();
//                 state.datas = result;
//                 context.patchState(state);

//                 this.loaded(context,'datas');
//             });

//     }

//     @Action(SynchronizeAsifDetail)
//     SynchronizeAsifDetail(context: StateContext<AsifDetailStateModel>, action: SynchronizeAsifDetail) {
//         let state = context.getState();
//         state.datas = action.payload;
//         context.patchState(state);
//     }

//     // @Action(LoadAsifDetailSuccess)
//     // loadSuccess(context: StateContext<AsifDetailStateModel>, action: LoadAsifDetailSuccess) {
//     //     let state = context.getState();
  
//     //     state.datas = action.payload;
//     //     // state.filters = new FilterAsifTable();
//     //     // state.filters.selected.idImport = action.payload.selected.idImport;

//     //     context.patchState(state);

//     //     // context.dispatch(new ChangeAsifTableFilter(action.payload));
//     // }

//     @Action(ClearAsifDetail)
//     clear(context: StateContext<AsifDetailStateModel>) {
//         return context.setState(new AsifDetailStateModel());
//     }

//     //====================================
//     //          OperationTypeFamily
//     //====================================
//     @Action(asifDetailChangeOperationTypeFamily)
//     asifDetailChangeOperationTypeFamily(context: StateContext<AsifDetailStateModel>, action: asifDetailChangeOperationTypeFamily) {
//         this.loading(context,'operationTypeFamily');

//         const state = context.getState();
//         state.datas.operationTypeFamily.selected = action.payload;
//         state.datas.operationType = new ComboSimple<ISelect>();
//         context.patchState(state);

//         this._referentialService.operationTypeService.GetSelectList(action.payload.id,EnumSelectType.inconnu)
//             .subscribe(result=> {
//                 let state = context.getState();
//                 state.datas.operationType.list = result;
//                 state.datas.operationType.selected = result[0];
//                 context.patchState(state);

//                 this.loaded(context,'operationTypeFamily');
//             });
//     }

//     // @Action(asifDetailChangeOperationTypeFamilySuccess)
//     // asifDetailChangeOperationTypeFamilySuccess(context: StateContext<AsifDetailStateModel>, action: asifDetailChangeOperationTypeFamilySuccess) {
   

//     // }

//     //====================================
//     //          OperationType
//     //====================================
//     @Action(asifDetailChangeOperationType)
//     asifDetailChangeOperationType(context: StateContext<AsifDetailStateModel>, action: asifDetailChangeOperationType) {
//         this.loading(context,'operationType');
        
//         const state = context.getState();
//         state.datas.operationType.selected = action.payload.operationType;
//         state.datas.operationMethod.selected = action.payload.operationMethod;
//         state.datas.operation = new ComboSimple<ISelect>();
        
//         context.patchState(state);
//         this._referentialService.operationService.GetSelectList(action.payload.operationMethod.id,action.payload.operationType.id,EnumSelectType.inconnu)
//             .subscribe(result => {
//                 let state = context.getState();
//                 state.datas.operation.list = result;
//                 state.datas.operation.selected = result[0];
        
//                 context.patchState(state);

//                 this.loaded(context,'operationType');
//             });
//     }

//     // @Action(asifDetailChangeOperationTypeSuccess)
//     // asifDetailChangeOperationTypeSuccess(context: StateContext<AsifDetailStateModel>, action: asifDetailChangeOperationTypeSuccess) {
//     //     let state = context.getState();
//     //     state.datas.operation.list = action.payload;
//     //     state.datas.operation.selected = action.payload[0];

//     //     context.patchState(state);
//     // }
    
// }
