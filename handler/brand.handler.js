import { brandmodel } from "../DB/models/brand.model.js";



export const getbrands=async(req,res,next)=>{

    try {
        const brands=await brandmodel.find()
        res.json({message:"get success",brands})
    } catch (err) {
        next(err)
    }

}

export const addbrand=async(req,res,next)=>{
    try {
        const {name}=req.body
        const brand=await brandmodel.create({name})
        res.json({message:"added",brand})
    } catch (err) {
        next(err)
    }
}


export const getbrandbyId=async(req,res,next)=>{
    try {
        const {id}=req.params
        const brand=await brandmodel.findById(id)
        res.json({message:"get one", brand})
    } catch (err) {
        next(err)
    }
}

export const updatebrand=async(req,res,next)=>{
    try {
        const {name}=req.body
        const {id}=req.params
        const brand=await brandmodel.findByIdAndUpdate(id,{name},{new:true})
        res.json({message:"updated",brand})
    } catch (err) {
       next(err)
    }
}


export const Deletebrand=async(req,res,next)=>{
    try {
        const {id}=req.params
        const brand=await brandmodel.findByIdAndDelete(id)
        res.json({message:"delete success",brand})
    } catch (err) {
        next(err)
    }
}


