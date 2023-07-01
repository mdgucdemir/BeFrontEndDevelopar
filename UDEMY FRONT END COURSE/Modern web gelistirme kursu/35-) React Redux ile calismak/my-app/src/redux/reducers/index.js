
// reducer da 2. asama "combine(birlestirme)" islemi (combineReducers)
// reducer larimiz artacak ve bunlari toplamamiz gerekiyor. Genellikle [reducers] dosyasinin icerisinde [index.js] icerisinde toplariz

import { combineReducers } from "redux"; // reducer lari bir araya getir
import counterReducer from "./counterReducer";



const reducers = combineReducers ({
    counterReducer
});

export default reducers;