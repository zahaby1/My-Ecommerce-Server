

import { categorymodel } from "../DB/models/category.model.js"


export const getcategories=async(req,res,next)=>{

    try {
        const categories=await categorymodel.find()
        res.json({message:"get success",categories})
    } catch (err) {
        next(err)
    }

}

export const addcategory=async(req,res,next)=>{
    try {
        const {name}=req.body
        const category=await categorymodel.create({name})
        res.json({message:"added",category})
    } catch (err) {
        next(err)
    }
}


export const getcategorybyId=async(req,res,next)=>{
    try {
        const {id}=req.params
        const category=await categorymodel.findById(id)
        res.json({message:"get one", category})
    } catch (err) {
        next(err)
    }
}

export const updatecategory=async(req,res,next)=>{
    try {
        const {name}=req.body
        const {id}=req.params
        const category=await categorymodel.findByIdAndUpdate(id,{name},{new:true})
        res.json({message:"updated",category})
    } catch (err) {
        next(err)
    }
}


export const Deletecategory=async(req,res,next)=>{
    try {
        const {id}=req.params
        const category=await categorymodel.findByIdAndDelete(id)
        res.json({message:"delete success",category})
    } catch (err) {
        next(err)
    }
}


