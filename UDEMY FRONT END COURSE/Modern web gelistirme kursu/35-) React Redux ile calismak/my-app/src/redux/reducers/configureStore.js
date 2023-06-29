
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./index";

const bigstore = configureStore ({
    reducers
})
   

export default bigstore