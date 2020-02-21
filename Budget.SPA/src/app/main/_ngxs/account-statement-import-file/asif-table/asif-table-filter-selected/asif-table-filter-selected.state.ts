import { FilterSelected } from "app/main/_models/generics/filter.info.model";
import { FilterAsifTableSelected } from "app/main/_models/filters/account-statement-import-file.filter";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { UpdatePaginationAsifTableFilterSelected, SynchronizeAsifTableFilterSelected, LoadAsifTableFilterSelected } from "./asif-table-filter-selected.action";
import { LoadAsifTable } from "../asif-table.action";
import { AsiService } from "app/main/apps/account-statement-import/asi.service";

export class AsifTableFilterSelectedStateModel extends FilterSelected<FilterAsifTableSelected> {
    constructor () {
        super(FilterAsifTableSelected);
    }
}

let asifTableFilterSelectedStateModel = new AsifTableFilterSelectedStateModel();

@State<AsifTableFilterSelectedStateModel>({
    name: 'AsifTableFilterSelected',
    defaults : asifTableFilterSelectedStateModel
})

@Injectable()
export class AsifTableFilterSelectedState extends LoaderState {
    constructor(
        private _store: Store,
        private _asiService: AsiService
        ) {
            super();
    }

    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    //   }

    @Selector()
    static get(state: AsifTableFilterSelectedStateModel) {
        return state;
    }
       

    @Action(UpdatePaginationAsifTableFilterSelected)
    UpdatePaginationAsifTableFilterSelected(context: StateContext<AsifTableFilterSelectedStateModel>, action: UpdatePaginationAsifTableFilterSelected) {
        let state = context.getState();
        state.selected.pagination = action.payload;
        context.patchState(state);
    }

    @Action(SynchronizeAsifTableFilterSelected)
    SynchronizeAsifTableFilterSelected(context: StateContext<AsifTableFilterSelectedStateModel>, action: SynchronizeAsifTableFilterSelected) {
        this.loading(context,'filter-selected');
        let state = context.getState();
        state.selected = action.payload;
        context.patchState(state);
        this.loaded(context,'filter-selected');

        this._store.dispatch(new LoadAsifTable(action.payload));
    }

    @Action(LoadAsifTableFilterSelected)
    LoadAsifTableFilterSelected(context: StateContext<AsifTableFilterSelectedStateModel>, action: LoadAsifTableFilterSelected) {
        this.loading(context,'filter-selected');
        let state = context.getState();
        state.selected = action.payload;
        context.patchState(state);
  
        //chargement des données complémentaire provenant de asi
        this._asiService.getById(action.payload.idImport)
            .subscribe(result=> {
                let state = context.getState();
                state.selected.asiBankAgencyLabel = result.bankAgency.label;
                state.selected.asiDateImport = result.dateImport;
                context.patchState(state);

                this.loaded(context,'filter-selected');
            });
    }
    
}


// import { FilterInfo } from "app/main/_models/generics/filter.info.model";
// import { FilterAsifTable, FilterAsifTableSelected } from "app/main/_models/filters/account-statement-import-file.filter";
// import { AsifService } from "app/main/apps/account-statement-import-file/asif.service";
// import { LoadAsifTableFilter, ChangeAsifTableFilter, UpdatePaginationAsifTableFilter } from "./asif-list-filter.action";
// import { LoadAsifTableDatas } from "../asif-list/asif-list.action";
// import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
// import { LoaderState } from "../../_base/loader-state";
// import { Injectable } from "@angular/core";

// export class AsifTableFilterStateModel extends FilterInfo<FilterAsifTable> {
//     constructor () {
//         super(FilterAsifTable);
//     }
// }

// let asifTableFilterStateModel = new AsifTableFilterStateModel();

// @State<AsifTableFilterStateModel>({
//     name: 'AsifTableFilter',
//     defaults : asifTableFilterStateModel
// })

// @Injectable()
// export class AsifTableFilterState extends LoaderState{

//     constructor(
//         private _asifService: AsifService,
//         private _store: Store
//         ) {
//             super();
//     }

//     async delay(ms: number) {
//         await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
//       }

//     @Selector()
//     static get(state: AsifTableFilterStateModel) {
 
//         return state;
//     }

//     // @Selector()
//     // static getFilter(state: PlanTableComboFilterStateModel) {
//     //     return state.filter;
//     // }

//     @Action(LoadAsifTableFilter)
//     loadAsifTableFilter(context: StateContext<AsifTableFilterStateModel>, action: LoadAsifTableFilter) {
//         this.loading(context,'filters');
        
//         const state = context.getState();
//         state.filters = null;
//         context.patchState(state);

//         this._asifService.getAsifTableFilter(action.payload.selected)
//             .subscribe(result=> {
//                 //conserver le payload
//                 let payload = JSON.parse(JSON.stringify(action.payload.selected));

//                 let state = context.getState();
//                 state.filters = result;
//                 context.patchState(state);
                
//                 context.dispatch(new ChangeAsifTableFilter(payload));

//                 this.loaded(context,'filters');
//             });

//     }

//     // @Action(LoadAsifTableFilterSuccess)
//     // loadSuccess(context: StateContext<AsifTableFilterStateModel>, action: LoadAsifTableFilterSuccess) {
        
//     //     //conserver le payload
//     //     let payload = JSON.parse(JSON.stringify(action.payload.selected));

//     //     let state = context.getState();
//     //     state.filters = action.payload;
//     //     //state.filters.selected.idImport = action.payload.selected.idImport;
//     //     context.patchState(state);
        
//     //     context.dispatch(new ChangeAsifTableFilter(payload));
        
//     // }
//         // this.delay(3000).then(any=>{
//     @Action(ChangeAsifTableFilter)
//     changeFilter(context: StateContext<AsifTableFilterStateModel>, action: ChangeAsifTableFilter) {

//         // const state = context.getState();

        
        
//         // context.patchState(state);
        

//         this._store.dispatch(new LoadAsifTableDatas(action.payload));


//         // if(this.ReloadFilters(state.filters,action.payload)) {
            
//         //     context.dispatch(new LoadAsifTableFilter(action.payload));
//         // }
//         // else {
//         //     if(this.HasChangedState(state.filters.selected,action.payload.selected)) {
//         //         state.filters = action.payload;
//         //         context.patchState(state);
                
//         //             this._store.dispatch(new LoadAsifTableDatas(state.filters.selected));
               
//         //     }
            
//         //         context.patchState(state);
            
//         // }

//      }

//     @Action(UpdatePaginationAsifTableFilter)
//     UpdatePaginationAsifTableFilter(context: StateContext<AsifTableFilterStateModel>, action: UpdatePaginationAsifTableFilter) {
//         const state = context.getState();
        
//         state.filters.selected.pagination = action.payload;
//         context.patchState(state);
//     }    
// }
