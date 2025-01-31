import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import axios from "axios";



export default function Requests() {

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  //const [address, setAddress] = useState("");
  const [slip, setSlip] = useState("");
  //const [message, setMessage] = useState("");
  const [error, setError] = useState("false");
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();


  function sendData(e) {
    e.preventDefault();

    const newRequest = {
      name,
      code,
      email,
      date,
      //address,
      slip,
      //message

    }

    


    if (name.length == 0 || code.length == 0 || email.length == 0 || date.length == 0 || slip.length == 0 ) //address.length == 0 || message.length == 0
      setError(true)
    if (name && code && email && date && slip) { //address &&  message
      console.log("Name:", name, "Code:", code, "Email:", email, "Date:", date, "Slip:", slip) //"Message:", message,"Address:", address,
    }

    axios.post("http://localhost:8000/enrollment-server/enroll/add", newRequest).then(() => {
      alert("Request Added")
      setName("");
      setCode("");
      setEmail("");
      setDate("");
      //setAddress("");
      setSlip("");
      //setMessage("");


      /*client.messages.create({
        body: `New enrollment request received from ${name}.`,
        from: '+12076002661',
        to: '+940701593496'
      }).then(message => console.log(message.sid));*/

      navigate('/home')

    }).catch((err) => {
      alert(err)
    })

}

  const hadleSubmit = (e) => {
    e.preventDefault();

  }



  return (
    //class create form

    <div >
      <div class="card bg-dark text-white" >
        <img src="img5.jpeg" class="card-img" alt="..." style={{ height: '375px', filter: 'brightness(40%)' }} />
        <div class="card-img-overlay">
          <br></br>
          <br></br>
          <h1 class="card-title" style={{ fontSize: '90px' }}><b>COURSE</b> <b style={{ color: '#EAB333'}}>ENROLLEMENT</b></h1>
          <br></br>
          <br></br>
          <br></br>

          <div class="btn-group" role="group" aria-label="Basic example" style={{ float: 'right' }}>
            <Link to='/viewproduct'>
              <button type="button" class="btn1 btn-success btn-lg" style={{ marginRight: '50px',  backgroundColor: '#EAB333',borderColor:'#EAB333' }}>COURSES</button>
            </Link>
            <Link to='/requests'>
              <button type="button" class="btn2 btn-success btn-lg" style={{ marginRight: '50px' ,  backgroundColor: '#EAB333',borderColor:'#EAB333'}}>ENROLL ME</button>
            </Link>
            <button type="button" class="btn3 btn-success btn-lg" style={{ marginRight: '50px',  backgroundColor: '#EAB333',borderColor:'#EAB333' }}>PAYMENT</button>
          </div>

        </div>
      </div>


      <br></br>
      <br></br>

      <div >

        <div class="card text-dark  mb-3" style={{ width: '1000px',  backgroundColor: '#E0E0E0', alignSelf:'center' }}>

          <div class="card-body">
            <br></br>
            <h1 style={{color: '#EAB333'}}><b>ENROLL</b></h1>
            <br></br>

            <form class="row g-3 was-validated">
              <div class="col-md-6">
                <label for="validationServer01" class="form-label" style={{ float: 'left' }}><b>Course Name:</b></label>
                <input type="name" class="form-control is-invalid" id="validationServer01"
                  onChange={(e) => {

                    setName(e.target.value);

                  }} required />
                <div className="invalid-feedback">
                  {error && name.length <= 0 ? <lable class="text" style={{ color: '#FF0000' }}> Course Name can't be empty!</lable> : ""}
                </div>
              </div>

              <div class="col-md-6">
                <label for="inputPassword4" class="form-label" style={{ float: 'left' }}><b>Course Code:</b></label>
                <input type="tel" class="form-control is-invalid" id="inputPassword4"
                  onChange={(e) => {

                    setCode(e.target.value);

                  }} required />
                <div className="invalid-feedback">
                  {error && code.length <= 0 ? <lable class="Number" style={{ color: '#FF0000' }}>Course code can't be empty!</lable> : ""}
                </div>
              </div>

              <div class="col-md-6">
                <label for="inputAddress" class="form-label" style={{ float: 'left' }}><b>Email:</b></label>
                <input type="email" class="form-control is-invalid" id="inputAddress" placeholder=""
                  onChange={(e) => {

                    setEmail(e.target.value);

                  }} required />
                <div className="invalid-feedback">
                  {error && email.length <= 0 ? <lable class="text" style={{ color: '#FF0000' }}>Email can't be empty!</lable> : ""}
                </div>
              </div>

              <div class="col-md-6">
                <label for="inputAddress2" class="form-label" style={{ float: 'left' }}><b>Date:</b></label>
                <input type="date" class="form-control is-invalid" id="inputAddress2" placeholder="" min={new Date().toISOString().split('T')[0]}
                  //value={new Date().toISOString().split('T')[0]}
                  onChange={(e) => {

                    setDate(e.target.value);

                  }} required />

                <div className="invalid-feedback">
                  {error && date.length <= 0 ? <lable class="text" style={{ color: '#FF0000' }}>Date can't be empty!</lable> : ""}
                </div>

                </div>

              
              <div class="col-md-6">
                <label for="inputCity" class="form-label" style={{ float: 'left' }}><b>Uploaded payment slip link:</b></label>
                <input type="text" class="form-control is-invalid" id="inputCity"
                  onChange={(e) => {

                    setSlip(e.target.value);

                  }} required />
                <div className="invalid-feedback">
                  {error && slip.length <= 0 ? <lable class="text" style={{ color: '#FF0000' }}>Slip link can't be empty!</lable> : ""}
                </div>
              </div>

              


              <div class="col-12">
                <br></br>
                <button type="submit" class="btn" onClick={sendData} style={{marginRight: '50px', backgroundColor: '#EAB333',borderColor:'#EAB333'}}>SUBMIT REQUEST</button>

              </div>

            </form>

            <br></br>

          </div>
        </div>

        

      </div>
      <br></br>
      <br></br>

      <div class="card bg-dark text-white" style={{ height: '350px', width: '100%' }}>

        <div class="card-img-overlay">
          <br></br>
          <h3 class="card-title" style={{ float: 'left' }}><b style={{ color: '#EAB333' }}>CONTACT</b></h3>
          <br></br>
          <i class="fa-brands fa-facebook fa-2xl" style={{ float: 'right', marginRight: '20px' }}></i>
          <i class="fa-brands fa-instagram fa-2xl" style={{ float: 'right', marginRight: '20px' }}></i>
          <i class="fa-brands fa-linkedin fa-2xl" style={{ float: 'right', marginRight: '20px' }}></i>
          <br></br>
          <br></br>


          <div style={{ float: 'left' }}>
            <h5 style={{ textAlign: 'left' }}><i class="fa-solid fa-envelope"></i> &nbsp;&nbsp;&nbsp;master.mind@gmail.com</h5>
            <br></br>
            <h5 style={{ textAlign: 'left' }}><i class="fa-solid fa-phone-volume"></i> &nbsp;&nbsp;&nbsp;071 159 0580</h5>
            <br></br>
            <h5 style={{ textAlign: 'left' }}><i class="fa-solid fa-location-dot"></i> &nbsp;&nbsp;&nbsp;168/7/4b,tranquil terrace,new kandy road,malabe</h5>

          </div>

          <div style={{ float: 'right', width: '50%' }}>
            <h5 style={{ textAlign: 'left' }}>HOME</h5>
            <br></br>
            <h5 style={{ textAlign: 'left' }}>ABOUT US</h5>
            <br></br>
            <h5 style={{ textAlign: 'left' }}>WORKING DAYS</h5>
            <br></br>
            <h5 style={{ textAlign: 'left' }}>SERVICES</h5>


          </div>
          <br></br>
          <br></br>
          <br></br>

          <h style={{ float: 'left', marginLeft: '80%' }}>privacy policy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; terms & conditions</h>






        </div>
      </div>




    </div>


  )

}