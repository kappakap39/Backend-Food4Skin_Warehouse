import express from "express";
import {selectlot, NameProduct, ShowProduct, addproductLOT, lot, Showlot} from "../controller/lot.js"

const router = express.Router();

//http://localhost:2001/lot
router.get("/lot",lot);

//http://localhost:2001/selectlot
router.get("/selectlot",selectlot);

//http://localhost:2001/NameProduct
router.get("/NameProduct",NameProduct);

//http://localhost:2001/ShowProduct/:id
router.get("/ShowProduct/:id",ShowProduct);

//http://localhost:2001/addproductLOT
router.post("/addproductLOT",addproductLOT);

//http://localhost:2001/Showlot/:ID_lot
router.get("/Showlot/:ID_lot",Showlot);

export default router