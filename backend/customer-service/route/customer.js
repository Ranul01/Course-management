const express = require("express");
const CustomerData = require("../modules/CostomerMoule");
const router = express.Router();
const stripe = require("stripe")("sk_test_51NqHFfB36akorYVl66XfLD8NSaoMvad28vPp0at2SXWbA6A28DaLvsWZFAlE5dGQJkWtPCyIeub9MZYh12bHvIvL009W00Mftn")


router.post("/login", async(req,res)=>{
    const{username,password}=req.body

    try{
        const check = await CustomerData.findOne({username:username, password:password})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("notexist")
    }

})


router.post("/register",async(req,res)=>{
    const{fullname,username,email,address,password,repassword}=req.body

    const data ={
        fullname:fullname,
        username:username,
        email:email,
        address:address,
        password:password,
        repassword:repassword
        
    }

    try{
        const check = await CustomerData.findOne({username:username})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await CustomerData.insertMany([data])
        }
    }
    catch(e){
        res.json("notexist")
    }
})


router.post("/repass",async(req,res)=>{
    try{
        const username=req.body.username
        const check=await CustomerData.findOne({username:username})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    } catch(error) {
        res.json('fail')
        
    }
})


router.post("/checkout",async(req,res)=>{
    console.log(req.body) 

    let error,status

    try{

      const{product01,token} = req.body

      const customer = await stripe.customers.create({
        email: token.email,
        source:token.id
      })
      const key = uuid()
      const charge = await stripe.charges.create(
        {
          amount: product01.price * quantity001 * 100,
          currency: "lkr",
          customer: customer.id,
          receipt_email: token.email,
          shipping:{
            name:token.card.name,
            address:{
              line1:token.card.address_line1,
              line2:token.card.address_line2,
              city:token.card.address_city,
              country:token.card.address_country,
              postal_code:token.card.address_zip,
            },
          },
        },
        {
          key,
        }
      );

      console.log("Charge:",{charge});
      status = "success";

    }catch(error){
      console.log(error)
      status = "failure";
    }
    res.json({error,status});
})


module.exports = router