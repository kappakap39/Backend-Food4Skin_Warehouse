import express from "express";
import {selectlot, NameProduct, ShowProduct, addproductLOT, lot, Showlot, selectlotExpire, ShowProductTAB, selectTABImport,
    ShowProductTABExport, ShowProductImport, selectlotExport, addRequisition, Lotforproduct, lotUpdate, ShowProductLOT} from "../controller/lot.js"

const router = express.Router();

//http://localhost:2001/lot
router.get("/lot",lot);

//http://localhost:2001/selectlot
router.get("/selectlot",selectlot);

//http://localhost:2001/selectTABImport
router.get("/selectTABImport",selectTABImport);

//http://localhost:2001/selectlotExpire
router.get("/selectlotExpire",selectlotExpire);

//http://localhost:2001/selectlotExport
router.get("/selectlotExport",selectlotExport);

//http://localhost:2001/NameProduct
router.get("/NameProduct",NameProduct);
//http://localhost:2001/Lotforproduct/:id
router.get("/Lotforproduct/:id", Lotforproduct);

//http://localhost:2001/ShowProduct/:id
router.get("/ShowProduct/:id",ShowProduct);
//http://localhost:2001/ShowProductTAB/:id
router.get("/ShowProductTAB/:id",ShowProductTAB);
//http://localhost:2001/ShowProductImport/:id
router.get("/ShowProductImport/:id",ShowProductImport);
//http://localhost:2001/ShowProductTABExport/:id
router.get("/ShowProductTABExport/:id",ShowProductTABExport);
//http://localhost:2001/ShowProductLOT/:id
router.get("/ShowProductLOT/:id",ShowProductLOT);

//http://localhost:2001/addproductLOT
router.post("/addproductLOT",addproductLOT);

//http://localhost:2001/addRequisition
router.post("/addRequisition",addRequisition);

//http://localhost:2001/Showlot/:ID_lot
router.get("/Showlot/:ID_lot",Showlot);

//http://localhost:2001/lotUpdate/:id
router.put("/lotUpdate/:id",lotUpdate);

export default router