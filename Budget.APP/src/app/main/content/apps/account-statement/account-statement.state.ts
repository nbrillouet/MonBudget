// // import { State, Action, StateContext, Selector } from '@ngxs/store';
 
// // import { Customer } from '../customers/models/customer';
// // import { CreateCustomer, DeleteCustomer } from '../actions/customer.actions';
// import { IPageList } from '../../../_models/pagination.model';
// import { IAsGrid } from '../../../_models/account-statement.model';
// import { AccountStatementService } from './account-statement.service';
 
// // export class CustomerStateModel {
// //     readonly customers: Customer[];
// // }
// export class LoadAccountStatementGrid { static readonly type = '[AccountSattementGrid] Load'; constructor(public payload: any) { } }

// @State<IPageList<IAsGrid>>({
//   name: 'account-statement-grid',
//   defaults : { 
//     datas: [],
//     pagination: null,
//     loading:false,
//     loaded:false
//     }
// })
 
// export class AsGridState {
    
//     constructor(private accountStatementService: AccountStatementService){}

//     @Selector()
//     static loadAsGrid(state: IPageList<IAsGrid>) {
//         return state;
//     }

//     @Action(LoadAccountStatementGrid)
//     LoadAccountStatementGrid(context: StateContext<IPageList<IAsGrid>>, action: IPageList<IAsGrid>) {
//         context.patchState({
//             loading: true,
//             loaded: false,
//             datas:[],
//             pagination: null
//         })

//         // this.accountStatementService.get(action.payload.idFlux).subscribe(statuts => {
//         //     console.log('LoadHistoriqueStatut : this.payload', action.payload)
//         //     context.dispatch(new LoadHistoriqueStatutSuccess(statuts))
//         // })
//     }

//     // @Selector()
//     // static getCustomers(state: CustomerStateModel) {
//     //     return state.customers;
//     // }
 
//     // @Action(CreateCustomer)
//     // save(context: StateContext<CustomerStateModel>, action: CreateCustomer) {
//     //     const state = context.getState();
//     //     context.patchState({
//     //         customers: [...state.customers, action.payload]
//     //     });
//     // }
 
//     // @Action(DeleteCustomer)
//     // remove(context: StateContext<CustomerStateModel>, action: DeleteCustomer) {
//     //     const state = context.getState();
//     //     context.patchState({
//     //         customers: state.customers.filter(({ id }) => id !== action.id)
//     //     });
//     // }
// }