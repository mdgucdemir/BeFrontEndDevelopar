
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./index";

const bigStore = configureStore ({
    reducers
})
   

export default bigStore