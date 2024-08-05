import { useParams, useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";




export default function UpdateRequest() {

  const [name, setName] = React.useState("");
  const [code, setCode] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [date, setDate] = React.useState("");
  //const [address, setAddress] = React.useState("");
  const [slip, setSlip] = React.useState("");
  //const [message, setMessage] = React.useState("");
  const [error, setError] = useState("false")
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getRequestDetails();
  }, [])



  const getRequestDetails = async () => {
    console.warn(params)
    let result = await fetch(`http://localhost:8000/enrollment-server/enroll/get/${params.id}`);
    result = await result.json();
    setName(result.name);
    setCode(result.code);
    setEmail(result.email);
    setDate(result.date);
    //setAddress(result.address);
    setSlip(result.slip);
    //setMessage(result.message);
  }



  const UpdateRequest = async () => {
    console.warn(name, code, email, date, slip) //address, message
    let result = await fetch(`http://localhost:8000/enrollment-server/enroll/update/${params.id}`, {
      method: 'put',
      body: JSON.stringify({ name, code, email, date, slip }), //address, message
      headers: {
        'Content-Type': 'Application/json'
      }

    });
    result = await result.json()
    if (result) {


      alert("Update Successfully")

    }

  }








  return (
    //class create form
    <div >
      <div class="card bg-dark text-white" >
        <img src="requestbg.png" class="card-img" alt="..." style={{ height: '375px', filter: 'brightness(40%)' }} />
        <div class="card-img-overlay">
          <br></br>
          <br></br>
          <h1 class="card-title" style={{ fontSize: '90px' }}><b>UPDATE</b> <b style={{ color: '#EAB333' }}>ENROLLEMENT</b></h1>
          <br></br>
          <br></br>
          <br></br>

          <div class="btn-group" role="group" aria-label="Basic example" style={{ float: 'right' }}>
            <Link to='/randp'>
              <button type="button" class="btn1 btn-lg" style={{ marginRight: '50px', backgroundColor: '#EAB333', borderColor: '#EAB333' }}>COURSES</button>
            </Link>
            <Link to='/requests'>
              <button type="button" class="btn2 btn-lg" style={{ marginRight: '50px', backgroundColor: '#EAB333', borderColor: '#EAB333' }}>ENROLL ME</button>
            </Link>
            <button type="button" class="btn3 btn-lg" style={{ marginRight: '50px', backgroundColor: '#EAB333', borderColor: '#EAB333' }}>PAYMENT</button>
          </div>

        </div>
      </div>
      <br></br>
      <br></br>

      <div >

        <div class="card text-dark  mb-3" style={{ width: '1000px', float: 'left', backgroundColor: '#E0E0E0', marginLeft: '500px', alignSelf: 'center' }}>

          <div class="card-body">
            <br></br>
            <h1 class="card-title" style={{ color: '#EAB333' }}><b>UPDATE YOUR ENROLLMENT</b></h1>
            <br></br>

            <form class="row g-3 was-validated">
              <div class="col-md-6">
                <label for="validationServer01" class="form-label" style={{ float: 'left' }}><b>Course Name:</b></label>
                <input type="name" class="form-control is-invalid " id="validationServer01" value={name}
                  onChange={(e) => {

                    setName(e.target.value);

                  }} required />
                <div className="invalid-feedback">
                  {error && name.length <= 0 ? <lable class="text" style={{ color: '#FF0000' }}>Name can't be empty!</lable> : ""}
                </div>
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label" style={{ float: 'left' }}><b>Course Code:</b></label>
                <input type="tel" class="form-control is-invalid" id="inputPassword4" value={code}
                  onChange={(e) => {

                    setCode(e.target.value);

                  }} required />
                <div className="invalid-feedback">
                  {error && code.length <= 0 ? <lable class="text" style={{ color: '#FF0000' }}>Course Code can't be empty!</lable> : ""}
                </div>
              </div>
              <div class="col-md-6">
                <label for="inputAddress" class="form-label" style={{ float: 'left' }}><b>Email:</b></label>
                <input type="email" class="form-control is-invalid" id="inputAddress" placeholder="" value={email}
                  onChange={(e) => {

                    setEmail(e.target.value);

                  }} required />
                <div className="invalid-feedback">
                  {error && email.length <= 0 ? <lable class="text" style={{ color: '#FF0000' }}>Email can't be empty!</lable> : ""}
                </div>
              </div>
              <div class="col-md-6">
                <label for="inputAddress2" class="form-label" style={{ float: 'left' }}><b>Date:</b></label>
                <input type="date" class="form-control is-invalid" id="inputAddress2" placeholder="" value={date} min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => {

                    setDate(e.target.value);

                  }} required />
                <div className="invalid-feedback">
                  {error && date.length <= 0 ? <lable class="text" style={{ color: '#FF0000' }}>Date can't be empty!</lable> : ""}
                </div>
              </div>
              

              <div class="col-md-6">
                <label for="inputCity" class="form-label" style={{ float: 'left' }}><b>Uploaded payment slip link:</b></label>
                <input type="text" class="form-control is-invalid" id="inputCity" value={slip}
                  onChange={(e) => {

                    setSlip(e.target.value);

                  }} required />
                <div className="invalid-feedback">
                  {error && slip.length <= 0 ? <lable class="text" style={{ color: '#FF0000' }}>Slip link can't be empty!</lable> : ""}
                </div>
              </div>

              

              <div class="col-12">
                <br></br>
                <Link to='/all'>
                  <button type="submit" class="btn" onClick={UpdateRequest} style={{ marginRight: '50px', backgroundColor: '#EAB333', borderColor: '#EAB333' }}>UPDATE REQUEST</button>
                </Link>

              </div>

            </form>

            <br></br>

          </div>
        </div>

        <br></br>
        <br></br>

      </div>
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


