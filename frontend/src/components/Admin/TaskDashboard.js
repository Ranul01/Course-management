import {useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useState} from "react";
import axios from "axios";


export default function TaskDashboard(){

  
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  
    

  

  

    return(
        //class create form
        
        <div >
          <div class="card bg-dark text-white" >
           <img src="img5.jpeg" class="card-img" alt="..." style={{height: '375px',filter: 'brightness(40%)'}}/>
             <div class="card-img-overlay">
              <br></br>
              <br></br>
                <h1 class="card-title" style={{fontSize: '90px'}}><b>ENROLLMENT & PAYMENT</b> <b style={{ color: '#EAB333'}}>DASHBOARD</b></h1>
                <br></br>
                <br></br>
                <br></br>

               

             </div>
          </div>

          
          <br></br>
          <br></br>

        <div >

<div class="row row-cols-1 row-cols-md-3 g-4" style={{marginLeft: '40px'}}>
  <div class="col" style={{maxWidth: '420px',marginLeft: '40px'}}>
    <div class="card text-white bg-success" style={{height:'600px',filter: 'brightness(80%)'}}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <center>
      <i class="fa-solid fa-headset fa-10x"></i>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <h1 class="card-title"><b class="text-white">RECENT ENROLLMENTS</b></h1>
      
      </center>
      <br></br>
      <div class="card-body">
        <Link to='/allreq'>
      <button type="button" class="btn btn-outline-light" style={{marginTop: '60px'}}>CLICK</button>
      </Link>
      </div>
    </div>
  </div>
  <div class="col" style={{maxWidth: '420px',marginLeft: '40px'}}>
    <div class="card text-white bg-primary" style={{height:'600px',filter: 'brightness(80%)'}}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <center>
      <i class="fa-solid fa-clipboard-list fa-10x"></i>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <h1 class="card-title"><b class="text-white">MANAGE PAYMENTS</b></h1>
      
      </center>
      <br></br>
      <div class="card-body">
        <Link to='/addpayment'>
      <button type="button" class="btn btn-outline-light" style={{marginTop: '60px'}}>CLICK</button>
      </Link>
      </div>
    </div>
  </div>
  <div class="col" style={{maxWidth: '420px',marginLeft: '40px'}}>
    <div class="card text-white bg-warning" style={{height:'600px',filter: 'brightness(80%)'}}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <center> 
      <i class="fa-solid fa-chalkboard fa-10x"></i>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <h1 class="card-title"><b class="text-white">DAILY SUMMARY</b></h1>
      
      </center>
      <br></br>
      <div class="card-body">
        <Link to='/allpayment'>
      <button type="button" class="btn btn-outline-light" style={{marginTop: '100px'}}>CLICK</button>
      </Link>
      </div>
    </div>
  </div>
</div>



        

      </div>
      <br></br>
      <br></br>

      <div class="card bg-dark text-white" style={{height: '350px', width:'100%'}}>
           
             <div class="card-img-overlay">
              <br></br>
                <h3 class="card-title" style={{float: 'left'}}><b style={{ color: '#EAB333' }}>CONTACT</b></h3>
                <br></br>
                <i class="fa-brands fa-facebook fa-2xl" style={{float: 'right', marginRight: '20px'}}></i>
                <i class="fa-brands fa-instagram fa-2xl" style={{float: 'right', marginRight: '20px'}}></i>
                <i class="fa-brands fa-linkedin fa-2xl" style={{float: 'right', marginRight: '20px'}}></i>
                <br></br>
                <br></br>
                

                <div style={{float: 'left'}}>
                <h5 style={{textAlign: 'left'}}><i class="fa-solid fa-envelope"></i> &nbsp;&nbsp;&nbsp;master.mind@gmail.com</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}><i class="fa-solid fa-phone-volume"></i> &nbsp;&nbsp;&nbsp;071 159 0580</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}><i class="fa-solid fa-location-dot"></i> &nbsp;&nbsp;&nbsp;168/7/4b,tranquil terrace,new kandy road,malabe</h5>
                
                </div>

                <div style={{float: 'right',width: '50%'}}>
                <h5 style={{textAlign: 'left'}}>HOME</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}>ABOUT US</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}>WORKING DAYS</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}>SERVICES</h5>

                
                </div>
                <br></br>
                <br></br>
                <br></br>
                
                <h style={{float: 'left', marginLeft:'80%'}}>privacy policy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; terms & conditions</h>

                
               
                
                

             </div>
          </div>



      
      </div>
      
      
    )
    
}