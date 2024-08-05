import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { Link } from 'react-router-dom';


export default function ViewRequest() {

    const conponentPDF = useRef();
    const [payments, setPayments] = useState([]);
    const [search, setsearch] = useState([]);
    console.log(search)



    useEffect(() => {
        function getPayments() {
            axios.get("http://localhost:8000/enrollment-server/enroll/allreq").then((res) => {
                setPayments(res.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getPayments();



    }, [])


    const generatePDF = useReactToPrint({
        content: () => conponentPDF.current,
        documentTitle: "userdata",
        onAfterPrint: () => alert("Download Successfully")
    });


    return (
        //class create form

        <div>

            <div class="card bg-dark text-white" >
                <img src="img5.jpeg" class="card-img" alt="..." style={{ height: '375px', filter: 'brightness(40%)' }} />
                <div class="card-img-overlay">
                    <br></br>
                    <br></br>
                    <h1 class="card-title" style={{ fontSize: '90px' }}><b>RECENT</b> <b style={{ color: '#EAB333' }}>ENROLLMENTS</b></h1>
                    <br></br>
                    <br></br>
                    <br></br>



                </div>
            </div>





            <div style={{ width: '1350px' }} >
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div>
                    <div ref={conponentPDF} style={{ width: '100%' }}>
                        <table class="table table-striped" style={{ backgroundColor: '#D1CDCC' }}>
                            <thead class="table table-dark table-striped">
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Course Name</th>
                                    <th scope="col">Course code</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Date</th>
                                    {/*<th scope="col">Address</th>*/}
                                    <th scope="col">Payment Slip Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {payments.filter((payment) => {
                                    return search.toString().toLowerCase() === '' ? payment : payment.name.toString().toLowerCase().includes(search);
                                }).map((payment, index) => {
                                    return (
                                        <tr key={payment._id}>
                                            <th scoop="row">{index + 1}</th>
                                            <td><a href={`/get/${payment._id}`} style={{ textDecoration: 'none', color: 'black' }}>{payment.name}</a></td>
                                            <td>{payment.code}</td>
                                            <td>{payment.email}</td>
                                            <td>{payment.date}</td>
                                            {/*<td>{payment.address}</td>*/}
                                            <td>{payment.slip}</td>
                                        </tr>
                                    );
                                })}


                            </tbody>
                        </table>

                    </div>

                    <br></br>

                    <a className="btn btn-outline-success" href="#" onClick={generatePDF} style={{ color: 'black', borderColor: 'black' }}>
                        <i className="fas fa-download"></i>&nbsp;Download
                    </a>

                    <br></br>



                </div>
            </div>

            <br></br>
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