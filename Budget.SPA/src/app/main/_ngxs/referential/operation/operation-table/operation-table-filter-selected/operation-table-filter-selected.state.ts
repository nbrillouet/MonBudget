import { FilterSelected } from "app/main/_models/generics/filter.info.model";
import { FilterOperationTableSelected } from "app/main/_models/filters/operation.filter";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { UpdatePaginationOperationTableFilterSelected, SynchronizeOperationTableFilterSelected } from "./operation-table-filter-selected.action";
import { LoadOperationTable } from "../operation-table.action";

export class OperationTableFilterSelectedStateModel extends FilterSelected<FilterOperationTableSelected> {
    constructor () {
        super(FilterOperationTableSelected);
    }
}

let operationTableFilterSelectedStateModel = new OperationTableFilterSelectedStateModel();

@State<OperationTableFilterSelectedStateModel>({
    name: 'OperationTableFilterSelected',
    defaults : operationTableFilterSelectedStateModel
})

@Injectable()
export class OperationTableFilterSelectedState extends LoaderState {
    constructor(
        private _store: Store
        ) {
            super();
    }

    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    //   }

    @Selector()
    static get(state: OperationTableFilterSelectedStateModel) {
        return state;
    }
       

    @Action(UpdatePaginationOperationTableFilterSelected)
    UpdatePaginationOperationTableFilterSelected(context: StateContext<OperationTableFilterSelectedStateModel>, action: UpdatePaginationOperationTableFilterSelected) {
        this.loading(context,'filter-selected');

        let state = context.getState();
        state.selected.pagination = action.payload;
        context.patchState(state);

        this.loaded(context,'filter-selected');
    }

    @Action(SynchronizeOperationTableFilterSelected)
    SynchronizeOperationTableFilterSelected(context: StateContext<OperationTableFilterSelectedStateModel>, action: SynchronizeOperationTableFilterSelected) {
        this.loading(context,'filter-selected');
        
        let state = context.getState();
        state.selected = action.payload;
        context.patchState(state);

        this.loaded(context,'filter-selected');

        this._store.dispatch(new LoadOperationTable(action.payload));
    }

}


// import { FilterInfo } from "app/main/_models/generics/filter.info.model";
// import { FilterOperationTable } from "app/main/_models/filters/operation.filter";
// import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
// import { OperationService } from "app/main/_services/Referential/operation.service";
// import { LoadOperationTableFilter, ChangeOperationTableFilter, UpdatePaginationOperationTableFilter } from "./operation-list-filter.action";
// import { LoadOperationTableDatas } from "../operation-list/operation-list.action";
// import { LoaderState } from "app/main/_ngxs/_base/loader-state";
// import { Injectable } from "@angular/core";

// export class OperationTableFilterStateModel extends FilterInfo<FilterOperationTable> {
//     constructor () {
//         super(FilterOperationTable);
//     }
// }

// let operationTableFilterStateModel = new OperationTableFilterStateModel();

// @State<OperationTableFilterStateModel>({
//     name: 'OperationTableFilter',
//     defaults : operationTableFilterStateModel
// })

// @Injectable()
// export class OperationTableFilterState extends LoaderState {

//     constructor(
//         private _operationService: OperationService,
//         private _store: Store
//         ) {
//             super();
//     }

//     @Selector()
//     static get(state: OperationTableFilterStateModel) {
 
//         return state;
//     }

//     @Action(LoadOperationTableFilter)
//     loadOperationfTableFilter(context: StateContext<OperationTableFilterStateModel>, action: LoadOperationTableFilter) {
//         this.loading(context,'filters');
        
//         const state = context.getState();
//         state.filters = null;
//         context.patchState(state);

//         this._operationService.getTableFilter(action.payload.selected)
//             .subscribe(result=> {
//                 //conserver le payload
//                 let payload = JSON.parse(JSON.stringify(action.payload.selected));
//                 let state = context.getState();
//                 state.filters = result;
//                 context.patchState(state);
//                 //TODO: a controler
//                 context.dispatch(new ChangeOperationTableFilter(payload));

//                 this.loaded(context,'filters');
//             });
//     }

//     // @Action(LoadOperationTableFilterSuccess)
//     // loadSuccess(context: StateContext<OperationTableFilterStateModel>, action: LoadOperationTableFilterSuccess) {
        
//     //     //conserver le payload
//     //     let payload = JSON.parse(JSON.stringify(action.payload.selected));

//     //     let state = context.getState();
//     //     state.filters = action.payload;

//     //     context.patchState(state);
        
//     //     context.dispatch(new ChangeOperationTableFilter(payload));
        
//     // }

//     @Action(ChangeOperationTableFilter)
//     changeFilter(context: StateContext<OperationTableFilterStateModel>, action: ChangeOperationTableFilter) {
        
//         this._store.dispatch(new LoadOperationTableDatas(action.payload));

//      }

//     @Action(UpdatePaginationOperationTableFilter)
//     UpdatePaginationOperationTableFilter(context: StateContext<OperationTableFilterStateModel>, action: UpdatePaginationOperationTableFilter) {
//         const state = context.getState();
        
//         state.filters.selected.pagination = action.payload;

//         context.patchState(state);

//     }
// }