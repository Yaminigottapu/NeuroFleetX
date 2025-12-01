import Home from "./home"
import CustomerDashboard from "./Customer"
import DriverDashboard from "./Driver"
import Login from "./Login"
import Signup from "./Signup"
import {Routes,Route} from 'react-router-dom'
import RoleCards from "./Card"
import StackedAreaChart from "./Charts"
function App() {
  return(
<div>
   <Routes>
    <Route path="/Cards" element={<RoleCards/>}/>
      <Route path="/Home" element={<Home/>}/>
       <Route path="/Driver" element={<DriverDashboard/>}/>
           <Route path="/Customer" element={<CustomerDashboard/>}/>
           <Route path="/" element={<Login/>}/>
               <Route path="/signup" element={<Signup/>}/>    
   </Routes>
{/* <StackedAreaChart/> */}
{/* <Home/>
<RoleCards/> */}
  </div>
  )
  
}

export default App
