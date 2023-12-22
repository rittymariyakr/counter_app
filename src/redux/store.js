import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";



export const store = configureStore({  //call configureStore from reduxtoolkit
    //reducer can only update value of state in store
    //reducer key is predefined (its an object which can hold morethan 1 reducer)
    reducer:{
        //reducer is coming from counterSlice since we are export reducer as default
        counter:counterSlice //import counterSlice //by default exporting reducer is here. so when we call counterSlice then reducer is stored into this counter key
    }
}) 



