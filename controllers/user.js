import {User} from "../models/user.js"


export const getallusers=async(req,res)=>{
    const users=await User.find({})
    
    // query is an object
    res.json({
        success:true,
        users

    })
}
export const register=async(req,res)=>{
    const{name,email,password}=req.body;
    await User.create({
        name,
        email,
        password,
    })
    res.status(201).cookie("temp","lol").json({
        success:true,
        message:"User created succcessfully"
    })
}
export const userparam=async(req,res)=>{
    const{id}=req.params
    //console.log(req.params)
   const users=await User.findById(id)
    res.json({
        success:true,
        users,

    })
}

export const userquery=async(req,res)=>{
    const{id}=req.query;
    const users=await User.findById(id)



    res.json({
        success:true,
        users,

    })
}
