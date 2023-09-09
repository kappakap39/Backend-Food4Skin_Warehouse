import db from "../db.js";

export const lot = (req, res) => {

    const sql = "SELECT * FROM `lotproduct`"
    db.query(sql, (err, result) => {
        if (err) return res.json({ message: "error run result all Lot" });
        return res.json(result);

    })
}
//!ไม่มีการเช็คเวลา
// SELECT * FROM `lotproduct` INNER JOIN sales ON sales.ID_sales = lotproduct.ID_sales INNER JOIN product ON product.ID_product = lotproduct.ID_product ORDER BY `ID_lot` DESC
//!แสดงแค่วันที่ยังไม่หมดอายุ
// SELECT * FROM `lotproduct`
// INNER JOIN sales ON sales.ID_sales = lotproduct.ID_sales
// INNER JOIN product ON product.ID_product = lotproduct.ID_product
// WHERE `date_list_EXP` >= NOW()
// ORDER BY `ID_lot` DESC
//!แสดงวันที่ผ่านมาแล้ว
// SELECT * FROM `lotproduct`
// INNER JOIN sales ON sales.ID_sales = lotproduct.ID_sales
// INNER JOIN product ON product.ID_product = lotproduct.ID_product
// WHERE `date_list_EXP` < CURDATE()
// ORDER BY `ID_lot` DESC
export const selectlot = (req, res) => {
    const sql = `SELECT * FROM lotproduct
    INNER JOIN sales ON sales.ID_sales = lotproduct.ID_sales
    INNER JOIN product ON product.ID_product = lotproduct.ID_product
    WHERE date_list_EXP >= NOW()
    ORDER BY ID_lot DESC`;

    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.json({
                Message: "Error inside server",
            });
        }
        return res.json(result);
    });
}
export const selectlotExpire = (req, res) => {
    const sql = `SELECT * FROM lotproduct
    INNER JOIN sales ON sales.ID_sales = lotproduct.ID_sales
    INNER JOIN product ON product.ID_product = lotproduct.ID_product
    WHERE date_list_EXP < CURDATE()
    ORDER BY ID_lot DESC`;

    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.json({
                Message: "Error inside server",
            });
        }
        return res.json(result);
    });
}
export const selectlotExport = (req, res) => {
    const sql = `
        SELECT
            lotproduct.ID_lot,
            requisition.Dete_requisition,
            requisition.remark,
            sales.fullname AS sales_fullname,
            Nameproduct AS product_name,
            agent.fullname AS agent_fullname,
            requisition.Amount_products
        FROM
            requisition
        INNER JOIN
            sales ON sales.ID_sales = requisition.ID_sales
        INNER JOIN
            agent ON agent.ID_agent = requisition.ID_agent
        INNER JOIN
            lotproduct ON lotproduct.ID_lot = requisition.ID_lot
        WHERE 
            requisition.Dete_requisition <= CURRENT_DATE()
        ORDER BY
            requisition.Dete_requisition DESC;
    `;

    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.json({
                Message: "Error inside server",
            });
        }
        return res.json(result);
    });
}
export const selectTABImport = (req, res) => {
    const sql = `SELECT * FROM lotproduct
    INNER JOIN sales ON sales.ID_sales = lotproduct.ID_sales
    INNER JOIN product ON product.ID_product = lotproduct.ID_product
    ORDER BY ID_lot DESC`;

    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.json({
                Message: "Error inside server",
            });
        }
        return res.json(result);
    });
}

//select all NameProduct
export const NameProduct = (req, res) => {

    const sql = "SELECT DISTINCT( `Name_product` ),`ID_product` FROM `product`"
    db.query(sql, (err, result) => {
        if (err) return res.json({ message: "error run result all" });
        return res.json(result);

    })
}

export const Lotforproduct =(req, res) => {
    const sql = "SELECT * FROM `lotproduct` WHERE `ID_product` = ?";
    const {id} = req.params;

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.json({
                Message: "Error inside server"
            });
        }
        return res.json(result);
    });
};



