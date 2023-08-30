import express from "express";
import {selectlot, NameProduct, ShowProduct} from "../controller/lot.js"

const router = express.Router();

//http://localhost:2001/selectlot
router.get("/selectlot",selectlot);

//http://localhost:2001/NameProduct
router.get("/NameProduct",NameProduct);

//http://localhost:2001/ShowProduct/:id
router.get("/ShowProduct/:id",ShowProduct);

export default router