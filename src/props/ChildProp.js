import React, { useState } from 'react'

function ChildProp( {fromCHild}) {

    let[childVal,setChildVal]= useState("");
    let[resetValue]=useState("");

    let toParent=()=>{
       fromCHild(childVal);
    }
    let reset=()=>{
        fromCHild(resetValue);
    }

  return (
    <div className='text-center'>
        <p>This is ChildProp</p>
        <input className='form-control w-50' onChange={(e)=>setChildVal(e.target.value)} />
        <button onClick={toParent} className='btn btn-primary mt-3'>DataToParent</button>
        <button onClick={reset} className='btn btn-danger mt-3 ms-3'>Reset</button>

    </div>
  )
}

export default ChildProp