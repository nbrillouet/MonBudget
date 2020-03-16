import { DetailInfo } from "app/main/_models/generics/detail-info.model";
import { OtfForDetail } from "app/main/_models/referential/operation-type-family.model";
import { FilterForDetail } from "app/main/_models/filters/shared/filterDetail.filter";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { OtfService } from "app/main/_services/Referential/operation-type-family.service";
import { LoadOtfDetail, SynchronizeOtfDetail, ClearOtfDetail } from "./otf-detail.action";
import { LoadOtfDetailFilter } from "./otf-detail-filter/otf-detail-filter.action";

export class OtfDetailStateModel extends DetailInfo<OtfForDetail, FilterForDetail> {
    constructor () {
        super();
        this.filter = new FilterForDetail();
    }
}

let detailInfo = new OtfDetailStateModel();
@State<OtfDetailStateModel>({
    name: 'OtfDetail',
    defaults : detailInfo
})
@Injectable()
export class OtfDetailState extends LoaderState {
    constructor(
        private _otfService: OtfService
    ) 
    {
        super();
        
    }

    //fonction delay (test asynchro)
    async delay(ms: number) {
        await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    }

    @Selector() static get(state: OtfDetailStateModel) { return state;  }
    @Selector() static getFilter(state: OtfDetailStateModel) { return state.filter; }

    @Action(LoadOtfDetail)
    LoadOtfDetail(context: StateContext<OtfDetailStateModel>, action: LoadOtfDetail) {
        
        this.loading(context,'datas');
        const state = context.getState();

        state.filter = action.payload;
        state.datas = null;

        context.patchState(state);
        
        this._otfService.getForDetail(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');

                //chargement des filtres associés
                context.dispatch(new LoadOtfDetailFilter(state.datas));
            });
    }

    @Action(SynchronizeOtfDetail)
    SynchronizeOtfDetail(context: StateContext<OtfDetailStateModel>, action: SynchronizeOtfDetail) {
        let state = context.getState();
        context.patchState(state);
    }

    @Action(ClearOtfDetail)
    ClearOtfDetail(context: StateContext<OtfDetailStateModel>) {
        return context.setState(new OtfDetailStateModel());
    }
}


// import { OtfDetail } from "app/main/_models/referential/operation-type-family.model";
// import { State, Selector, Action, StateContext } from "@ngxs/store";
// import { LoaderState } from "app/main/_ngxs/_base/loader-state";
// import { Datas } from "app/main/_models/generics/detail-info.model";
// import { Injectable } from "@angular/core";
// import { LoadOtfDetail, ClearOtfDetail } from "./otf-detail.action";
// import { OtfService } from "app/main/_services/Referential/operation-type-family.service";

// export class OtfDetailStateModel extends Datas<OtfDetail> {
//     constructor () {
//         super();
//     }
// }

// let otfDetailStateModel = new OtfDetailStateModel();

// @State<OtfDetailStateModel>({
//     name: 'OtfDetail',
//     defaults : otfDetailStateModel
// })

// @Injectable()
// export class OtfDetailState extends LoaderState {

//     constructor(
//         private _otfService: OtfService
//         ) {
//             super();
//     }

//     @Selector()
//     static get(state: OtfDetailStateModel) {
    
//         return state;
//     }

//     @Action(LoadOtfDetail)
//     loadOtfDetail(context: StateContext<OtfDetailStateModel>, action: LoadOtfDetail) {
//         this.loading(context,'datas');
        
//         const state = context.getState();
//         state.datas = null;
//         context.patchState(state);

//         this._otfService.getOtfDetail(action.payload)
//             .subscribe(result=> {
//                 let state = context.getState();
//                 state.datas = result;
//                 context.patchState(state);

//                 this.loaded(context,'datas');
//             });
//     }

//     @Action(ClearOtfDetail)
//     clear(context: StateContext<OtfDetailStateModel>) {
//         return context.setState(new OtfDetailStateModel());
//     }

// }