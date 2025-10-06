import { cartmodel } from "../DB/models/cart.model.js"
import { ordermodel } from "../DB/models/order.model.js"


export const addorder=async(req,res,next)=>{
    try {
        const userId=req.user.id
        const order=req.body
        let status="inprogress"
        const Order=await ordermodel.create({userId,...order,status})
        await cartmodel.deleteMany({ userId });
        res.json({message:"aadd ok",Order})
    } catch (error) {
        res.json({message:"errr order", error:error.message})
    }
}

export const updateOrderStatus=async(req,res,next)=>{
    try {
        const userId=req.user.id
        const orderId=req.params.id
        const {status}=req.body
        const Order=await ordermodel.findOneAndUpdate({_id:orderId},{status},{new:true})
        res.json({message:"aadd ok",Order})
    } catch (err) {
        next(err)
    }
}

export const getorders=async(req,res,next)=>{
    try {
        const userId=req.user.id
        const orders=await ordermodel.find({ userId })
      .populate("items.productId") // يرجع بيانات المنتج لكل item
      .sort({ date: -1 }); // الأحدث أولاً

        if (!orders || orders.length === 0) {
            return res.status(404).json({ message: "No orders found for this user" });
        }

        res.json({message:"get order ok ",orders})
    } catch (err) {
        next(err)
    }
}

export const getAdminOrders=async(req,res,next)=>{
    try {
        const orders=await ordermodel.find()
      .populate("items.productId") // يرجع بيانات المنتج لكل item
      .sort({ date: -1 }); // الأحدث أولاً
        if (!orders || orders.length === 0) {
            return res.status(404).json({ message: "No orders found for this user" });
        }
        res.json({message:"get order ok ",orders})
    } catch (err) {
        next(err)
    }
}


