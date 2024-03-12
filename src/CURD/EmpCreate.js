import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Swal from "sweetalert2";

function EmpCreate() {
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  let navigate = useNavigate();

  let postHandle = (e) => {
    e.preventDefault();

    let newEmployee = { id, name, email, phone };

    fetch("http://localhost:4000/employees", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newEmployee),
    })
      .then((res) => {
        Swal.fire({
          title: "Good job!",
          text: "Data Added Successfully",
          icon: "success",
        });
        navigate("/");
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: err.message,
        })
      );
  };

  return (
    <div className="conatiner row justify-content-center">
      <div className=" col-8 ">
        <div className="card bg-light">
          <div className="card-title text-center">
            <h1>Create Employees Details</h1>
          </div>
          <form onSubmit={postHandle}>
            <div className="row my-4">
              <div className="col-4 text-center">
                <label
                  className="form-label text-primary fs-4 ms-5"
                  htmlFor="id"
                >
                  Id
                </label>
              </div>
              <div className="col-6">
                <input
                  className="form-control"
                  type="text"
                  id="id"
                  disabled
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="row my-4">
              <div className="col-4 text-center">
                <label
                  className="form-label text-primary fs-4  ms-5"
                  htmlFor="name"
                >
                  Name
                </label>
              </div>
              <div className="col-6">
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="row my-4">
              <div className="col-4 text-center">
                <label
                  className="form-label text-primary fs-4  ms-5"
                  htmlFor="email"
                >
                  Email
                </label>
              </div>
              <div className="col-6">
                <input
                  className="form-control"
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="row my-4">
              <div className="col-4 text-center">
                <label
                  className="form-label text-primary fs-4  ms-5"
                  htmlFor="phone"
                >
                  Phone No
                </label>
              </div>
              <div className="col-6">
                <input
                  className="form-control"
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row justify-content-center mb-3">
              <button type="submit" className="btn btn-success col-3 ">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="row justify-content-center">
          <Link to="/" className="btn btn-primary col-2 mt-3">
            {" "}
            <IoMdArrowRoundBack /> Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmpCreate;
