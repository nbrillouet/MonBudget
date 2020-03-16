import { DetailInfo } from "app/main/_models/generics/detail-info.model";
import { OperationForDetail } from "app/main/_models/referential/operation.model";
import { FilterForDetail } from "app/main/_models/filters/shared/filterDetail.filter";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { ReferentialService } from "app/main/_services/Referential/referential.service";
import { LoadOperationDetail, SynchronizeOperationDetail, ClearOperationDetail } from "./operation-detail.action";
import { LoadOperationDetailFilter } from "./operation-detail-filter/operation-detail-filter.action";
import { Injectable } from "@angular/core";
import { OperationService } from "app/main/_services/Referential/operation.service";

export class OperationDetailStateModel extends DetailInfo<OperationForDetail, FilterForDetail> {
    constructor () {
        super();
        this.filter = new FilterForDetail();
    }
}

let detailInfo = new OperationDetailStateModel();
@State<OperationDetailStateModel>({
    name: 'OperationDetail',
    defaults : detailInfo
})
@Injectable()
export class OperationDetailState extends LoaderState {
    constructor(
        private _operationService: OperationService
    ) 
    {
        super();
        
    }

    //fonction delay (test asynchro)
    async delay(ms: number) {
        await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    }

    @Selector() static get(state: OperationDetailStateModel) { return state;  }
    @Selector() static getFilter(state: OperationDetailStateModel) { return state.filter; }

    @Action(LoadOperationDetail)
    load(context: StateContext<OperationDetailStateModel>, action: LoadOperationDetail) {
        
        this.loading(context,'datas');
        const state = context.getState();

        state.filter = action.payload;
        state.datas = null;

        context.patchState(state);
        
        this._operationService.getForDetail(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');

                //chargement des filtres associés
                context.dispatch(new LoadOperationDetailFilter(state.datas));
            });
    }

    @Action(SynchronizeOperationDetail)
    synchronize(context: StateContext<OperationDetailStateModel>, action: SynchronizeOperationDetail) {
        let state = context.getState();
        context.patchState(state);
    }

    @Action(ClearOperationDetail)
    clear(context: StateContext<OperationDetailStateModel>) {
        return context.setState(new OperationDetailStateModel());
    }
}

// import { OperationForDetail } from "app/main/_models/referential/operation.model";
// import { State, Action, Selector, StateContext } from "@ngxs/store";
// import { OperationService } from "app/main/_services/Referential/operation.service";
// import { LoaderState } from "app/main/_ngxs/_base/loader-state";
// import { Datas } from "app/main/_models/generics/detail-info.model";
// import { Injectable } from "@angular/core";
// import { ClearOperationDetail, LoadOperationDetail } from "./operation-detail.action";

// export class OperationDetailStateModel extends Datas<OperationForDetail> {
//     constructor () {
//         super();
//     }
// }

// let operationDetailStateModel = new OperationDetailStateModel();

// @State<OperationDetailStateModel>({
//     name: 'OperationDetail',
//     defaults : operationDetailStateModel
// })

// @Injectable()
// export class OperationDetailState extends LoaderState {

//     constructor(
//         private _OperationService: OperationService
//         ) {
//             super();
//     }

//     @Selector()
//     static get(state: OperationDetailStateModel) {
//         return state;
//     }

//     @Action(LoadOperationDetail)
//     LoadOperationDetail(context: StateContext<OperationDetailStateModel>, action: LoadOperationDetail) {
//         this.loading(context,'datas');
        
//         const state = context.getState();
//         state.datas = null;
//         context.patchState(state);

//         this._OperationService.getDetail(action.payload)
//             .subscribe(result=> {
//                 let state = context.getState();
//                 state.datas = result;
//                 context.patchState(state);

//                 this.loaded(context,'datas');
//             });

//     }

//     @Action(ClearOperationDetail)
//     ClearOperationDetail(context: StateContext<OperationDetailStateModel>) {
//         return context.setState(new OperationDetailStateModel());
//     }

    
    
// }