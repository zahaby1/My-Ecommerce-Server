import mongoose, {   Schema } from "mongoose";

const categoryschema=new Schema({
    name:String,
})


export const categorymodel=mongoose.model("category", categoryschema)
