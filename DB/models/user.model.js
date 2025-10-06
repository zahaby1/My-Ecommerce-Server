import { model, Schema } from "mongoose";

const userschema=new Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String,
    isAdmin:{
        type:Boolean,
        default:false
    }
})


export const usermodel=model("user",userschema)

