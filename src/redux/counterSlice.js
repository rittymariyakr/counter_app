import { createSlice } from "@reduxjs/toolkit";

//action and reducer are generate automatically when slice is created
const counterSlice = createSlice({ //to consider this file as slice call the method 'createSlice' from react toolkit
    name:'counterApp', //name is not mandatory
    //state
    initialState:{ //initialState is the predeifined key for creating state
        //we have only one state is here . state name is value and intitial value is zero
        value:0 //state and initial value
    },
    //actions are inside this reducers key(predefined) as object
    reducers:{ //reducers is also a predefined key. reducers key and reducers are not same //inside this key we create actions //action = it holds logics/functions to change the state
        
        //logics to update state
        //function or logic to increment number
        increment:(state, action)=>{  //passing state as argument. becoz we need value inside the state //functn/logic name is increment
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
//the response/value from action called payload. it is send to reducer automatically. reducer and action are automatically created inside slice file
//action is required for component(Counter.jsx) inorder to update state
export const{increment, decrement, reset} = counterSlice.actions

//reducer is required to store(Store.jsx) to update the state value
export default counterSlice.reducer // by default exporting reducer here.
