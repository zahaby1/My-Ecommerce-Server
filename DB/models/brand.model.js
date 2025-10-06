import mongoose, {   Schema } from "mongoose";

const brandschema=new Schema({
    name:String,
})


export const brandmodel=mongoose.model("brand", brandschema)
