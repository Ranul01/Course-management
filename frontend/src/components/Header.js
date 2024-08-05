
import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';

function Header(){

   const cookieVal=Cookies.get("username")

    const navigate = useNavigate();

    const logOut=()=>{
         Cookies.remove("username") 
         navigate('/home')
    }

    

    


    return(


      <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
      <img src="img7.png" alt="" style={{width: '40px', height: '40px', marginLeft:'40px'}}/>
      </a>
      <ul class="nav nav-pills bg-dark justify-content-end ">

      <li class="nav-item">
           <Link to="/home" className="nav-link "  style={{ color: '#EAB333'}} > <b>HOME</b> </Link>
        </li>
        <li class="nav-item">
           <Link to="/all" className="nav-link "  style={{ color: '#EAB333'}}> <b>My enrollments</b> </Link>
        </li>
        {/* <li class="nav-item">
           <Link to="/workingdays" className="nav-link "  style={{ color: '#EAB333'}}> <b>WORKING DAYS</b> </Link>
        </li>
        <li class="nav-item">
           <Link to="/routedash" className="nav-link "  style={{ color: '#EAB333'}}> <b>ROUTES</b> </Link>
        </li>
        <li class="nav-item">
           <Link to="/wastedash" className="nav-link "  style={{ color: '#EAB333'}}> <b>WASTE</b> </Link>
        </li> */}
        <li class="nav-item">
           <Link to="#" className="nav-link "  style={{ color: '#EAB333'}}> <b>SERVICES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></Link>
        </li> 
      <li class="nav-item" id='logout' style={{color:'white', marginTop:'6px', marginRight:'15px'}}>
        <h><i class="fa-solid fa-circle-user fa-xl"></i>&nbsp;&nbsp;<Link to="/admindash" style={{color:'white'}}>{cookieVal}</Link>&nbsp;&nbsp;&nbsp;&nbsp;</h>
        <button  style={{ backgroundColor: '#EAB333', borderColor:'#EAB333'}} class="btn btn-success" onClick={logOut}>Logout</button>
      </li>
      <li class="nav-item" id='logout' style={{color:'white', marginTop:'6px', marginRight:'15px'}}>
      <Link to="/login"><button  style={{ backgroundColor: '#EAB333', borderColor:'#EAB333'}} class="btn btn-success">Login</button></Link>
      </li>

      </ul>
        
      
      </nav>

      


      
  
    )
}
export default Header;
