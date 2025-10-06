import  { config } from 'dotenv'
config()
import express from 'express'
import { setupSwagger } from './swagger.js';
import { Dbconnection } from './DB/connection.js'
import categoryRouter from './routes/category.routes.js'
import brandRouter from './routes/brand.routes.js'
import productRouter from './routes/product.routes.js'
import customerRouter from './routes/customers.routes.js'
import userRouter from './routes/user.routes.js'
import orderRouter from './routes/orders.routes.js'
import cors from 'cors'
import { isAdmin, verifyToken } from './midelwares/auth.js'
import { AppError } from './Utils/AppError.js'
const app=express()
const port=process.env.port
app.use(express.json())
app.use(cors())

app.use("/category",verifyToken,isAdmin,categoryRouter)
app.use("/brand",verifyToken,isAdmin,brandRouter)
app.use("/product",verifyToken,isAdmin,productRouter)
app.use("/orders",verifyToken,isAdmin,orderRouter)
app.use("/customer",verifyToken,customerRouter)
app.use("/auth",userRouter)

Dbconnection()


setupSwagger(app);

app.use( (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  });
});



app.listen(port,()=>{
    console.log(`server is running on ${port}`);
    
})




