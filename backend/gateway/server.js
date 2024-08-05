const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(express.json());

app.use('/customer-server', proxy('http://localhost:8071'))
app.use('/course-server', proxy('http://localhost:8072'))
app.use('/enrollment-server', proxy('http://localhost:8073'))
app.use('/payment-server', proxy('http://localhost:8074'))

app.listen(8000, () => {
    console.log("Gateway is Listening to Port 8000");
});