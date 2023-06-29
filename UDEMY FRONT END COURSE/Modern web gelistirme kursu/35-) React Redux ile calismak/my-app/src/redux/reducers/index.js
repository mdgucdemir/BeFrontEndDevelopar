// reducer larimiz artacak ve bunlari toplamamiz gerekiyor. Genellikle [reducers] dosyasinin icerisinde [index.js] icerisinde toplariz

import { combineReducers } from "redux"; 
import counterReducer from "./counterReducer";



const reducers = combineReducers ({
    counterReducer
});

export default reducers;