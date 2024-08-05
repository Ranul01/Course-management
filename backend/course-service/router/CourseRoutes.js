const express = require("express");
const Course = require("../modules/CourseModule");
const router = express.Router();

router.post("/addcourse", async(req,res)=>{
    const courseName = req.body.courseName;
    const coursePrice =  req.body.coursePrice;
    const description =  req.body.description;



    const newCourse = new Course({
        courseName,
        coursePrice,
        description

    })

    newCourse.save().then(()=>{
        res.json(" Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.get("/allcourse",async(req,res)=>{
    Course.find().then((product)=>{
        res.json(product)
    }).catch((err)=>{
        console.log(err)
    })
})

router.get("/viewcourse",async(req,res)=>{
    Course.find().then((product)=>{
        res.json(product)
    }).catch((err)=>{
        console.log(err)
    })
})


router.delete("/deletecourse/:id",async(req,res)=>{
    let courseId = req.params.id;

    await Course.findByIdAndDelete(courseId)
    .then(() => {
        res.status(200).send({status: "Route Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete route", error: err.message});
    })
})


router.get("/getcoursecard/:id",async(req,resp)=>{
    let result = await Course.findById({_id:req.params.id})
    
    if(result){
        resp.send(result)
    }else{
        resp.send({"result":"No Record Found."})
    }
})

router.get("/getcourse/:id",async(req,resp)=>{
    let result = await Course.findById({_id:req.params.id})
    
    if(result){
        resp.send(result)
    }else{
        resp.send({"result":"No Record Found."})
    }
})



router.put("/updatecourse/:id",async(req,resp)=>{
    let result = await Course .findByIdAndUpdate({_id:req.params.id},{$set: req.body})
    
    resp.send(result)
})




module.exports = router