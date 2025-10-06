import { usermodel } from "../DB/models/user.model.js"
import bycrpt from 'bcrypt'
import   jwt  from "jsonwebtoken"

export const register=async(req,res,next)=>{
try {
    const {name,email,password,isAdmin}=req.body
    const isemailexist=await usermodel.findOne({email})
    if (isemailexist) {
        return res.status(403).json({message:"this email is already exist"})
    }
    if (name &&email && password) {
        const hashpass=await bycrpt.hash(password,+process.env.private_num)
        const user= await usermodel.create({name,email,password:hashpass,isAdmin})
        const token= jwt.sign({email, id:user._id},process.env.secret_key,{expiresIn:"1d"})
        return res.status(200).json({message:"sign success",user,token})
    }
    return res.status(403).json({message:"faild sign up"})
} catch (err) {
    next(err)
    
}
}



export const login=async(req,res,next)=>{
try {
    const {email,password}=req.body
    const user=await usermodel.findOne({email})
    
    if (!user) {
        return res.status(403).json({message:"invalid email or password"})
    }
    
    if (!email||!password) {
        return res.status(403).json({message:"faild sign up"})
    }
    const ismatch= bycrpt.compareSync(password ,user.password)
    console.log(ismatch);
    
    if (ismatch) {
        const token= jwt.sign({email, id:user._id},process.env.secret_key,{expiresIn:"1d"})
        return res.status(200).json({message:"login success",token,user})  
    }
    return res.status(403).json({message:"faild sign up"})
} catch (err) {
    next(err)
}
}




