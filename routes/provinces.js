import express from "express";
const router = express.Router();

import { provinces, districts, subdistricts} from "../controller/provinces.js";

//http://localhost:2001/provinces/provinces 
router.get("/provinces", provinces);

//http://localhost:2001/provinces/provinces/:id/districts
router.get("/provinces/:id/districts", districts);

//http://localhost:2001/provinces/districts/:district_id
router.get("/districts/:district_id", subdistricts);

export default router