import { Router } from "express";
import { getFeaturedProduct, getNewProduct, getproductbyId, getsearch } from "../handler/product.handler.js";
import { getcategories } from "../handler/category.handler.js";
import { getbrands } from "../handler/brand.handler.js";
import { addtowishlist, getwishlists, removefromwishlist } from "../handler/wishlist.handler.js";
import { addtocart, getcart, removefromcart } from "../handler/cart.handler.js";
import { addorder, getorders } from "../handler/order.handler.js";

const customerRouter=Router()
customerRouter.get("/home/new-products",getNewProduct)
customerRouter.get("/home/featured-products",getFeaturedProduct)
customerRouter.get("/categories",getcategories)
customerRouter.get("/product",getsearch)
customerRouter.get("/product/:id",getproductbyId)
customerRouter.get("/brands",getbrands)
customerRouter.get("/wishlists",getwishlists)
customerRouter.post("/wishlists/:id",addtowishlist)
customerRouter.delete("/wishlists/:id",removefromwishlist)
customerRouter.get("/carts",getcart)
customerRouter.post("/carts/:id",addtocart)
customerRouter.delete("/carts/:id",removefromcart)

customerRouter.post("/order",addorder)
customerRouter.get("/order",getorders)

export default customerRouter