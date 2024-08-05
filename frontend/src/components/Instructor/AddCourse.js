import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import axios from "axios";


export default function AddCourse() {

  const [courseName, setName] = useState("");
  const [coursePrice, setPrice] = useState("");
  const [description, setDescription] = useState("");
  //const [message, setMessage] = useState("");
  const [error, setError] = useState("false");
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    const newCourse = {
      courseName,
      coursePrice,
      description,
      //message

    }

    if (courseName.length == 0 || coursePrice.length == 0 || description.length == 0) //message
      setError(true)
    if (courseName && coursePrice && description) {
      console.log("PName:", courseName, "Price:", coursePrice, "PStock:", description)
    }

    axios.post("http://localhost:8000/course-server/course/addcourse", newCourse).then(() => {
      alert("Route Added")
      setName("");
      setPrice("");
      setDescription("");
      //setMessage("");

      navigate('/allcourse')

    }).catch((err) => {
      alert(err)
    })




  }





  return (
    //class create form

    <div >
      <div class="card bg-dark text-white" >
        <img src="img5.jpeg" class="card-img" alt="..." style={{ height: '375px', filter: 'brightness(40%)' }} />
        <div class="card-img-overlay">
          <br></br>
          <br></br>
          <h1 class="card-title" style={{ fontSize: '90px' }}><b>ADD</b> <b style={{ color: '#EAB333'}}>COURSE</b></h1>
          <br></br>
          <br></br>
          <br></br>

          <div class="btn-group" role="group" aria-label="Basic example" style={{ float: 'right' }}>
            <Link to='/randp'>
              <button type="button" class="btn1 btn-success btn-lg" style={{marginRight: '50px', backgroundColor: '#EAB333',borderColor:'#EAB333'}}>COURSES</button>
            </Link>
            <Link to='/requests'>
              <button type="button" class="btn2 btn-success btn-lg" style={{marginRight: '50px', backgroundColor: '#EAB333',borderColor:'#EAB333'}}>ENROLL ME</button>
            </Link>
            <button type="button" class="btn3 btn-success btn-lg" style={{marginRight: '50px', backgroundColor: '#EAB333',borderColor:'#EAB333'}}>PAYMENT</button>
          </div>

        </div>
      </div>


      <br></br>
      <br></br>

      <div >

        <div class="card text-dark  mb-3" style={{ width: '1000px', backgroundColor: '#E0E0E0' }}>

          <div class="card-body">
            <br></br>
            <h1  style={{color: '#EAB333'}}><b>ADD COURSES </b></h1>
            <br></br>

            <form class="row g-3 was-validated">
              <div class="col-md-6">
                <label for="validationServer01" class="form-label" style={{ float: 'left' }}><b>Course Name:</b></label>
                <input type="text" class="form-control is-invalid" id="validationServer01" aria-label="Default select example"
                  onChange={(e) => {

                    setName(e.target.value);

                  }} required />
                <div className="invalid-feedback">
                  {error &&courseName.length <= 0 ? <lable class="text" style={{ color: '#FF0000' }}>Course Name can't be empty!</lable> : ""}
                </div>

              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label" style={{ float: 'left' }}><b>Price:</b></label>
                <div class="input-group mb-3">
                  <span class="input-group-text">Rs.</span>
                  <input type="number" class="form-control is-invalid" id="validationServer01" aria-label="Amount (to the nearest dollar)"
                    onChange={(e) => {

                      setPrice(e.target.value);

                    }} required />
                  <span class="input-group-text">.00</span>
                  <div className="invalid-feedback">
                    {error &&coursePrice.length <= 0 ? <lable class="text" style={{ color: '#FF0000' }}>Price can't be empty!</lable> : ""}
                  </div>
                </div>

              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label" style={{ float: 'left' }}><b>Your Message:</b></label>
                <textarea class="form-control is-invalid" id="inputAddress2" placeholder="Course Description"
                  onChange={(e) => {

                    setDescription(e.target.value);

                  }} required />
                <div className="invalid-feedback">
                  {error &&description.length <= 0 ? <lable class="text" style={{ color: '#FF0000' }}>Message can't be empty!</lable> : ""}
                </div>
              </div>

              <div class="col-12">
                <br></br>
                <button type="submit" class="btn btn-success" style={{backgroundColor: '#EAB333',borderColor:'#EAB333'}} onClick={sendData}>SUBMIT</button>

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