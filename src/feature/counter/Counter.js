import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement ,reset ,incrementByAmount} from "./counterSlice";
import { Link } from "react-router-dom";

function Counter() {
  const Count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount,setIncrementAmount] = useState("");
  const addValue=Number(incrementAmount) || 0;

  const resetAll=()=>{
    setIncrementAmount(0);
    dispatch(reset());
  }

  return (
    <section>
      <div className="container border">
        <div className="card">
          <p className="h1 ms-5">{Count}</p>
          <div>
            <button className="btn btn-primary me-5" onClick={() => dispatch(increment())}> + </button>
            <button className="btn btn-primary" onClick={() => dispatch(decrement())}> - </button>
          </div>

          <div className="card col-3">
            <input type="text" value={incrementAmount} onChange={(e)=>setIncrementAmount(e.target.value)} placeholder="No of Emp"/>
            <button className="btn btn-success my-2" onClick={()=>dispatch(incrementByAmount(addValue))}>Add Emp</button>
            <button className="btn btn-danger mb-2" onClick={resetAll}>Reset</button>
          </div>
        </div>
        <Link to="/" className="btn btn-primary">Back</Link>
      </div>
    </section>
  );
}

export default Counter;
