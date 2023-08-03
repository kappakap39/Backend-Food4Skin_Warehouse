import express from "express";
import {selectSales} from "../controller/sales.js"
import {addsales} from "../controller/sales.js"
import {getupdateSale} from "../controller/sales.js"
import {saleUpdate} from "../controller/sales.js"
import {showdatasale} from "../controller/sales.js"
import {deleteSales} from "../controller/sales.js"

const router = express.Router();

router.get("/showall",selectSales);
router.post("/addsale",addsales);

router.get("/datasale/:ID_sales",showdatasale);

//http://localhost:2001/getupdateSale/getupdateSale/
router.get("/getupdateSale/:id",getupdateSale);

//http://localhost:2001/saleUpdate/saleUpdate/
router.put("/saleUpdate/:id",saleUpdate);

//http://localhost:2001/deleteSales
router.delete("/deleteSales/:ID_sales",deleteSales);

export default router