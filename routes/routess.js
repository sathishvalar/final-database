const express=require('express');
const router=express.Router();
const SignupTemcopy=require('../model/signupmodel');

router.post("/signup",(req,res)=>
    {
        const newUser=new SignupTemcopy
        ({
            name:req.body.name,
            age:req.body.age,   
            email:req.body.email, 
            contact:req.body.contact,
            consultant:req.body.consultant,
            

        })

        newUser.save()
        .then(data=>
            {
               res.json(data);
                console.log('data added successfully');
              
            })
        .catch(error=>
            {
               res.json(error)
            })

    })

    module.exports=router;