import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
  //sate to hold the value from input box
  const [range, setRange] = useState("")

  //hook to dispatch a function/logic in action (dispatch means calling function/logic inside action)
  const dispatch = useDispatch()

  //component can access the updated state from store(now the updated state value(payload)  is inside the reducer) by using useSelector hook
  const count = useSelector((state)=>state.counter.value)

console.log(range);
  return (
    <>
    <div className='d-flex align-items-center justify-content-center w-100 mt-5 flex-column'>
        <h1 style={{fontSize:'90px'}}>{count}</h1>
        <div className='mt-5'>
          {/* here the function has argument, so give it as callback function */}
            <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-warning p-3'>Decrememnt</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger p-3 ms-3'>Reset</button>
            <button onClick={()=>dispatch(increment(Number(range)))} className='btn btn-success p-3 ms-3'>Increment</button>
        </div>
    </div>
    <div className='mt-5 w-100'>
      <input type="text" onChange={(e)=>setRange(e.target.value)} className='form-control' style={{borderColor:'blue'}} placeholder='Enter the range' />
    </div>
    </>
  )
}

export default Counter
