import React, {useState, useEffect,useRef} from 'react';
import axios from "axios";
import {useReactToPrint} from "react-to-print";
import {Link} from 'react-router-dom';


export default function AllProduct(){

    const conponentPDF = useRef();
    const[courses, setCourses] = useState([]);
    const[search, setsearch] = useState([]);
    console.log(search)
    
    

    useEffect(()=>{
        function getCourses() {
            axios.get("http://localhost:8000/course-server/course/allcourse").then((res)=>{
               setCourses(res.data);
               console.log(res);
        }).catch((err)=>{
            alert(err.message);
        })
        }
        getCourses();

        
    
    } ) 

    


  
    
   const deleteCourse= async(id)=>{
    console.warn(id)
    let result = await fetch(`http://localhost:8000/course-server/course/deletecourse/${id}`,{
        method:"Delete"
    });
    result = await result.json();
    if(result)
    {
        
        alert("Delete Successfully")
        
    }
   }

   const generatePDF = useReactToPrint({
    content: ()=>conponentPDF.current,
    documentTitle: "userdata",
    onAfterPrint: ()=> alert("Download Successfully")
   });
  

    return(
        //class create form

        <div>

        <div class="card bg-dark text-white" >
           <img src="img5.jpeg" class="card-img" alt="..." style={{height: '375px', filter: 'brightness(40%)'}}/>
             <div class="card-img-overlay">
              <br></br>
              <br></br>
                <h1 class="card-title" style={{fontSize: '90px'}}><b>ALL</b> <b style={{ color: '#EAB333'}}>COURSES</b></h1>
                <br></br>
                <br></br>
                <br></br>

                <div class="btn-group" role="group" aria-label="Basic example" style={{float: 'right'}}>
                <Link to='/viewcourse'>
                <button type="button" class="btn1 btn-success btn-lg" style={{marginRight: '50px', backgroundColor: '#EAB333',borderColor:'#EAB333'}}>COURSES</button>
                </Link>
                <Link to='/requests'>
                <button type="button" class="btn2 btn-success btn-lg" style={{marginRight: '50px', backgroundColor: '#EAB333',borderColor:'#EAB333'}}>ENROLL ME</button>
                </Link>
                <button type="button" class="btn3 btn-success btn-lg" style={{marginRight: '50px', backgroundColor: '#EAB333',borderColor:'#EAB333'}}>PAYMENT</button>
                </div>

             </div>
          </div>




        
        <div style={{width:'1350px'}} >
        <br></br>
        <br></br>
        <Link to='/addcourse'>
        <button type="button" class="btn1 btn-success btn-lg" style={{backgroundColor: '#EAB333',borderColor:'#EAB333'}} ><i class="fa-solid fa-folder-plus"></i>ADD</button>
        </Link>
        <br></br>
        <br></br>
        <form class="d-flex">
        <input class="form-control me-2 " type="text" onChange={(e) => setsearch(e.target.value)} placeholder="Search by Name" aria-label="Search"/>
        </form>
        <br></br>
        <div>
        <div ref={conponentPDF} style={{width:'100%'}}>
        <table class="table table-striped" style={{ backgroundColor: '#D1CDCC'}} >
            <thead class="table table-dark table-striped">
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Course Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
            {courses.filter((courses) => {
                return search.toString().toLowerCase() === '' ? courses: courses.courseName.toString().toLowerCase().includes(search);
                
            }).map((courses, index) => {
                return(
                <tr key={courses._id}>
                    <th scoop="row">{index+1}</th>
                    <td>{courses.courseName}</td> 
                    <td>Rs.{courses.coursePrice}</td>
                    <td>{courses.description}</td>
                    <td>
                        <a className="btn btn-success" style={{backgroundColor: '#EAB333',borderColor:'#EAB333'}} href={`/updatecourse/${courses._id}`}>
                            <i className="fas fa-edit"></i>&nbsp;Update
                        </a>

                        <h>    </h>
                        
                        <a className="btn btn-secondary" href="#" onClick={()=>deleteCourse(courses._id)}>
                            <i className="fas fa-trash-alt"></i>&nbsp;Delete
                        </a>
                        

                    </td>
                </tr>
                )
                
            
            
           
        })}

            </tbody>
        </table>

        </div>

        <br></br>

            <a className="btn" href="#" onClick={generatePDF} style={{ color: 'black', borderColor: 'black' }}>
                <i className="fas fa-download"></i>&nbsp;Download
            </a>

            <br></br>
        

        
    </div>
    </div>

    <br></br>
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