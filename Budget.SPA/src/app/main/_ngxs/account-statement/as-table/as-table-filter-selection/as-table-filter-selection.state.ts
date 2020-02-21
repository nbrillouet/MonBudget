import { FilterSelection } from "app/main/_models/generics/filter.info.model";
import { AsService } from "app/main/apps/account-statement/account-statement.service";
import { Store, State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { LoadAsTableFilterSelection } from "./as-table-filter-selection.action";
import { FilterAsTableSelection } from "app/main/_models/filters/account-statement.filter";

export class AsTableFilterSelectionStateModel extends FilterSelection<FilterAsTableSelection> {
    constructor () {
        super(FilterAsTableSelection);
    }
}

let asTableFilterSelectionStateModel = new AsTableFilterSelectionStateModel();

@State<AsTableFilterSelectionStateModel>({
    name: 'AsTableFilterSelection',
    defaults : asTableFilterSelectionStateModel
})

@Injectable()
export class AsTableFilterSelectionState extends LoaderState {

    constructor(
        private _asService: AsService
        // private _store: Store
        ) {
            super();
    }

    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    // }

    @Selector()
    static get(state: AsTableFilterSelectionStateModel) {
        return state;
    }

    // @Selector()
    // static getFilter(state: PlanTableComboFilterStateModel) {
    //     return state.filter;
    // }

    @Action(LoadAsTableFilterSelection)
    LoadAsTableFilterSelection(context: StateContext<AsTableFilterSelectionStateModel>, action: LoadAsTableFilterSelection) {
        this.loading(context,'filter-selection');
        
        const state = context.getState();
        state.selection = null;
        context.patchState(state);

        this._asService.getAsTableFilter(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.selection = result;
                context.patchState(state);

                this.loaded(context,'filter-selection');
            });

    }

    // @Action(ChangeAsTableFilter)
    // changeFilter(context: StateContext<AsTableFilterStateModel>, action: ChangeAsTableFilter) {
    //     //rechargement des select de filtre
    //     // this.loading(context,'filters');
    //     this.loading(context,'filters');

    //     const state = context.getState();
    //     state.filters.selected = action.payload; //!state.filters ? new FilterAsTable() : state.filters;
    //     context.patchState(state);

    //     // state.filters = null;
    
    //     context.patchState(state);
    //     this._asService.getAsTableFilter(action.payload)
    //         .subscribe(result=> {
    //             let state = context.getState();
    //             state.filters.operation = result.operation;
    //             state.filters.operationMethod = result.operationMethod;
    //             state.filters.operationType = result.operationType;
    //             state.filters.operationTypeFamily = result.operationTypeFamily;
    //             context.patchState(state);

    //             //rechargement de la table
    //             this._store.dispatch(new LoadAsTableDatas(action.payload));

    //             this.loaded(context,'filters');
    //             // this.loaded(context,'filters');
    //             // context.dispatch(new LoadAsTableFilterSuccess(result));
    //         });

        
    // }

    // @Action(UpdatePaginationAsTableFilter)
    // UpdatePaginationAsTableFilter(context: StateContext<AsTableFilterStateModel>, action: UpdatePaginationAsTableFilter) {
    //     const state = context.getState();
    //     state.filters.selected.pagination = action.payload;
    //     context.patchState(state);
    // }

    // @Action(SynchronizeAsTableFilter)
    // SynchronizeAsTableFilter(context: StateContext<AsTableFilterStateModel>, action: SynchronizeAsTableFilter) {
    //     this.loading(context,'filters');
    //     const state = context.getState();
    //     state.filters.selected = action.payload;
    //     context.patchState(state);
    //     this.loaded(context,'filters');
    // }

}





// import { FilterInfo } from "app/main/_models/generics/filter.info.model";
// import { FilterAsTable } from "app/main/_models/filters/account-statement.filter";
// import { AsService } from "app/main/apps/account-statement/account-statement.service";
// import { LoadAsTableFilter, ChangeAsTableFilter, UpdatePaginationAsTableFilter, SynchronizeAsTableFilter } from "./account-statement-filter.action";
// import { Store, State, Selector, Action, StateContext } from "@ngxs/store";
// import { Injectable } from "@angular/core";
// import { LoaderState } from "app/main/_ngxs/_base/loader-state";

