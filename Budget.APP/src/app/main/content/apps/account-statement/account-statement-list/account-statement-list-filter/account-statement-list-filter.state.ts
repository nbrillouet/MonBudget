
// import { State, Action, StateContext, Selector } from '@ngxs/store';
// import { FilterAccountStatement, loader } from '../../../../../_models/Filters/FilterAccountStatement';
// import { SetFilter } from '../../account-statement.action';
// import { SetFilterSuccess } from './account-statement-list-filter.action';

// @State<loader<FilterAccountStatement>>({
//     name: 'FilterAccountStatement',
//     defaults: {
//         loading: false,
//         loaded: false,
//         filter: null
//     }
// })

// export class FilterAccountStatementState {
//     @Selector() static filter(state: loader<FilterAccountStatement>) { return state.filter }

//     @Action(SetFilter)
//     SetFilter(context: StateContext<loader<FilterAccountStatement>>,action:loader<FilterAccountStatement>){
//         context.patchState({
//             loading:true,
//             loaded:false,
//             filter : action.filter
//         })
//         context.dispatch(new SetFilterSuccess(action.filter));

//     }

//     @Action(SetFilterSuccess)
//     SetFilterSuccess(context: StateContext<loader<FilterAccountStatement>>, action: loader<FilterAccountStatement>) {
//         context.patchState({
//             filter: action.filter,
//             loading: false,
//             loaded: true
//         })
//     }

// }

