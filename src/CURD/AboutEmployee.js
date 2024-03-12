import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function AboutEmployee() {

    let {empId} = useParams();

    let[empDetail,setEmpDetail] = useState({})
  
    useEffect(()=>{
        fetch(`http://localhost:4000/employees/${empId}`)
        .then((res)=>res.json())
        .then((data)=>setEmpDetail(data))
        .catch(err => console.log("Error AAppeared :" +err.message))
    
    },[])
  
    return (

    <div className='container'>
        <div className='row justify-content-center'>
        <div className='card col-8'>
            <div className='card-title justify-content-center'>
                <h1 className='text-primary text-center'>Employee Details</h1>
                <div>
                <h3 className='text-center text-info'><span className='text-secondary'>Emp ID :</span> {empDetail.id}</h3>
                <h3 className='text-center text-info'><span className='text-secondary'>Emp Name : </span>{empDetail.name}</h3>
                <h3 className='text-center text-info'><span className='text-secondary'>Emp email :</span>{empDetail.email}</h3>
                <h3 className='text-center text-info'><span className='text-secondary'>Emp Phone :</span> {empDetail.phone}</h3>
                </div>
            </div>
            <Link  to="/" className='btn btn-primary'>Back</Link>
        </div>
        </div>
    </div>

  );
};

export default AboutEmployee