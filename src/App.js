import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom"
import EmpList from './CURD/EmpList';
import EmpCreate from './CURD/EmpCreate';
import EditEmployee from './CURD/EditEmployee';
import AboutEmployee from './CURD/AboutEmployee';
import Counter from './feature/counter/Counter';
import ParentProp from './props/ParentProp';
import CounterReducer from './props/CounterReducer';
import EmpCard from './CURD/EmpCard';


function App() {
  return (
    <div>
       <div className='card mb-3 p-4 text-center bg-secondary text-light'>
       <h1> React CRUD Operation </h1>
       </div>
       <BrowserRouter>
         <Routes>
           <Route path='/' element={ <EmpList/>} />
           <Route path='/createEmployee' element={ <EmpCreate />} />
           <Route path='/addEmp' element={<Counter />} />
           <Route path='/empcard' element={<EmpCard />} />
           <Route path='/createEmployee/create/:empId' element={<EditEmployee />} />
           <Route path='/createEmployee/about/:empId' element={<AboutEmployee />} />
         </Routes>
       </BrowserRouter>
       <div className='card'>
         <ParentProp />
       </div>
       <div className='card'>
        <h3 className='text-center'>Using useReducer Hook</h3>
        <CounterReducer />
       </div>
    </div>
  )
}
export default App;
