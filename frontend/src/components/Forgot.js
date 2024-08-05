import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, Link, } from "react-router-dom";
import Cookies from 'js-cookie'

export default function Forgot() {

    const [username, setUserName] = useState('')
    const navigate = useNavigate();

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/customer-server/customer/repass",{
                username
            })
            .then(res=>{
                if(res.data=="exist"){
                    Cookies.set("username",username,{expires:1})
                    navigate('/resetpw')
                }
                else if(res.data=="notexist"){
                    alert("User have not Register!")
                    
                }
                
            })
        }
        catch(e){

            console.log(e);
        }
    }

  return (

    <div style={{backgroundImage: `url('loginbg1.png')`}}>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

        
        <div className="Login " >


            <div class="card text-center" style={{width: '37%'}}>
                
                <div class="card-body">
                <img src="img7.png" style={{maxHeight:'150px',width: '30%'}} alt="..."/>
                    <h1 class="card-title" style={{color: '#EAB333'}}><b>Forgot Password</b></h1>
                    <br></br>
                    <br></br>

                    <form action="POST">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label " style={{float: 'left'}}><i class="fa-solid fa-user"></i><b> Enter Your User Name :</b></label>
                            <input type="text" class="form-control  " onChange={(e)=>{setUserName(e.target.value)}} id="username" placeholder="user name"/>
                        </div>
                        
                        <br></br>
                        
                        
                        <button type="submit" class="btn" onClick={submit} style={{ marginRight: '50px', backgroundColor: '#EAB333', borderColor:'#EAB333'}}>Next</button>
                        <br></br>
                        <br></br>
                        <br></br>
                      
                        
                    </form>

                    
                    

                    
                </div>
            </div>

            

        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        </div>
  )
}
