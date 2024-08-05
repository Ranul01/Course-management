const express = require("express");
const payment = require("../modules/PaymentModule");
const router = express.Router();


router.post("/addpayment",async(req,res)=>{
    const studentName = req.body.studentName;
    const CourseCode = req.body.CourseCode;
    const reqdate =  req.body.reqdate;
    const cnumber =  Number(req.body.cnumber);
    const reqstatus =  req.body.reqstatus;



    const newPayment = await new payment({
        studentName,
        CourseCode,
        reqdate,
        cnumber,
        reqstatus

    })

    newPayment.save().then(()=>{
        res.json(" Added")
    }).catch((err)=>{
        console.log(err);
    })
})


router.get("/allpayment",async(req,res)=>{
    await payment.find().then((staffrequest)=>{
        res.json(staffrequest)
    }).catch((err)=>{
        console.log(err)
    })
})



router.delete("/deletepayment/:id",async(req,res)=>{
    const deletepayment = await payment.deleteOne({_id:req.params.id})

    res.status(200).json({messsage:"Payment deleted!"})

})

router.get("/getpayment/:id",async(req,resp)=>{
    let result = await payment.findById({_id:req.params.id})
    
    if(result){
        resp.send(result)
    }else{
        resp.send({"result":"No Record Found."})
    }
})


router.put("/updatepayment/:id", async(req,resp)=>{
    let result = await payment.findByIdAndUpdate({_id:req.params.id},{$set: req.body})
    
   resp.send(result)
})

module.exports = router
