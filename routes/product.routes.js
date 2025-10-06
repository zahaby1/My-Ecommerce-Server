import { Router } from "express";
import { addproduct, Deleteproduct, getproductbyId, getproducts, updateproduct } from "../handler/product.handler.js";

const productRouter=Router()

productRouter.get("",getproducts)
productRouter.post("",addproduct)
productRouter.get("/:id",getproductbyId)
productRouter.put("/:id",updateproduct)
productRouter.delete("/:id",Deleteproduct)



export default productRouter
