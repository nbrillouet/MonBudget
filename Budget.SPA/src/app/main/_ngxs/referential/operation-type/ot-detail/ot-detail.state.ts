import { DetailInfo } from "app/main/_models/generics/detail-info.model";
import { OtForDetail } from "app/main/_models/referential/operation-type.model";
import { FilterForDetail } from "app/main/_models/filters/shared/filterDetail.filter";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { OtService } from "app/main/_services/Referential/operation-type.service";
import { LoadOtDetail, SynchronizeOtDetail, ClearOtDetail } from "./ot-detail.action";
import { LoadOtDetailFilter } from "./ot-detail-filter/ot-detail-filter.action";


export class OtDetailStateModel extends DetailInfo<OtForDetail, FilterForDetail> {
    constructor () {
        super();
        this.filter = new FilterForDetail();
    }
}

let detailInfo = new OtDetailStateModel();
@State<OtDetailStateModel>({
    name: 'OtDetail',
    defaults : detailInfo
})
@Injectable()
export class OtDetailState extends LoaderState {
    constructor(
        private _otService: OtService
    ) 
    {
        super();
        
    }

    //fonction delay (test asynchro)
    async delay(ms: number) {
        await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    }

    @Selector() static get(state: OtDetailStateModel) { return state;  }
    @Selector() static getFilter(state: OtDetailStateModel) { return state.filter; }

    @Action(LoadOtDetail)
    LoadOtDetail(context: StateContext<OtDetailStateModel>, action: LoadOtDetail) {
        
        this.loading(context,'datas');
        const state = context.getState();

        state.filter = action.payload;
        state.datas = null;

        context.patchState(state);
        
        this._otService.getForDetail(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');

                //chargement des filtres associés
                context.dispatch(new LoadOtDetailFilter(state.datas));
            });
    }

    @Action(SynchronizeOtDetail)
    SynchronizeOtDetail(context: StateContext<OtDetailStateModel>, action: SynchronizeOtDetail) {
        let state = context.getState();
        context.patchState(state);
    }

    @Action(ClearOtDetail)
    ClearOtDetail(context: StateContext<OtDetailStateModel>) {
        return context.setState(new OtDetailStateModel());
    }
}

// import { OtDetail } from "app/main/_models/referential/operation-type.model";
// import { State, Selector, Action, StateContext } from "@ngxs/store";
// import { LoaderState } from "app/main/_ngxs/_base/loader-state";
// import { Datas } from "app/main/_models/generics/detail-info.model";
// import { Injectable } from "@angular/core";
// import { LoadOtDetail, ClearOtDetail } from "./ot-detail.action";
// import { OtService } from "app/main/_services/Referential/operation-type.service";

// export class OtDetailStateModel extends Datas<OtDetail> {
//     constructor () {
//         super();
//     }
// }

// let otDetailStateModel = new OtDetailStateModel();

// @State<OtDetailStateModel>({
//     name: 'OtDetail',
//     defaults : otDetailStateModel
// })

// @Injectable()
// export class OtDetailState extends LoaderState {

//     constructor(
//         private _otService: OtService
//         ) {
//             super();
//     }

//     @Selector()
//     static get(state: OtDetailStateModel) {
//         return state;
//     }

//     @Action(LoadOtDetail)
//     loadOtDetail(context: StateContext<OtDetailStateModel>, action: LoadOtDetail) {
//         this.loading(context,'datas');
        
//         const state = context.getState();
//         state.datas = null;
//         context.patchState(state);

//         this._otService.getOtDetail(action.payload)
//             .subscribe(result=> {
//                 let state = context.getState();
//                 state.datas = result;
//                 context.patchState(state);

//                 this.loaded(context,'datas');
//             });
//     }

//     @Action(ClearOtDetail)
//     clear(context: StateContext<OtDetailStateModel>) {
//         return context.setState(new OtDetailStateModel());
//     }

    
    
// }