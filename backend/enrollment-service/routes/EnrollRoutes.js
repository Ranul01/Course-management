const express = require("express");
const Enrollment = require("../modules/EnrollmentModule");
const sendEmail = require("../utils/sendEmail");
const router = express.Router();
const accountSid = ACCSID;
const authToken = 'a2453b9535e6f2849644ef5db8b9ab69';
const client = require('twilio')(accountSid, authToken);



router.post("/add",async(req,res)=>{
    const name = req.body.name;
    const code = req.body.code;
    const email = req.body.email;
    const date =  req.body.date;
    const slip = req.body.slip;
   


    const newEnrollment = new Enrollment({
        name,
        code,
        email,
        date,
        slip

    })

    newEnrollment.save().then(()=>{
        res.json(" Added")
    }).catch((err)=>{
        console.log(err);
    })



client.messages.create({
        body: `you have successfully enrolled to ${name} `,
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+94701593496'
    })
    .then(message => console.log(message.sid))
    .catch(err=> console.log(err));

// client.messages
//     .create({
//         body: '',
//         from: '+12076002661',
//         to: '+94701593496'
//     })
//     .then(message => console.log(message.sid))
//     .catch(err=> console.log(err));


    //email
    const message = `
    <h1>Your Enrollment is Successfull<h1>
    <h2>Dear ${email}</h2>
    <p>your have enrolled to ${name} course successfully </p>
    <br/>

    
`

const subject = "Enrollment"
const send_to = email
const sent_from = process.env.EMAIL_USER

await sendEmail(subject, message, send_to, sent_from, )

    
})

router.get("/all",async(req,res)=>{
    await Enrollment.find().then((request)=>{
        res.json(request)
    }).catch((err)=>{
        console.log(err)
    })
})


router.get("/allreq",async(req,res)=>{
    await Enrollment.find().then((request)=>{
        res.json(request)
    }).catch((err)=>{
        console.log(err)
    })
})


router.delete("/delete/:id",async(req,res)=>{
    let enrollmentId = req.params.id;

    await Enrollment.findByIdAndDelete(enrollmentId)
    .then(() => {
        res.status(200).send({status: "Enrollment Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete enrollment", error: err.message});
    })
})



router.get("/get/:id",async(req,resp)=>{
    let result = await Enrollment.findById({_id:req.params.id})
    
    if(result){
        resp.send(result)
    }else{
        resp.send({"result":"No Record Found."})
    }
})


router.put("/update/:id",async(req,resp)=>{
    let result = await Enrollment.findByIdAndUpdate({_id:req.params.id},{$set: req.body})
    
    resp.send(result)
})

module.exports = router
