import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Cookies from 'js-cookie'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import UpdateRequest from './components/UpdateRequest';
import Requests from './components/Enroll';
import { useEffect, useState } from 'react';
import AdminDashboard from './components/AdminDashboard';
import Forgot from './components/Forgot';
import Reset from './components/Reset';
import AllRequests from './components/AllRequests';



import TaskDashboard from './components/Admin/TaskDashboard.js';
import AddPayment from './components/Admin/AddPayment.js';
import AllPayments from './components/Admin/AllPayments.js';
import UpdatePayments from './components/Admin/UpdatePayments.js';
import ViewPayment from './components/Admin/ViewRequest.js';

import CourseDashboard from './components/Instructor/CourseDashboard.js';
import AddCourse from './components/Instructor/AddCourse.js';
import AllCourses from './components/Instructor/AllCourses.js';
import CheckCourse from './components/Instructor/CheckCourse.js';
import ViewCourse from './components/Instructor/ViewCourse.js';
import UpdateCourse from './components/Instructor/UpdateCourse.js';


function App() {

  const[cookieVal,setCookieVal]=useState(Cookies.get("username"))

  useEffect(()=>{

    const interval=setInterval(() => {

      const updatedCookie=Cookies.get("username")
      if(updatedCookie!==cookieVal){
        setCookieVal(updatedCookie)
      }
      
    },1000)

    return()=>{clearInterval(interval)}

  },[cookieVal])

  return (
  <Router>
    <div>
    
      <Header/>
      
      <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/all" element={<AllRequests/>}/>
      {cookieVal==undefined && <Route path="/login" element={<Login/>}/>}
      {cookieVal !=undefined && <Route path="/login" element={<Home/>}/>}
      <Route path="/register" element={<Register/>}/>
      <Route path="/forgotpw" element={<Forgot/>}/>
      <Route path="/resetpw" element={<Reset/>}/>
      <Route path="/requests" element={<Requests/>}/>
      <Route path="/update/:id" element={<UpdateRequest/>}/>
      <Route path="/get/:id" element={<UpdateRequest/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/admindash" element={<AdminDashboard/>}/>


      <Route path="/paymentdash" element={<TaskDashboard/>}/>
      <Route path="/addpayment" element={<AddPayment/>}/>
      <Route path="/allpayment" element={<AllPayments/>}/>
      <Route path="/allreq" element={<ViewPayment/>}/>
      <Route path="/updatepayment/:id" element={<UpdatePayments/>}/>
      <Route path="/getpayment/:id" element={<UpdatePayments/>}/>


      <Route path="/coursedash" element={<CourseDashboard/>}/>
      <Route path="/addcourse" element={<AddCourse/>}/>
      <Route path="/viewcourse" element={<ViewCourse/>}/>
      <Route path="/allcourse" element={<AllCourses/>}/>
      <Route path="/getcoursecard/:id" element={<CheckCourse/>}/>
      <Route path="/updatecourse/:id" element={<UpdateCourse/>}/>
      <Route path="/getcourse/:id" element={<UpdateCourse/>}/>

      
      
      
      </Routes>
      
      
    </div>
    </Router>
  ); 
}

export default App;
 