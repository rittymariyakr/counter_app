import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
  //hook to dispatch a function in action (dispatch means call)
  const dispatch = useDispatch()

  //component can access the state by using useSelector hook
  const count = useSelector((state)=>state.counter.value)


  return (
    <div className='d-flex align-items-center justify-content-center w-100 mt-5 flex-column'>
        <h1 style={{fontSize:'90px'}}>{count}</h1>
        <div className='mt-5'>
          {/* here the function has argument, so give it as callback function */}
            <button onClick={()=>dispatch(decrement())} className='btn btn-warning p-3'>Decrememnt</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger p-3 ms-3'>Reset</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-success p-3 ms-3'>Increment</button>
        </div>
    </div>
  )
}

export default Counter
