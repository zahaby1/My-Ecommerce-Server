
import { Router } from "express";
import { addcategory, Deletecategory, getcategories, getcategorybyId, updatecategory } from "../handler/category.handler.js";
const categoryRouter=Router()

categoryRouter.get("",getcategories)
categoryRouter.post("",addcategory)
categoryRouter.get("/:id",getcategorybyId)
categoryRouter.put("/:id",updatecategory)
categoryRouter.delete("/:id",Deletecategory)



export default categoryRouter

