import { cartmodel } from "../DB/models/cart.model.js"


export const removefromcart=async(req,res,next)=>{
    try {
        const productId=req.params.id
        const userId=req.user.id
        const cart=await cartmodel.findOneAndDelete({userId,productId})
        return res.json({message:"product deleted from cart",cart})
    } catch (err) {
        next(err)
    }
}

export const addtocart = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const userId = req.user.id;
        const { quantity } = req.body;

        // دور هل المنتج موجود بالفعل
        const isexist = await cartmodel.findOne({ userId, productId });

        // لو المنتج موجود
        if (isexist) {
        const newquantity = isexist.quantity + quantity;

        // لو الكمية الجديدة <= 0 → احذف المنتج من الكارت
        if (newquantity <= 0) {
            await cartmodel.findOneAndDelete({ userId, productId });
            return res.json({ message: "Product removed from cart" });
        }

        // غير كده → اعمل update للكمية
        const cartupdate = await cartmodel.findOneAndUpdate(
            { userId, productId },
            { quantity: newquantity },
            { new: true }
        );
        return res.json({ message: "Cart updated", cart: cartupdate });
        }
        // لو المنتج مش موجود → ضيفه جديد
        if (quantity > 0) {
        const cart = await cartmodel.create({ userId, productId, quantity });
        return res.json({ message: "Product added to cart", cart });
        } else {
        return res.status(400).json({ message: "Quantity must be greater than 0" });
        }

    } catch (err) {
        next(err)
    }
};




export const getcart=async(req,res,next)=>{
    try {
        const userId=req.user.id
        const carts=await cartmodel.find({userId}).populate("productId")
        return res.json({message:"get cart",carts})
    } catch (err) {
        next(err)
    }
}

