const User=require('../model/user-schema')
const userSignup=async(req,res)=>{
try {
    const exist=await User.findOne({username:req.body.username});
    if(req.body.phone.length>10)res.status(401).json({message:'please enter a valid phone no.'});
    if(exist)res.status(401).json({message:'username already exists'});
    const user=req.body;
    const newUser=new User(user);
    await newUser.save();
    res.status(200).json({message:user});
} catch (error) {
    res.status(500).json({message:error.message})
}
}

const userLogin=async(req,res)=>{
    try {
        console.log('abhishek')
        const exist=await User.findOne({username:req.body.username,password:req.body.password});
        if(!exist)res.status(401).json({message:'this username do not exists'});
        const user=req.body;
        console.log(user)
        res.status(200).json({message:user});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports={userSignup,userLogin};