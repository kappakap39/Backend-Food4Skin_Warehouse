import express from "express";
import {selectlot} from "../controller/lot.js"

const router = express.Router();

//http://localhost:2001/selectlot
router.get("/selectlot",selectlot);

export default router