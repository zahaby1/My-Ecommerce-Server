import mongoose from "mongoose";


 export const Dbconnection=async ()=>{
    return mongoose.connect(`mongodb+srv://${process.env.user_name}:${process.env.password}@cluster0.rlirmp8.mongodb.net/${process.env.mongo_db}?retryWrites=true&w=majority&appName=Cluster0`)
    .then(()=>{console.log('DB connection successfully');
    })
    .catch(()=>{console.log('error connection');
    })
}

