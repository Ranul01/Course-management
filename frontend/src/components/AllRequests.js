import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { Link } from 'react-router-dom';




export default function AllRequests() {

    const conponentPDF = useRef();
    const [requests, setRequests] = useState([]);
    const [search, setsearch] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(search)



    useEffect(() => {
        function getRequests() {
            axios.get("http://localhost:8000/enrollment-server/enroll/all").then((res) => {
                setRequests(res.data);
                setLoading(false);
                console.log(res);
            }).catch((err) => {
                alert(err.message);


            })
        }
        getRequests();



    })






    const deleteRequest = async (id) => {
        console.warn(id)
        let result = await fetch(`http://localhost:8000/enrollment-server/enroll/delete/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {

            alert("Delete Successfully")

        }
    }

    const generatePDF = useReactToPrint({
        content: () => conponentPDF.current,
        documentTitle: "userdata",
        onAfterPrint: () => alert("Download Successfully")
    });


    const calculateProgress = (enrollment) => {
        // Example: Assuming the enrollment has a status property indicating completion status
        if (enrollment.status === 'completed') {
            return 100;
        } else {
            return 50; // Default progress if status is not completed
        }
    };


    return (
        //class create form


        <div>
            <div class="card bg-dark text-white" >
                <img src="img5.jpeg" class="card-img" alt="..." style={{ height: '375px', filter: 'brightness(40%)' }} />
                <div class="card-img-overlay">
                    <br></br>
                    <br></br>
                    <h1 class="card-title" style={{ fontSize: '90px' }}><b>My</b> <b style={{ color: '#EAB333' }} >Enrollments</b></h1>
                    <br></br>
                    <br></br>
                    <br></br>

                    <div class="btn-group" role="group" aria-label="Basic example" style={{ float: 'right' }}>
                        <Link to='/viewcourse'>
                            <button type="button" class="btn1 btn-success btn-lg" style={{ marginRight: '50px', backgroundColor: '#EAB333', borderColor: '#EAB333' }}>COURSES</button>
                        </Link>
                        <Link to='/requests'>
                            <button type="button" class="btn2 btn-success btn-lg" style={{ marginRight: '50px', backgroundColor: '#EAB333', borderColor: '#EAB333' }}>ENROLL ME</button>
                        </Link>
                        <button type="button" class="btn3 btn-success btn-lg" style={{ marginRight: '50px', backgroundColor: '#EAB333', borderColor: '#EAB333' }}>PAYMENT</button>
                    </div>

                </div>
            </div>





            <div style={{ width: '1350px' }} >
                <br></br>
                <br></br>
                <br></br>
                <form class="d-flex">
                    <input class="form-control me-2 " type="text" onChange={(e) => setsearch(e.target.value)} placeholder="Search by Name" aria-label="Search" />
                </form>
                <br></br>
                <div>
                    <div ref={conponentPDF} style={{ width: '100%' }}>
                        <table class="table table-striped" style={{ backgroundColor: '#D1CDCC' }}>
                            <thead class="table table-dark table-striped">
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Course Name</th>
                                    <th scope="col">Course Code</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Date</th>
                                    {/*<th scope="col">Address</th>*/}
                                    <th scope="col">Payment Slip Link</th>
                                    <th scope="col">Progress</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>



                                {requests.filter((requests) => {
                                    return search.toString().toLowerCase() === '' ? requests : requests.name.toString().toLowerCase().includes(search);

                                }).map((requests, index) => {

                                    return (
                                        <tr key={requests._id}>
                                            <th scoop="row">{index + 1}</th>
                                            <td><a href={`/get/${requests._id}`} style={{ textDecoration: 'none', color: 'black' }}>{requests.name} </a> </td>
                                            <td>{requests.code}</td>
                                            <td>{requests.email}</td>
                                            <td>{requests.date ? new Date(requests.date).toLocaleDateString('en-CA'):''}</td>
                                            {/*<td>{requests.address}</td>*/}

                                            <td>{requests.slip}</td>
                                            <td>

                                                {/* Example progress bar */}
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: `${calculateProgress(requests)}%` }}
                                                        aria-valuenow={calculateProgress(requests)}
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    >
                                                        {`${calculateProgress(requests)}%`}
                                                    </div>
                                                </div>
                                            </td>



                                            <td>
                                                <a className="btn" style={{ backgroundColor: '#EAB333' }} href={`/update/${requests._id}`}>
                                                    <i className="fas fa-edit"></i>&nbsp;Update
                                                </a>

                                                <h>    </h>

                                                <a className="btn btn-secondary" href="#" onClick={() => deleteRequest(requests._id)}>
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