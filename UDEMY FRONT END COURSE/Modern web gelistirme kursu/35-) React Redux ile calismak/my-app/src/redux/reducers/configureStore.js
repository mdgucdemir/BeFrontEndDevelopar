
import { createStore } from "@reduxjs/toolkit";
import reducers from "./index";

const configureStore = createStore (reducers)
   

export default configureStore