import { FilterSelected } from "app/main/_models/generics/filter.info.model";
import { FilterOtTableSelected } from "app/main/_models/filters/operation-type.filter";
import { State, Selector, Action, StateContext, Store } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { LoadOtTable } from "../ot-table.action";
import { UpdatePaginationOtTableFilterSelected, SynchronizeOtTableFilterSelected } from "./ot-table-filter-selected.action";


export class OtTableFilterSelectedStateModel extends FilterSelected<FilterOtTableSelected> {
    constructor () {
        super(FilterOtTableSelected);
    }
}

let otTableFilterSelectedStateModel = new OtTableFilterSelectedStateModel();

@State<OtTableFilterSelectedStateModel>({
    name: 'OtTableFilterSelected',
    defaults : otTableFilterSelectedStateModel
})

@Injectable()
export class OtTableFilterSelectedState extends LoaderState {
    constructor(
        private _store: Store
        ) {
            super();
    }

    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    //   }

    @Selector()
    static get(state: OtTableFilterSelectedStateModel) {
        return state;
    }
       

    @Action(UpdatePaginationOtTableFilterSelected)
    UpdatePaginationOtTableFilterSelected(context: StateContext<OtTableFilterSelectedStateModel>, action: UpdatePaginationOtTableFilterSelected) {
        let state = context.getState();
        state.selected.pagination = action.payload;
        context.patchState(state);
    }

    @Action(SynchronizeOtTableFilterSelected)
    SynchronizeOtTableFilterSelected(context: StateContext<OtTableFilterSelectedStateModel>, action: SynchronizeOtTableFilterSelected) {
        this.loading(context,'filter-selected');
        let state = context.getState();
        state.selected = action.payload;
        context.patchState(state);
        this.loaded(context,'filter-selected');

        this._store.dispatch(new LoadOtTable(action.payload));
    }

}


// import { FilterInfo } from "app/main/_models/generics/filter.info.model";
// import { FilterOtTable } from "app/main/_models/filters/operation-type.filter";
// import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
// import { LoadOtTableFilter, ChangeOtTableFilter, UpdatePaginationOtTableFilter } from "./operation-type-list-filter.action";
// import { LoadOtTableDatas } from "../operation-type-list/operation-type-list.action";
// import { OtService } from "app/main/apps/referential/operations/operation-type/operation-type.service";
// import { LoaderState } from "app/main/_ngxs/_base/loader-state";
// import { Injectable } from "@angular/core";

// export class OtTableFilterStateModel extends FilterInfo<FilterOtTable> {
//     constructor () {
//         super(FilterOtTable);
//     }
// }

// let otTableFilterStateModel = new OtTableFilterStateModel();

// @State<OtTableFilterStateModel>({
//     name: 'OtTableFilter',
//     defaults : otTableFilterStateModel
// })

// @Injectable()
// export class OtTableFilterState extends LoaderState {

//     constructor(
//         private _otService: OtService,
//         private _store: Store
//         ) {
//             super();
//     }

//     @Selector()
//     static get(state: OtTableFilterStateModel) {
 
//         return state;
//     }

//     @Action(LoadOtTableFilter)
//     loadOtfTableFilter(context: StateContext<OtTableFilterStateModel>, action: LoadOtTableFilter) {
//         this.loading(context,'filters');
        
//         const state = context.getState();
//         state.filters = null;
//         context.patchState(state);

//         this._otService.getOtTableFilter(action.payload.selected)
//             .subscribe(result=> {
//                 //conserver le payload
//                 let payload = JSON.parse(JSON.stringify(action.payload.selected));
//                 let state = context.getState();
//                 state.filters = result;
//                 context.patchState(state);
                
//                 //TODO: a controler
//                 context.dispatch(new ChangeOtTableFilter(payload));

//                 this.loaded(context,'filters');
//             });

//     }

//     // @Action(LoadOtTableFilterSuccess)
//     // loadSuccess(context: StateContext<OtTableFilterStateModel>, action: LoadOtTableFilterSuccess) {
        
//     //     //conserver le payload
//     //     let payload = JSON.parse(JSON.stringify(action.payload.selected));

//     //     let state = context.getState();
//     //     state.filters = action.payload;

//     //     context.patchState(state);
        
//     //     context.dispatch(new ChangeOtTableFilter(payload));
        
//     // }

//     @Action(ChangeOtTableFilter)
//     changeFilter(context: StateContext<OtTableFilterStateModel>, action: ChangeOtTableFilter) {
        
//         this._store.dispatch(new LoadOtTableDatas(action.payload));

//      }

//     @Action(UpdatePaginationOtTableFilter)
//     UpdatePaginationOtTableFilter(context: StateContext<OtTableFilterStateModel>, action: UpdatePaginationOtTableFilter) {
//         const state = context.getState();
        
//         state.filters.selected.pagination = action.payload;

//         context.patchState(state);

//     }

// }