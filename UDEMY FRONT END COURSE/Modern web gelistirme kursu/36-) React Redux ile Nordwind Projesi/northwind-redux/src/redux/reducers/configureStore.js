// store dur. Actions ve Reducers tutulur

import { createStore } from "redux";
import rootReducer from "./index";

export default function configureStore(){
    return createStore(rootReducer);
}