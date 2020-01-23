// import { State, Selector, Action, StateContext } from "app/main/_ngxs/navigation/node_modules/@ngxs/store";
import { LoadNavigation, AddNavigation } from "./navigation.action";
import { State, Selector, Action, StateContext } from "@ngxs/store";

export class NavigationStateModel {
    navigation: any;
}

let navigation : any[] = null;
@State<NavigationStateModel>({
    name: 'navigation',
    defaults : {
        navigation : null
    }
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

        context.patchState({ navigation : action.payload });
        // this.userService.getUser(action.payload.id)
        //     .subscribe(result=> {
        // context.dispatch(new LoadNavigationSuccess(action));
            // })
    }

    // @Action(LoadNavigationSuccess)
    // loadNavigationSuccess(context: StateContext<NavigationStateModel>, action: LoadNavigationSuccess) {
    //     let toto= context.getState();
        
    //     context.patchState({ navigation : action.payload }
            
    //     );
        
    // }


    @Action(AddNavigation)
    addNavigation(context: StateContext<NavigationStateModel>, action: AddNavigation) {

        let result = action.payload;
        context.patchState({ navigation : action.payload });
            // result //action.payload[0]
        // );

    }

    
}