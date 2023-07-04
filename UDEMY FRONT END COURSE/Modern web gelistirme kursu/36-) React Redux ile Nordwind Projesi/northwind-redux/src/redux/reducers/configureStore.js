// store dur. Actions ve Reducers tutulur

import { applyMiddleware, createStore } from "redux";
import rootReducer from "./index";
import thunk from "redux-thunk";

export default function configureStore(){
    return createStore(rootReducer,applyMiddleware(thunk));
}