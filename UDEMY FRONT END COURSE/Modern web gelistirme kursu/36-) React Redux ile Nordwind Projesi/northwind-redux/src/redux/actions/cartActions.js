import * as actionTypes from "./actionTypes"

export function addToCart(cartItem){
    return {type:actionTypes.ADD_TO_CART, payload: cartItem}
}

export function removeFromCart(product){ // gonderilen parametrenin product olarak isimlendirilmesi sadece keyfi dir. cartItem da olabilir
    return {type:actionTypes.REMOVE_FROM_CART, payload: product}
}