import { Router } from "express";
import { getAdminOrders, updateOrderStatus } from "../handler/order.handler.js";
const orderRouter=Router()


orderRouter.get("/",getAdminOrders)
orderRouter.patch("/:id",updateOrderStatus)


export default orderRouter
