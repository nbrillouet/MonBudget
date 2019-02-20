import { IAsGrid } from "../../../_models/account-statement.model";
import { tassign } from "tassign";
import { AS_LOAD, AS_LOADING } from "./action";
import { IPageList } from "../../../_models/pagination.model";
// import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CLEAR_TODOS, LOAD_TODO } from './actions';


export const AS_INITIAL_STATE: IPageList<IAsGrid> =  {
  datas: [],
  pagination: null,
  loaded : false,
  loading: false
}

export function asGridReducer(state: IPageList<IAsGrid> = AS_INITIAL_STATE, action): IPageList<IAsGrid> {
    switch (action.type) {
      case AS_LOADING: return loadingAsGrid(state, action);
      case AS_LOAD: return loadAsGrid(state, action);
    //   case ADD_TODO: return addTodo(state, action);
    //   case TOGGLE_TODO: return toggleTodo(state, action);
    //   case REMOVE_TODO: return removeTodo(state, action);
    //   case CLEAR_TODOS: return clearTodos(state, action);
    }
  
    return state; 
  }

  function loadAsGrid(state, action) {
    console.log('state', state);
    console.log('loadAsGrid-action', action);
    return tassign(state, {
      datas: action.value.datas,
      pagination: action.value.pagination,
      loading: false,
      loaded: true
    });
    // return tassign(state, {
    //     todos: action.tab,
    //     lastUpdate: new Date()
    //   });
  }

  function loadingAsGrid(state, action) {
    console.log('action', action);
    console.log('state', state);
    return tassign(state, {
      datas: state.datas,
      pagination: state.pagination,
      loading: action.value,
      loaded: state.loaded } );
  }