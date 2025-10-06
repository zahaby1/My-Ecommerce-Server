import   jwt  from "jsonwebtoken"
import { usermodel } from "../DB/models/user.model.js"

export const verifyToken=async(req,res,next)=>{
    const token=req.header("authorization")
    if (!token) {
        return res.status(400).json({message:"invalid token"})
    }
    const {id}= jwt.verify(token,process.env.SECRET_KEY)
    const user=await usermodel.findById(id)
    req.user=user
    next()
}

export const isAdmin=(req,res,next)=>{
    if ( req.user.isAdmin) {
        return next()
    }
    return res.status(400).json({message:"forbedin"})
}



