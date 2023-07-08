// reducer lari combine (birlestirme) yerine hosgeldiniz :)

import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer"


const rootReducer = combineReducers({
    // asagida ki yazim sunu aciklar [ changeCategoryReducer:changeCategoryReducer ] aynisidir, hicbir farki yoktur, javascript ile alakalidir. 
    // Not function icerisine object seklinde yazim yapilmistir
    changeCategoryReducer,
    categoryListReducer,
    productListReducer
})

export default rootReducer;