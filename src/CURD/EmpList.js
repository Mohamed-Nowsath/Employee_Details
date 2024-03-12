import {React ,useEffect,useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdPersonAdd } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { FcViewDetails } from "react-icons/fc";
import Swal from 'sweetalert2';


function EmpList() {

  const [empList, setEmpList] = useState(null)

  useEffect(()=>{
    fetch('http://localhost:4000/employees')
    .then((res)=>res.json())
    .then((data)=>setEmpList(data))
    .catch((err)=>alert(err))
  },[]);

  let navigate=useNavigate();

  let editEmployee = (id)=>{
    navigate("createEmployee/create/"+id);
  }

  let deleteEmployee=(id) =>{
    fetch("http://localhost:4000/employees/"+id,{
      method : "DELETE",
    })
    .then(()=>{
      Swal.fire({
        title: "Good job!",
        text: "Deleted Successfully",
        icon: "success",
      });
      window.location.reload();
    })
    .catch((err)=>
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
    })
    );
  };

  let aboutEmployee=(id)=>{
    navigate("createEmployee/about/"+id)
  }

  return (
    <div className='container'>
        <div className='card bg-info'>
            <div className='card-title text-center'>
                <h1 className='text-muted'>Employees List</h1>
                <div>
              <Link to="/createEmployee" className='btn btn-success '> Add <IoMdPersonAdd /></Link>
              <Link to="/addEmp" className='btn btn-primary ms-4'>Increment Emp</Link>
              <Link to="/empcard" className='btn btn-primary ms-4'>Emp List</Link>
            </div>
            </div>
            <div className='card-body'>
                <table className='table table-bordered'>
                  <thead className='table-primary text-center'>
                    <tr >
                        <th className='text-muted'>ID</th>
                        <th className='text-muted' >Name</th>
                        <th className='text-muted'>Email</th>
                        <th className='text-muted'>Phone Number</th>
                        <th className='text-muted'>Action</th>
                    </tr>
                  </thead>
                  <tbody className='text-center'>
                    { empList &&
                       empList.map(emp =>(
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.phone}</td>
                            <td>
                              <button onClick={()=>editEmployee(emp.id)} className='btn btn-primary me-3'>Edit < FaUserEdit /></button>
                              <button onClick={()=>deleteEmployee(emp.id)} className='btn btn-success me-3'>Delete <MdDeleteOutline /></button>
                              <button onClick={()=>aboutEmployee(emp.id)} className='btn btn-danger me-3'>Details <FcViewDetails /></button>
                            </td>
                        </tr>
                       ))
                    }
                  </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};

export default EmpList