
import mongoose from "mongoose";

// export const Dbconnection=async ()=>{
//     return mongoose.connect(process.env.MONGO_DB_URL)
//     .then(()=>{
//         const db_name=mongoose.connection.name
//         console.log('DB connection successfully',db_name);
//     })
//     .catch((err)=>{console.error('error connection',err.message);
//     })
// }

export const Dbconnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB connected successfully:', conn.connection.name);
  } catch (err) {
    console.error('DB connection error:', err.message);
  }
}