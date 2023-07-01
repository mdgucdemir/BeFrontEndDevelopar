import * as actionTypes from "./actionTypes" // * tanimlanlarin butun hepsini kapsar

export const increaseCounter = () => ({
    // action imiz bir function
    // ve parametresi ise bunlar
    type:actionTypes.INCREASE_COUNTER,
    payload:1
})

export const decreaseCounter = () => ({
    type:actionTypes.DECREASE_COUNTER,
    payload:1
})

export const increaseByTwoCounter = () => ({
    type:actionTypes.INCREASE_BY_TWO_COUNTER,
    payload:2
})

// bizim action larimiz counter yani sayac icin [ counterActions.js ] diye bir file olusturduk.
// boyle bir file olusturmadan da yapabilirdik ama boylesi daha duzenli bir yazim olucaktir