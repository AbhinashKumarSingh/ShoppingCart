import express from 'express'
import User from '../models/userModel'
import {getToken} from '../util';
const router=express.Router();

router.post('/signin',async(req,res)=>{
    //console.log(req.body)
    
    
    const signinUser=await User.findOne({
        email:req.body.email,
        password:req.body.password
    });
    console.log(signinUser)
    if(signinUser){
        //console.log(getToken(signinUser))
        res.send({
            _id:signinUser.id,
            name:signinUser.name,
            email:signinUser.email,
            isAdmin:signinUser.isAdmin,
            token:getToken(signinUser)

        })

    }
    else{
        res.status(401).send({msg:"Invalid Email or Password"})
    }

// catch(error){
//     res.send({message:error.message})
// }
})

router.post('/register',async(req,res)=>{
    try{
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    const newUser=user.save()
    if(newUser){
        res.send({
            _id:newUser.id,
            name:newUser.name,
            email:newUser.email,
            isAdmin:newUser.isAdmin,
            token:getToken(newUser)
        })
    }
    else{
        res.status(401).send({msg:"Invalid User Data"})
    }
}
catch(error){
    res.send({message:error.message})
}
    
})

router.get("/createadmin",async(req,res)=>{
    try{
        const user=new User({
            name:'abhi1',
            email:"singh1@gmail.com",
            password:"123456",
            isAdmin:true
        })
        const newUser=await user.save();
        res.send(user);
    }
    catch(error){
        res.send({msg:error.message});
    }
    

    
})

export default router;
