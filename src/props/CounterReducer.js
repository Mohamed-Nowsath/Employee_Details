import { type } from '@testing-library/user-event/dist/type';
import React, { useReducer } from 'react'

function CounterReducer() {

    const reducer=(state,action)=>{
           switch(action.type){
            case "INCREMENT" : return { count : state.count + 1};
            case "INCREMENTBY5" : return { count : state.count + action.value};
            case "DECREMENTBY5" : return { count : state.count - action.value};
            case "DECREMENT" : return { count : state.count - 1};
            case "INCREMENTBY10" : return { count : state.count + action.value};
            case "DECREMENTBY10" : return { count : state.count - action.value};
            case "RESET" : return { count : state.count = 0};
            default :return { count : state.count}
           }
    }

    let [myState , myDispatch] = useReducer(reducer, { count : 1})

  return (
    <div className='text-center'>
        <button className='btn btn-primary m-3' onClick={()=>myDispatch({ type: "INCREMENT" })}> +1 </button>
        <button className='btn btn-success m-3' onClick={()=>myDispatch({type : "INCREMENTBY5" , value : 5})}> +5  </button>
        <button className='btn btn-warning' onClick={()=>myDispatch({type : "INCREMENTBY10" , value :10})}> +10 </button>
        <h3>{myState.count}</h3>
        <button className='btn btn-primary m-3' onClick={()=>myDispatch({type : "DECREMENT"})}> -1 </button>
        <button className='btn btn-success m-3' onClick={()=>myDispatch({type : "DECREMENTBY5" ,value : 5})}> -5 </button>
        <button className='btn btn-warning' onClick={()=>myDispatch({type : "DECREMENTBY10" , value : 10})}> +10 </button>
        <div className='text-center'>
            <button className='btn btn-danger m-3' onClick={()=>myDispatch({ type : "RESET" })}>Reset</button>
        </div>
    
    </div>
  )
}

export default CounterReducer