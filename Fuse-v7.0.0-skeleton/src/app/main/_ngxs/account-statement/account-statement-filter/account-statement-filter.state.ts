// import { AsFilter } from "app/main/_models/Filters/FilterAccountStatement";
// import { State, Selector, Action, StateContext } from "@ngxs/store";
// import { ChangeAsFilter, ChangeAsFilterPagination } from "./account-statement-filter.action";



// export class AsFilterStateModel extends AsFilter {

// }

// let filter = new AsFilter();

// @State<AsFilterStateModel>({
//     name: 'asFilter',
//     defaults : filter 
// })

// export class AsFilterState {
    // constructor() {
        
    // }

    // @Selector()
    // static get(state: AsFilterStateModel) {
    //     return state;
    // }

    // @Action(ChangeAsFilter)
    // changeFilter(context: StateContext<AsFilterStateModel>, action: ChangeAsFilter) {
    //     const state = context.getState();

    //     // state.loadingInfo.loaded=false;
    //     // state.loadingInfo.loading=true;
    //     // state.datas = null;
    //     // state.pagination = new Pagination();;
    //     context.patchState(action.payload);
    // }

    // @Action(ChangeAsFilterPagination)
    // changePagination(context: StateContext<AsFilterStateModel>, action: ChangeAsFilterPagination) {
    //     const state = context.getState();
    //     state.pagination = action.pagination;
    //     // state.loadingInfo.loaded=false;
    //     // state.loadingInfo.loading=true;
    //     // state.datas = null;
    //     // state.pagination = new Pagination();;
    //     context.patchState(state);



    // }

// }