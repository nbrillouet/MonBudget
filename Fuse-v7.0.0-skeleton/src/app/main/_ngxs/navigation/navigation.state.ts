import { State, Selector, Action, StateContext } from "@ngxs/store";
import { LoadNavigation, LoadNavigationSuccess, AddNavigation } from "./navigation.action";

export class NavigationStateModel {
    navigation: any;
}

let navigation : any[] = null;
@State<NavigationStateModel>({
    name: 'navigation',
    defaults : {
        navigation : null
    }
    // defaults : navigation
})

export class NavigationState {
    constructor() {
        
    }

    @Selector()
    static getNavigation(state: NavigationStateModel) {
        return state.navigation;
    }

    @Action(LoadNavigation)
    loadNavigation(context: StateContext<NavigationStateModel>, action: LoadNavigation) {
        const state = context.getState();

        // this.userService.getUser(action.payload.id)
        //     .subscribe(result=> {
        context.dispatch(new LoadNavigationSuccess(action));
            // })
    }

    @Action(LoadNavigationSuccess)
    loadNavigationSuccess(context: StateContext<NavigationStateModel>, action: LoadNavigationSuccess) {
        let toto= context.getState();
        
        context.patchState({ navigation : action.payload }
            
        );
        
    }


    @Action(AddNavigation)
    addNavigation(context: StateContext<NavigationStateModel>, action: AddNavigation) {

        let result = action.payload;
        context.patchState({ navigation : action.payload }
            // result //action.payload[0]
        );

    }

    
}