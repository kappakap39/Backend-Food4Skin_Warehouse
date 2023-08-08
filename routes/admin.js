import express from "express";
import {loginadmin} from "../controller/admin.js"

const router = express.Router();

//http://localhost:2001/loginadmin
router.post("/loginadmin",loginadmin);

export default router