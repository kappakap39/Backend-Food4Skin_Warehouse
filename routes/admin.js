import express from "express";
import {loginadmin} from "../controller/admin.js"
import {getupdateAdmin} from "../controller/admin.js"
import {adminUpdate} from "../controller/admin.js"

const router = express.Router();

//http://localhost:2001/loginadmin
router.post("/loginadmin",loginadmin);

//http://localhost:2001/getupdateAdmin/:id
router.get("/getupdateAdmin/:id",getupdateAdmin);

//http://localhost:2001/adminUpdate/:id
router.put("/adminUpdate/:id",adminUpdate);

export default router