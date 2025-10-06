import { model, Schema } from "mongoose";

const productschema=new Schema({
    name:String,
    shortDescribtion:String,
    Describtion:String,
    Price:Number,
    Discount:Number,
    images:Array(String),
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:"category"
    },
    brandId:{
        type:Schema.Types.ObjectId,
        ref:"brand"
    },
    isFeatured:Boolean,
    isNewProduct:Boolean
})


export const productmodel=model("product",productschema)
