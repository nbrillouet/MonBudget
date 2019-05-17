import { FilterInfo } from "app/main/_models/generics/filter.info.model";
import { FilterUserTable, FilterUserTableSelected } from "app/main/_models/filters/user.filter";
// import { State, Store, Selector, Action, StateContext } from "app/main/_ngxs/user/user-list-filter/node_modules/@ngxs/store";
import { UserService } from "app/main/apps/referential/user/user.service";
import { LoadUserTableFilter, LoadUserTableFilterSuccess, ChangeUserTableFilter, UpdatePaginationUserTableFilter } from "./user-list-filter.action";
import { LoadUserTableDatas } from "../user-list/user-list.action";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";


export class UserTableFilterStateModel extends FilterInfo<FilterUserTable> {
    constructor () {
        super(FilterUserTable);
    }
}

let userTableFilterStateModel = new UserTableFilterStateModel();

@State<UserTableFilterStateModel>({
    name: 'UserTableFilter',
    defaults : userTableFilterStateModel
})

export class UserTableFilterState {
    reloadFilters: boolean = true;
    hasChangedState: boolean = true;

    constructor(
        private _userService: UserService,
        private _store: Store
        ) {
            
    }

    @Selector()
    static get(state: UserTableFilterStateModel) {
 
        return state;
    }

    @Action(LoadUserTableFilter)
    loadUserTableFilter(context: StateContext<UserTableFilterStateModel>, action: LoadUserTableFilter) {
        const state = context.getState();
        
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;
        state.filters = null;
        context.patchState(state);
        this._userService.getUserTableFilter(action.payload.selected)
            .subscribe(result=> {

                context.dispatch(new LoadUserTableFilterSuccess(result));
            });

    }

    @Action(LoadUserTableFilterSuccess)
    loadSuccess(context: StateContext<UserTableFilterStateModel>, action: LoadUserTableFilterSuccess) {
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.filters = new FilterUserTable();
        // state.filters.selected.idImport = action.payload.selected.idImport;

        context.patchState(state);

        context.dispatch(new ChangeUserTableFilter(action.payload));
        
    }

    @Action(ChangeUserTableFilter)
    changeFilter(context: StateContext<UserTableFilterStateModel>, action: ChangeUserTableFilter) {
        const state = context.getState();

        
        if(this.ReloadFilters(state.filters,action.payload)) {
            context.dispatch(new LoadUserTableFilter(action.payload));
        }
        else {
            if(this.HasChangedState(state.filters.selected,action.payload.selected)) {
                state.filters = action.payload;
                context.patchState(state);

                this._store.dispatch(new LoadUserTableDatas(state.filters.selected));
            }
        }
     }

    @Action(UpdatePaginationUserTableFilter)
    UpdatePaginationUserTableFilter(context: StateContext<UserTableFilterStateModel>, action: UpdatePaginationUserTableFilter) {
        const state = context.getState();

        state.filters.selected.pagination = action.payload;
        context.patchState(state);
    }

    HasChangedState( state: FilterUserTableSelected, payload : FilterUserTableSelected ) {
        if (this.hasChangedState)
        {
            this.hasChangedState = false;
            return true;
        }
        if(payload.keyword == null ) {
            return false;
        }
        if( state.keyword==null && payload.keyword!=null ) {
            return true;
        };
        if(state.keyword!=payload.keyword) {
            return true;
        }
        
    }

    ReloadFilters(state: FilterUserTable, payload:FilterUserTable ) {
        if(this.reloadFilters)
        {
            this.reloadFilters=false;
            return true;
        }

        return false;
    }
}