// export class AsTableFilterStateModel extends FilterInfo<FilterAsTable> {
//     constructor () {
//         super(FilterAsTable);
//     }
// }

// let asTableFilterStateModel = new AsTableFilterStateModel();

// @State<AsTableFilterStateModel>({
//     name: 'AsTableFilter',
//     defaults : asTableFilterStateModel
// })

// @Injectable()
// export class AsTableFilterState extends LoaderState {

//     constructor(
//         private _asService: AsService,
//         private _store: Store
//         ) {
//             super();
//     }

//     async delay(ms: number) {
//         await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
//       }

//     @Selector()
//     static get(state: AsTableFilterStateModel) {
 
//         return state;
//     }

//     // @Selector()
//     // static getFilter(state: PlanTableComboFilterStateModel) {
//     //     return state.filter;
//     // }

//     @Action(LoadAsTableFilter)
//     loadAsTableFilter(context: StateContext<AsTableFilterStateModel>, action: LoadAsTableFilter) {
//         this.loading(context,'filters');
        
//         const state = context.getState();
//         state.filters = new FilterAsTable(); // null;
    
//         context.patchState(state);

//         context.dispatch(new ChangeAsTableFilter(state.filters.selected));
//         // this._asService.getAsTableFilter(action.payload)
//         //     .subscribe(result=> {
 
//         //         //conserver le payload
//         //         let payload = JSON.parse(JSON.stringify(result.selected));
//         //         let state = context.getState();
//         //         state.filters = result; // action.payload;
//         //         context.patchState(state);

//         //         context.dispatch(new ChangeAsTableFilter(payload));

//         //     });
//     }

//     // @Action(LoadAsTableFilterSuccess)
//     // loadSuccess(context: StateContext<AsTableFilterStateModel>, action: LoadAsTableFilterSuccess) {
        
//     //     // //conserver le payload
//     //     // let payload = JSON.parse(JSON.stringify(action.payload.selected));

//     //     // let state = context.getState();
//     //     // state.filters = action.payload;

//     //     // context.patchState(state);
        
//     //     // context.dispatch(new ChangeAsTableFilter(payload));
//     // }
//         // this.delay(3000).then(any=>{
//     @Action(ChangeAsTableFilter)
//     changeFilter(context: StateContext<AsTableFilterStateModel>, action: ChangeAsTableFilter) {
//         //rechargement des select de filtre
//         // this.loading(context,'filters');
//         this.loading(context,'filters');

//         const state = context.getState();
//         state.filters.selected = action.payload; //!state.filters ? new FilterAsTable() : state.filters;
//         context.patchState(state);

//         // state.filters = null;
    
//         context.patchState(state);
//         this._asService.getAsTableFilter(action.payload)
//             .subscribe(result=> {
//                 let state = context.getState();
//                 state.filters.operation = result.operation;
//                 state.filters.operationMethod = result.operationMethod;
//                 state.filters.operationType = result.operationType;
//                 state.filters.operationTypeFamily = result.operationTypeFamily;
//                 context.patchState(state);

//                 //rechargement de la table
//                 this._store.dispatch(new LoadAsTableDatas(action.payload));

//                 this.loaded(context,'filters');
//                 // this.loaded(context,'filters');
//                 // context.dispatch(new LoadAsTableFilterSuccess(result));
//             });

        
//     }

//     @Action(UpdatePaginationAsTableFilter)
//     UpdatePaginationAsTableFilter(context: StateContext<AsTableFilterStateModel>, action: UpdatePaginationAsTableFilter) {
//         const state = context.getState();
//         state.filters.selected.pagination = action.payload;
//         context.patchState(state);
//     }

//     @Action(SynchronizeAsTableFilter)
//     SynchronizeAsTableFilter(context: StateContext<AsTableFilterStateModel>, action: SynchronizeAsTableFilter) {
//         this.loading(context,'filters');
//         const state = context.getState();
//         state.filters.selected = action.payload;
//         context.patchState(state);
//         this.loaded(context,'filters');
//     }

// }