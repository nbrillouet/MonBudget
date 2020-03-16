import { Datas } from "app/main/_models/generics/detail-info.model";
import { OtTable } from "app/main/_models/referential/operation-type.model";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { LoadOtTable, ClearOtTable } from "./ot-table.action";
import { UpdatePaginationOtTableFilterSelected } from "./ot-table-filter-selected/ot-table-filter-selected.action";
import { OtService } from "app/main/_services/Referential/operation-type.service";

export class OtTableStateModel extends Datas<OtTable[]> {
    constructor () {
        super();
    }
}

let tableInfo = new OtTableStateModel();
@State<OtTableStateModel>({
    name: 'OtTable',
    defaults : tableInfo
})

@Injectable()
export class OtTableState extends LoaderState {
    constructor(
        private _otService: OtService,
        private _store: Store) {
            super();
    }

    @Selector()
    static get(state: OtTableStateModel) {
        return state;
    }

    @Action(LoadOtTable)
    LoadOtTable(context: StateContext<OtTableStateModel>, action: LoadOtTable) {
        this.loading(context,'datas');
        
        const state = context.getState();
        state.datas = null;
        context.patchState(state);

        this._otService.getOtTable(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result.datas;
                context.patchState(state);
                //TODO a controler
                this._store.dispatch(new UpdatePaginationOtTableFilterSelected(result.pagination));

                this.loaded(context,'datas');
            });
    }

    @Action(ClearOtTable)
    ClearOtTable(context: StateContext<OtTableStateModel>) {
        return context.setState(new OtTableStateModel());
    }
}

// import { OtTable } from "app/main/_models/referential/operation-type.model";
// import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
// import { LoadOtTableDatas, ClearOtTableDatas } from "./operation-type-list.action";
// import { UpdatePaginationOtTableFilter } from "../operation-type-list-filter/operation-type-list-filter.action";
// import { OtService } from "app/main/apps/referential/operations/operation-type/operation-type.service";
// import { LoaderState } from "app/main/_ngxs/_base/loader-state";
// import { Datas } from "app/main/_models/generics/detail-info.model";
// import { Injectable } from "@angular/core";

// export class OtTableStateModel extends Datas<OtTable[]> {
//     constructor () {
//         super();
//     }
// }

// let tableInfo = new OtTableStateModel();
// @State<OtTableStateModel>({
//     name: 'OtTable',
//     defaults : tableInfo
// })

// @Injectable()
// export class OtTableState extends LoaderState {
//     constructor(
//         private _otService: OtService,
//         private _store: Store
//         ) {
//             super();
//     }

//     @Selector()
//     static get(state: OtTableStateModel) {
//         return state;
//     }

//     @Action(LoadOtTableDatas)
//     loadGrid(context: StateContext<OtTableStateModel>, action: LoadOtTableDatas) {
//         this.loading(context,'datas');
        
//         const state = context.getState();
//         state.datas = null;
//         context.patchState(state);
        
//         this._otService.getOtTable(action.payload)
//             .subscribe(result=> {
//                 let state = context.getState();
//                 state.datas = result;
//                 context.patchState(state);
//                 //TODO: a controler
//                 this._store.dispatch(new UpdatePaginationOtTableFilter(action.payload.pagination));
            
//                 this.loaded(context,'datas');
//             });
//     }

//     // @Action(LoadOtTableDatasSuccess)
//     // loadSuccess(context: StateContext<OtTableStateModel>, action: LoadOtTableDatasSuccess) {
//     //     let state = context.getState();
//     //     state.datas = action.payload.datas;

//     //     context.patchState(state);


//     //     this._store.dispatch(new UpdatePaginationOtTableFilter(action.payload.pagination));
//     // }

//     @Action(ClearOtTableDatas)
//     clear(context: StateContext<OtTableStateModel>) {
//         return context.setState(new OtTableStateModel());
//     }



// }