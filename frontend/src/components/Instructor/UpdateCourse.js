import {useParams,useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useState,useEffect} from "react";


export default function UpdateProduct(){

  const [courseName, setName] = React.useState("");
  const [coursePrice, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [error, setError] = useState(false);
  const location = useLocation();
  const params = useParams();
  const data = location.state;
  const navigate = useNavigate();

  useEffect(()=>{
    getCourses();
  },[])

  const getCourses = async ()=>{
    console.warn(params)
    let result = await fetch(`http://localhost:8000/course-server/course/getcourse/${params.id}`);
    result = await result.json();
    setName(result.courseName);
    setPrice(result.coursePrice);
    setDescription(result.description);
  }

  const UpdateCourse = async () =>{
    console.warn(courseName,coursePrice,description)
    let result = await fetch(`http://localhost:8000/course-server/course/updatecourse/${params.id}`,{
      method:'put',
      body:JSON.stringify({courseName,coursePrice,description}),
      headers:{
        'Content-Type':'Application/json'
      }

    });
    result = await result.json()
    if(result){
      
      
      alert("Update Successfully")
      
    }
    
  }

  

    return(
        //class create form
        
        <div >
          <div class="card bg-dark text-white" >
           <img src="img5.jpeg" class="card-img" alt="..." style={{height: '375px', filter: 'brightness(40%)'}}/>
             <div class="card-img-overlay">
              <br></br>
              <br></br>
                <h1 class="card-title" style={{fontSize: '90px'}}><b>UPDATE</b> <b style={{ color: '#EAB333'}}>PRODUCT</b></h1>
                <br></br>
                <br></br>
                <br></br>

                <div class="btn-group" role="group" aria-label="Basic example" style={{float: 'right'}}>
                <Link to='/viewcourse'>
                <button type="button" class="btn1 btn-lg" style={{marginRight: '50px', backgroundColor: '#EAB333',borderColor:'#EAB333'}}>COURSES</button>
                </Link>
                <Link to='/requests'>
                <button type="button" class="btn2 btn-lg" style={{marginRight: '50px', backgroundColor: '#EAB333',borderColor:'#EAB333'}}>ENROLL ME</button>
                </Link>
                <button type="button" class="btn3 btn-lg" style={{marginRight: '50px', backgroundColor: '#EAB333',borderColor:'#EAB333'}}>PAYMENT</button>
                </div>

             </div>
          </div>

          
          <br></br>
          <br></br>

        <div >

        <div class="card text-dark  mb-3" style={{width: '1000px', backgroundColor:'#E0E0E0'}}>
        
        <div class="card-body"> 
        <br></br>
        <h1 class="card-title" style={{color:'#EAB333'}}><b>UPDATE PRODUCT DETAILS</b></h1>
        <br></br>

          <form class="row g-3 was-validated">
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Course Name:</b></label>
                  <input type="text" class="form-control is-invalid" id="validationServer01" aria-label="Default select example" value={courseName}
                  onChange={(e)=>{

                    setName(e.target.value);
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&courseName.length<=0?<lable class="text" style={{color:'#FF0000'}}>Course Name can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="inputPassword4" class="form-label" style={{float: 'left'}}><b>Price:</b></label>
                  <div class="input-group mb-3">
                  <span class="input-group-text">Rs.</span>
                  <input type="number" class="form-control is-invalid" id="validationServer01" aria-label="Amount (to the nearest dollar)" value={coursePrice}
                  onChange={(e)=>{

                    setPrice(e.target.value);
                  
                    }}required/>
                    <span class="input-group-text">.00</span>
                    <div className="invalid-feedback">
                  {error&&coursePrice.length<=0?<lable class="text" style={{color:'#FF0000'}}>Price can't be empty!</lable>:""}
                  </div>
                  </div>
                  
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label" style={{ float: 'left' }}><b>Description:</b></label>
                <textarea class="form-control is-invalid" id="inputAddress2" placeholder="Course Description"
                  onChange={(e) => {

                    setDescription(e.target.value);

                  }} required />
                <div className="invalid-feedback">
                  {error && description.length <= 0 ? <lable class="text" style={{ color: '#FF0000' }}>Message can't be empty!</lable> : ""}
                </div>
              </div>
             
              <div class="col-12">
              <br></br>
              <Link to='/allcourse'>
              <button type="submit" class="btn" onClick={UpdateCourse} style={{marginRight: '50px', backgroundColor: '#EAB333',borderColor:'#EAB333'}}>SUBMIT</button>
              </Link>
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