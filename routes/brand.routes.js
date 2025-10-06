
import { Router } from "express";

import { addbrand, Deletebrand, getbrandbyId, getbrands, updatebrand } from "../handler/brand.handler.js";
const brandRouter=Router()

brandRouter.get("",getbrands)
brandRouter.post("",addbrand)
brandRouter.get("/:id",getbrandbyId)
brandRouter.put("/:id",updatebrand)
brandRouter.delete("/:id",Deletebrand)



export default brandRouter

