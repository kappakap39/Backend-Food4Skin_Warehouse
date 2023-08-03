import express from "express";
import {selectlot} from "../controller/lot.js"

const router = express.Router();

router.get("/selectlot",selectlot);