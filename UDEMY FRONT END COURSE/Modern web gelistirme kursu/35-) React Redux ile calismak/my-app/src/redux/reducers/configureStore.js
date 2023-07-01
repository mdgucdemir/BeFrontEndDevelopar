
// reducer da 3. asama "Store" islemi

import { createStore } from "@reduxjs/toolkit";
import reducers from "./index";


export default function configureStore(){
    return createStore(reducers)
}


// Bu islemden sonra "src" folder icerisindeki "index.js" de bunu baglaman lazim
// bagladiktan sonra "Provider" icerisine tanimlaman lazim 