export const ShowProduct = (req, res) => {
    const sql = "SELECT * FROM `lotproduct` INNER JOIN sales ON sales.ID_sales = lotproduct.ID_sales INNER JOIN product ON product.ID_product = lotproduct.ID_product WHERE product.Name_product =? AND date_list_EXP >= NOW() ORDER BY `ID_lot` DESC";

    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.json({
                Message: "Error inside server",
            });
        }
        return res.json(result);
    });
};
export const ShowProductTAB = (req, res) => {
    const sql = "SELECT * FROM `lotproduct` INNER JOIN sales ON sales.ID_sales = lotproduct.ID_sales INNER JOIN product ON product.ID_product = lotproduct.ID_product WHERE product.Name_product =?  AND date_list_EXP < CURDATE() ORDER BY `ID_lot` DESC";

    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.json({
                Message: "Error inside server",
            });
        }
        return res.json(result);
    });
};
export const ShowProductImport = (req, res) => {
    const sql = "SELECT * FROM `lotproduct` INNER JOIN sales ON sales.ID_sales = lotproduct.ID_sales INNER JOIN product ON product.ID_product = lotproduct.ID_product WHERE Nameproduct =?  ORDER BY `ID_lot` DESC";

    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.json({
                Message: "Error inside server",
            });
        }
        return res.json(result);
    });
};
export const ShowProductTABExport = (req, res) => {
    const sql = `
        SELECT
            lotproduct.ID_lot,
            requisition.Dete_requisition,
            requisition.remark,
            sales.fullname AS sales_fullname,
            Nameproduct AS product_name,
            agent.fullname AS agent_fullname,
            requisition.Amount_products
        FROM
            requisition
        INNER JOIN
            sales ON sales.ID_sales = requisition.ID_sales
        INNER JOIN
            agent ON agent.ID_agent = requisition.ID_agent
        INNER JOIN
            lotproduct ON lotproduct.ID_lot = requisition.ID_lot
        WHERE product.Name_product =? AND
            requisition.Dete_requisition <= CURRENT_DATE()
        ORDER BY
            requisition.Dete_requisition DESC;
    `;

    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.json({
                Message: "Error inside server",
            });
        }
        return res.json(result);
    });
};


//!add product
export const addproductLOT = (req, res) => {
    const sql =
        "INSERT INTO `lotproduct`(`ID_product`,`Inventories_lot`,`date_list`,`date_list_EXP`,`Quantity`,`remark`,`ID_sales`, date_import) VALUES (?)";
    const values = [

        req.body.ID_product,
        req.body.Inventories_lot,
        req.body.date_list,
        req.body.date_list_EXP,
        req.body.Quantity,
        req.body.remark,
        req.body.ID_sales,
        req.body.date_import,
    ];
    db.query(sql, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
};
//!add Requisition
export const addRequisition = (req, res) => {
    const sql =
        "INSERT INTO `requisition` (`ID_requisition`,`Dete_requisition`,`Amount_products`,`remark`,`ID_sales`,`ID_agent`, `ID_lot`, `Nameproduct`) VALUES (?)";
    const values = [

        req.body.ID_requisition,
        req.body.Dete_requisition,
        req.body.Amount_products,
        req.body.remark,
        req.body.ID_sales,
        req.body.ID_agent,
        req.body.ID_lot,
        req.body.Nameproduct,
    ];
    db.query(sql, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
};

//update showone lot
export const Showlot = (req, res) => {
    const sql = `SELECT * 
    FROM lotproduct
    INNER JOIN product ON product.ID_product = lotproduct.ID_product
    INNER JOIN sales ON sales.ID_sales = lotproduct.ID_sales WHERE ID_lot = ?`;

    const ID_lot = req.params.ID_lot;

    db.query(sql, [ID_lot], (err, dataRead) => {
        if (err) {
            return res.json({ Message: "Error inside server" });
        }
        return res.json(dataRead);
    });
};
