import {combineReducers, createStore} from "redux";
import calcReducer from "./CalcReducer";

const reducers = combineReducers(
  {
    calc: calcReducer,
  }
)

const store = createStore( reducers )
window.store = store
export default store;