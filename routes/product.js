import express from "express";
import {addproduct, Showproduct, productOne, productOneUP, productUpdate, deleteproduct, Showtableproduct} from "../controller/product.js"

const router = express.Router();

//http://localhost:2001/Showproduct
router.get("/Showproduct",Showproduct);

//http://localhost:2001/Showproduct
router.get("/Showtableproduct",Showtableproduct);

//http://localhost:2001/addproduct
router.post("/addproduct",addproduct);

//http://localhost:2001/productOne/?
router.get("/productOne/:ID_product",productOne);

//http://localhost:2001/productOneUP/:id
router.get("/productOneUP/:ID_product",productOneUP);

//http://localhost:2001/productUpdate/:id
router.put("/productUpdate/:ID_product",productUpdate);

//http://localhost:2001/deleteproduct
router.delete("/deleteproduct/:ID_product",deleteproduct);

export default router
