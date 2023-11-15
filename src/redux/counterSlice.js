import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({ //to consider this file as slice call the method 'createSlice' from react toolkit
    name:'counterApp',
    //state
    initialState:{
        //we have only one state is here . state name is value and intitial value is zero
        value:0
    },
    //actions are inside this reducers key as object
    reducers:{
        //logics to update state

        //function or logic to increment number
        increment:(state, action)=>{  //passing state as argument. becoz we need value inside the state
            //if it is a argument functn then it can only be accesed by action and value in payload
            state.value +=action.payload // to get value inside the state, state(initialState) is an object so use . operator
        },
        //function or logic to decrement number
        decrement:(state,action)=>{
            //if it is a ragument functn then it can be accesesed by action and value in payload
            state.value-=action.payload
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
