import express from "express";
const router = express.Router();

import { provinces, amphures, districts} from "../controller/provinces.js";

//http://localhost:2001/provinces/provinces 
router.get("/provinces", provinces);

//http://localhost:2001/provinces/provinces/:id/amphures
router.get("/provinces/:id/amphures", amphures);

//http://localhost:2001/provinces/amphures/:amphure_id
router.get("/amphures/:amphure_id", districts);

export default router