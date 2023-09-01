import express from "express";
import cors from "cors";
import sale from "./routes/sales.js";
import addsalesall from "./routes/sales.js";

import getupdateSale from "./routes/sales.js";
import Admin from "./routes/admin.js";
import saleUpdate from "./routes/sales.js";
import adminUpdate from "./routes/admin.js";
import showdatasale from "./routes/sales.js";
import deleteSales from "./routes/sales.js";
import provinces from "./routes/provinces.js";
import lot from "./routes/lot.js";

import loginadmin from "./routes/admin.js";
import loginsales from "./routes/sales.js";

import product  from "./routes/product.js";
import agent  from "./routes/agent.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/",sale)
app.use("/",product)
app.use("/",agent)
app.use("/",lot)
app.use("/provinces",provinces)
app.use("/",Admin)

app.use("/addsale",addsalesall)
app.use("/datasales",showdatasale)
app.use("/",getupdateSale)
app.use("/",saleUpdate)
app.use("/",adminUpdate)
app.use("/",deleteSales)
app.use("/",loginadmin)
app.use("/",loginsales)

app.listen(2001,() => {
    console.log("Run server complete");
})
