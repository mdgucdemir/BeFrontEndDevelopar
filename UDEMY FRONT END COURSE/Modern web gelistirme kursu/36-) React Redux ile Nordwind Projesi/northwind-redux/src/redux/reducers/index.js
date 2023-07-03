// reducer lari combine (birlestirme) yerine hosgeldiniz :)

import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer"


const rootReducer = combineReducers({
    changeCategoryReducer
    // yukarida ki yazim sunu aciklar [ changeCategoryReducer:changeCategoryReducer ] aynisidir, hicbir farki yoktur, javascript ile alakalidir. 
    // Not function icerisine object seklinde yazim yapilmistir
})

export default rootReducer;