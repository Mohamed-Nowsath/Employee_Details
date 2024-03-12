import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from '../feature/counter/empCartSlice';


function EmpCard() {

    const [empCardList,setEmpCardList] = useState();

    useEffect(()=>{
        fetch('http://localhost:4000/employees')
        .then((res)=>res.json())
        .then((data)=>setEmpCardList(data))
        .catch((err)=>alert(err))
      },[]);

      let dispatch = useDispatch();

      let fireEmp=(empID)=>{
         dispatch(remove(empID))
      }
    
  return (
    <div className='container'>
        <div className='row'>

        {empCardList &&
        empCardList.map((empcard)=>(
       <div key={empcard.id} class="card text-bg-dark m-3" style={{ maxWidth:"14rem"}}>
  <div class="card-header">{empcard.name}</div>
  <div class="card-body">
    <h5 class="card-title">
        {empcard.email} 
    </h5>
    <p class="card-text">{empcard.phone}</p>
    <button className='btn btn-danger ms-3'onClick={()=>fireEmp(empcard.id)} >Fire </button>
  </div>
</div>
))
}
<div className='text-center'>
    <Link to="/" className='btn btn-primary'>Back</Link>
</div>
</div>
</div>
  )
}

export default EmpCard