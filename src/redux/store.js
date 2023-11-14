import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";



export const store = configureStore({  //call configureStore from reduxtoolkit
    //reducer can only update value of state in store
    //reducer key is predefined (its an object which can called morethan 1 reducer)
    reducer:{
        counter:counterSlice
    }
}) 



