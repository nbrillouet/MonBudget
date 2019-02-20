import { tassign } from 'tassign'; 
import { combineReducers } from 'redux'; 
// import { ITaskingState, TASKING_INITIAL_STATE, taskingReducer } from './tasking/store';
import { IAsGrid } from './main/_models/account-statement.model';
import { AS_INITIAL_STATE, asGridReducer } from './main/content/apps/account-statement/store';
import { IPageList } from './main/_models/pagination.model';

export interface IAppState {
//   tasking: ITaskingState;
    asGrid: IPageList<IAsGrid>;
}

export const INITIAL_STATE: IAppState = { 
//   tasking: TASKING_INITIAL_STATE,
    asGrid: AS_INITIAL_STATE
}

export const rootReducer = combineReducers({
//   tasking: taskingReducer,
    asGrid: asGridReducer
});