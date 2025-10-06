
import mongoose, {  Schema } from "mongoose";

const cartschema=new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    productId:{
        type:Schema.Types.ObjectId,
        ref:"product"
    },
    quantity:Number
})


export const cartmodel=mongoose.model("cart",cartschema)
