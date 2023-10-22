import express from "express";
import {selectlot, NameProduct, ShowProduct, addproductLOT, lot, Showlot, selectlotExpire, ShowProductTAB, selectTABImport,
    ShowProductTABExport, ShowProductTABExport2, ShowProductImport, selectlotExport, addRequisition, Lotforproduct, lotUpdate, ShowProductLOT,
    ShowProductBill, BillOd, PR_LOTID, ShowBill} from "../controller/lot.js"

const router = express.Router();

//http://localhost:2001/lot
router.get("/lot",lot);
//http://localhost:2001/BillOd
router.get("/BillOd",BillOd);

//http://localhost:2001/selectlot
router.get("/selectlot",selectlot);

//http://localhost:2001/selectTABImport
router.get("/selectTABImport",selectTABImport);

//http://localhost:2001/selectlotExpire
router.get("/selectlotExpire",selectlotExpire);

//http://localhost:2001/selectlotExport/:id
router.get("/selectlotExport/:id",selectlotExport);

//http://localhost:2001/NameProduct
router.get("/NameProduct",NameProduct);
//http://localhost:2001/Lotforproduct/:id
router.get("/Lotforproduct/:id", Lotforproduct);
//http://localhost:2001/PR_LOTID/:id
router.get("/PR_LOTID/:id", PR_LOTID);

//http://localhost:2001/ShowProduct/:id
router.get("/ShowProduct/:id",ShowProduct);
//http://localhost:2001/ShowProductTAB/:id
router.get("/ShowProductTAB/:id",ShowProductTAB);
//http://localhost:2001/ShowProductImport/:id
router.get("/ShowProductImport/:id",ShowProductImport);
//http://localhost:2001/ShowProductTABExport/:id
router.get("/ShowProductTABExport/:id",ShowProductTABExport);

//http://localhost:2001/ShowProductTABExport2/:idnamepr/:id
router.get("/ShowProductTABExport2/:idnamepr/:id",ShowProductTABExport2);

//http://localhost:2001/ShowProductLOT/:id
router.get("/ShowProductLOT/:id",ShowProductLOT);
//http://localhost:2001/ShowProductBill/:id
router.get("/ShowProductBill/:id",ShowProductBill);

//http://localhost:2001/addproductLOT
router.post("/addproductLOT",addproductLOT);

//http://localhost:2001/addRequisition
router.post("/addRequisition",addRequisition);

//http://localhost:2001/Showlot/:ID_lot
router.get("/Showlot/:ID_lot",Showlot);
//http://localhost:2001/ShowBill/:Bill
router.get("/ShowBill/:Bill",ShowBill);

//http://localhost:2001/lotUpdate/:id
router.put("/lotUpdate/:id",lotUpdate);

export default router