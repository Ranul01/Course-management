const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const uuid = require('uuid').v4
const dotenv = require("dotenv")
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8072;

const CourseRoutes = require("./router/CourseRoutes")




app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
   
    useNewUrlParser: true
    
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("mongodb connection success!");
})


app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
})


app.use("/course",CourseRoutes)
