

import { productmodel } from "../DB/models/product.model.js"

export const getproducts=async(req,res,next)=>{
    try {
        const products=await productmodel.find()
        res.json({message:"get success",products})
    } catch (err) {
        next(err)
    }

}

export const addproduct=async(req,res,next)=>{
    try {
        // const {name}=req.body
        const product=await productmodel.create(req.body)
        res.json({message:"added",product})
    } catch (err) {
        next(err)
    }
}


export const getproductbyId=async(req,res,next)=>{
    try {
        const {id}=req.params
        const product=await productmodel.findById(id)
        res.json({message:"get one", product})
    } catch (err) {
        next(err)
    }
}

export const updateproduct=async(req,res,next)=>{
    try {
        // const {name}=req.body
        const {id}=req.params
        const product=await productmodel.findByIdAndUpdate(id,req.body,{new:true})
        res.json({message:"updated",product})
    } catch (err) {
        next(err)
    }
}


export const Deleteproduct=async(req,res,next)=>{
    try {
        const {id}=req.params
        const product=await productmodel.findByIdAndDelete(id)
        res.json({message:"delete success",product})
    } catch (error) {
        res.json({message:"error to delete",error})
    }
}


export const getNewProduct=async(req,res,next)=>{
    try {
        const newProducts= await productmodel.find({isNewProduct:true})
        if (!newProducts) {
            return res.json({message:"not found new product"})
        }
        return res.json({message:"get new success",newProducts})
    } catch (err) {
        next(err)
    }
}

export const getFeaturedProduct=async(req,res,next)=>{
    try {
        const FeaturedProducts= await productmodel.find({isFeatured:true})
        if (!FeaturedProducts) {
            return res.json({message:"not found featured product"})
        }
        return res.json({message:"get featured success",FeaturedProducts})
    } catch (err) {
        next(err)
    }
}


export const getsearch=async(req,res,next)=>{
    try {
        let { searchitem, categoryId,brandId,page=2,pagesize=2,sortby,sortorder}=req.query
        let queryfilter={}
        if (!sortby) {
            sortby="price"
        }
        if (!sortorder) {
            sortorder=-1
        }
        if (searchitem) {
            queryfilter.$or=[
                {name:{ $regex: searchitem, $options: "i" }},
                {shortDescribtion:{ $regex: searchitem, $options: "i" }},
            ]
        }
        if (categoryId) {
            queryfilter.categoryId=categoryId
        }
        if (brandId) {
            queryfilter.brandId=brandId
        }
        const searchProducts= await productmodel.find(queryfilter).sort({[sortby]:+sortorder}).skip((+page-1)* +pagesize).limit(+pagesize)
        if (!searchProducts || searchProducts.length === 0) {
            return res.json({message:"not found products"})
        }
        return res.json({message:"get search success",searchProducts})
    } catch (err) {
        next(err)
    }
}




