import mongoose from "mongoose";


 export const Dbconnection=async ()=>{
    return mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.rlirmp8.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority&appName=Cluster0`)
    .then(()=>{console.log('DB connection successfully');
    })
    .catch((err)=>{console.error('error connection',err.message);
    })
}

