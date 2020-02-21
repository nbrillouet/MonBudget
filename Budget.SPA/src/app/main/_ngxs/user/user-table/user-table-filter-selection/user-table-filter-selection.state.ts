import { FilterSelection } from "app/main/_models/generics/filter.info.model";
import { FilterUserTableSelection } from "app/main/_models/filters/user.filter";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";
import { UserService } from "app/main/apps/referential/user/user.service";
import { LoadUserTableFilterSelection } from "./user-table-filter-selection.action";

export class UserTableFilterSelectionStateModel extends FilterSelection<FilterUserTableSelection> {
    constructor () {
        super(FilterUserTableSelection);
    }
}

let userTableFilterSelectionStateModel = new UserTableFilterSelectionStateModel();

@State<UserTableFilterSelectionStateModel>({
    name: 'UserTableFilterSelection',
    defaults : userTableFilterSelectionStateModel
})

@Injectable()
export class UserTableFilterSelectionState extends LoaderState {

    constructor(
        private _userService: UserService
        ) {
            super();
    }

    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    // }

    @Selector()
    static get(state: UserTableFilterSelectionStateModel) {
        return state;
    }

    @Action(LoadUserTableFilterSelection)
    LoadUserTableFilterSelection(context: StateContext<UserTableFilterSelectionStateModel>, action: LoadUserTableFilterSelection) {
        this.loading(context,'filter-selection');
        
        const state = context.getState();
        state.selection = null;
        context.patchState(state);

        this._userService.getUserTableFilter(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.selection = result;
                context.patchState(state);

                this.loaded(context,'filter-selection');
            });

    }

}