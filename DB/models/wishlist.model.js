
import { model, Schema } from "mongoose";

const wishlistschema=new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    productId:{
        type:Schema.Types.ObjectId,
        ref:"product"
    }

})


export const wishlistmodel=model("wishlist",wishlistschema)