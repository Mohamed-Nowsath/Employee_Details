import React, { useState } from 'react'
import ChildProp from './ChildProp'

function ParentProp() {

    let [val,setVal]=useState ("");          

    let fromCHild=(newVal)=>{
        setVal(newVal)
    }
  return (
    <div className='text-center'>
        <p>This is ParentProp</p>
        <h3>Data Form ChildProp : {val}</h3>
        <ChildProp fromCHild={fromCHild} />
    </div>
  )
}

export default ParentProp