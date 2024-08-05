import {useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useState} from "react";
import axios from "axios";


export default function AddCourse(){

  const [studentName, setName] = useState("");
  const [CourseCode, setCode] = useState("");
  const [reqdate, setReqdate] = useState("");
  const [cnumber, setCnumber] = useState("");
  const [reqstatus, setReqstatus] = useState("");
  const [error, setError] = useState("false");
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  function sendData(e){
    e.preventDefault();
    
    const newStaffRequest ={
        studentName,
        CourseCode,
        reqdate,
        cnumber,
        reqstatus
    }

    if(studentName.length==0||CourseCode.length==0||reqdate.length==0||cnumber.length==0||reqdate.length==0)
    setError(true)
    if(studentName&&CourseCode&&reqdate&&cnumber&&reqstatus)
    {
      console.log("StudentName:",studentName,"CourseCode:",CourseCode,"ReqDate:",reqdate,"CNumber:",cnumber,"ReqStatus:",reqstatus)
    }

    axios.post("http://localhost:8000/payment-server/payment/addpayment",newStaffRequest).then(()=>{ 
      alert("Route Added")
      setName("");
      setCode("");
      setReqdate("");
      setCnumber("");
      setReqstatus("");

      navigate('/allpayment')
      
    }).catch((err)=>{
      alert(err)
    })

    
    
  
  }


 

  

    return(
        //class create form
        
        <div >
          <div class="card bg-dark text-white" >
           <img src="img5.jpeg" class="card-img" alt="..." style={{height: '375px', filter: 'brightness(40%)'}}/>
             <div class="card-img-overlay">
              <br></br>
              <br></br>
                <h1 class="card-title" style={{fontSize: '90px'}}><b>MANAGE</b> <b style={{ color: '#EAB333'}}>PAYMENTS</b></h1>
                <br></br>
                <br></br>
                <br></br>

                

             </div>
          </div>

          
          <br></br>
          <br></br>

        <div >

        <div class="card text-dark  mb-3" style={{width: '1000px', backgroundColor:'#E0E0E0'}}>
        
        <div class="card-body"> 
        <br></br>
        <h1 style={{ color: '#EAB333'}}><b>MANAGE PAYMENTS</b></h1>
        <br></br>

          <form class="row g-3 was-validated">
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Student Name:</b></label>
                  <input type="text" class="form-control is-invalid" id="validationServer01" aria-label="Default select example"
                  onChange={(e)=>{

                    setName(e.target.value);
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&studentName.length<=0?<lable class="text" style={{color:'#FF0000'}}>Number of Staff can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Course Name:</b></label>
                  <input type="text" class="form-control is-invalid" id="validationServer01" aria-label="Default select example"
                  onChange={(e)=>{

                    setCode(e.target.value);
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&CourseCode.length<=0?<lable class="text" style={{color:'#FF0000'}}>Course Name can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Date:</b></label>
                  <input type="date" class="form-control is-invalid" id="validationServer01" aria-label="Default select example" min={new Date().toISOString().split('T')[0]}
                  onChange={(e)=>{

                    setReqdate(e.target.value);
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&reqdate.length<=0?<lable class="text" style={{color:'#FF0000'}}>Date can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Contact No:</b></label>
                  <input type="number" class="form-control is-invalid"   id="validationServer01" aria-label="Default select example"
                  onChange={(e)=>{

                    setCnumber(e.target.value = e.target.value.slice(0, 10));
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&cnumber.length<=0?<lable class="text" style={{color:'#FF0000'}}>Contact Number can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="inputPassword4" class="form-label" style={{float: 'left'}}><b>Status:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" aria-label="Default select example"
                  onChange={(e)=>{

                    setReqstatus(e.target.value);
                  
                    }}required>
                    <option value="">Open this select menu</option>
                    <option value="Successfull">Successfull</option>
                    <option value="Unsuccessfull">Unsuccessfull</option>
                    </select>
                    <div className="invalid-feedback">
                  {error&&reqstatus.length<=0?<lable class="text" style={{color:'#FF0000'}}>Status can't be empty!</lable>:""}
                  </div> 
              </div>
             
              <div class="col-12">
              <br></br>
              <button type="submit" class="btn btn-success" onClick={sendData} style={{backgroundColor: '#EAB333',borderColor:'#EAB333'}}>SUBMIT</button>
    
              </div>
  
          </form>
          
        <br></br>

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