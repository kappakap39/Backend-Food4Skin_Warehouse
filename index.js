import express from "express";
import cors from "cors";
import salesall from "./routes/sales.js";
import addsalesall from "./routes/sales.js";
import getupdateSale from "./routes/sales.js";
import saleUpdate from "./routes/sales.js";
import showdatasale from "./routes/sales.js";
import deleteSales from "./routes/sales.js";
import provinces from "./routes/provinces.js";
import selectlot from "./routes/lot.js";

import loginadmin from "./routes/admin.js";
import loginsales from "./routes/sales.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/",salesall)

app.use("/addsale",addsalesall)

app.use("/datasales",showdatasale)

app.use("/provinces",provinces)

app.use("/",getupdateSale)

app.use("/",saleUpdate)

app.use("/",deleteSales)

app.use("/",selectlot)

app.use("/",loginadmin)
app.use("/",loginsales)

app.listen(2001,() => {
    console.log("Run server complete");
})
