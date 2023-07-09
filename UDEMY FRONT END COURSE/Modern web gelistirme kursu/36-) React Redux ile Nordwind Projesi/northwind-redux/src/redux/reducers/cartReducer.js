
// Reducer bizim state yonetimi yaptigimiz yerdir.

import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

// addToCard
export default function cartReducer(state = initialState.cart , action){
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
           var addItem = state.find(c=>c.product.id === action.payload.product.id);

           if(addItem) {
            var newState = state.map(cartItem => {
                if(cartItem.product.id === action.cartItem.product.id) {
                    // Object.assing( { copy }, your parameter, { your process } ) 
                    return Object.assign({},addItem,{quantity:addItem.quantity+1})
                }
                return cartItem; // map function in return u
            })
            return newState;
           }
           else {
            return [...state,{...action.payload}] // state in bir kopyasini al ve action ile gelen payload i ekle
           }
    
        default:
            return state;
    }
}