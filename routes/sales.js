import express from "express";
import {selectSales} from "../controller/sales.js"
import {addsales} from "../controller/sales.js"
import {getupdateSale} from "../controller/sales.js"
import {saleUpdate} from "../controller/sales.js"
import {showdatasale} from "../controller/sales.js"
import {deleteSales} from "../controller/sales.js"
import {loginsales, checkDuplicateIDcard} from "../controller/sales.js"

const router = express.Router();
//http://localhost:2001/showall
router.get("/showall",selectSales);

//http://localhost:2001/addsale
router.post("/addsale",addsales);

router.get("/datasale/:ID_sales",showdatasale);

//http://localhost:2001/getupdateSale/:id
router.get("/getupdateSale/:id",getupdateSale);

//http://localhost:2001/saleUpdate/:id
router.put("/saleUpdate/:id",saleUpdate);

//http://localhost:2001/deleteSales
router.delete("/deleteSales/:ID_sales",deleteSales);

//http://localhost:2001/loginsales
router.post("/loginsales",loginsales);

//http://localhost:2001/checkDuplicateIDcard/:IDcard
router.get("/checkDuplicateIDcard/:IDcard", checkDuplicateIDcard);

export default router