import mongoose, { model, Schema } from "mongoose";

const orderschema=new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    date: { type: Date, default: Date.now() },
    items:[mongoose.Schema.Types.Mixed],
    paymethod:String,
    address:mongoose.Schema.Types.Mixed,
    totalamount:Number,
    status:String
})


export const ordermodel=model("order",orderschema)