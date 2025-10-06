import { wishlistmodel } from "../DB/models/wishlist.model.js"

export const getwishlists=async(req,res,next)=>{
    try {
        const userId=req.user._id     
        const wishlists= await wishlistmodel.find({userId}).populate("productId")
        res.json({message:"get done", wishlists})
    } catch (err) {
        next(err)
    }
}


export const addtowishlist=async(req,res,next)=>{
    try {
        const productId=req.params.id
        const userId=req.user.id
        const wishlist= await wishlistmodel.create({userId,productId})
        res.json({message:"add done",wishlist})
    } catch (err) {
        next(err)
    }
}

export const removefromwishlist=async(req,res,next)=>{
    try {
        const productId=req.params.id
        const userId=req.user.id
        const wishlist= await wishlistmodel.deleteMany({userId,productId})
        res.json({message:"remove done", wishlist})
    } catch (err) {
        next(err)
    }
}


