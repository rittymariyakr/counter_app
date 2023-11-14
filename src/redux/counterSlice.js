import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({ //to consider this file as slice call the method 'createSlice' from react toolkit
    name:'counterApp',
    //state
    initialState:{
        value:0
    },
    //actions are inside this reducers key as object
    reducers:{
        //logics to update state

        //function or logic to increment number
        increment:(state)=>{
            state.value +=1
        },
        //function or logic to decrement number
        decrement:(state)=>{
            state.value-=1
        },
        //function/logic to reset
        reset:(state)=>{
            state.value=0
        }

    }
}) 

//action is required by component inorder to update state
export const{increment, decrement, reset} = counterSlice.actions

//reducer is required to store to change the state value
export default counterSlice.reducer
