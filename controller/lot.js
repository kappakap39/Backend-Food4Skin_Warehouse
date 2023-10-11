import db from "../db.js";

export const lot = (req, res) => {

    const sql = "SELECT * FROM `lotproduct`"
    db.query(sql, (err, result) => {
        if (err) return res.json({ message: "error run result all Lot" });
        return res.json(result);

    })
}
export const BillOd = (req, res) => {

    const sql = "SELECT * FROM `requisition` ORDER BY `Bill` DESC LIMIT 1;"
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
    const sql = `SELECT *
    FROM lotproduct
    INNER JOIN sales ON sales.ID_sales = lotproduct.ID_sales
    INNER JOIN product ON product.ID_product = lotproduct.ID_product
    WHERE lotproduct.date_list_EXP >= NOW() AND lotproduct.date_list_EXP >= CURDATE() AND lotproduct.Inventories_lot  > 0
    ORDER BY lotproduct.ID_product, lotproduct.date_list_EXP ASC;
`;
    // const sql = `SELECT * FROM lotproduct
    // INNER JOIN sales ON sales.ID_sales = lotproduct.ID_sales
    // INNER JOIN product ON product.ID_product = lotproduct.ID_product
    // WHERE date_list_EXP >= NOW()
    // ORDER BY ID_lot DESC`;

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
    const sql = `SELECT *
    FROM lotproduct
    INNER JOIN sales ON sales.ID_sales = lotproduct.ID_sales
    INNER JOIN product ON product.ID_product = lotproduct.ID_product
    WHERE date_list_EXP < CURDATE()
    ORDER BY date_list_EXP DESC;
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
export const selectlotExport = (req, res) => {
    const sql = `
    SELECT
    lotproduct.ID_lot,
    lotproduct.Lot_ID,
    requisition.Dete_requisition,
    lotproduct.date_import,
    requisition.remark,
    sales.fullname AS sales_fullname,
    product.Name_product AS Name_product,
    agent.fullname AS agent_fullname,
    requisition.Amount_products,
    requisition.Bill
FROM
    requisition
INNER JOIN
    sales ON sales.ID_sales = requisition.ID_sales
INNER JOIN
    agent ON agent.ID_agent = requisition.ID_agent
INNER JOIN
    lotproduct ON lotproduct.ID_lot = requisition.ID_lot
INNER JOIN
    product ON product.ID_product = requisition.ID_product
ORDER BY
ID_requisition DESC;
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
    //     const sql = `SELECT * FROM lotproduct
    //     INNER JOIN sales ON sales.ID_sales = lotproduct.ID_sales
    //     INNER JOIN product ON product.ID_product = lotproduct.ID_product
    //     ORDER BY lotproduct.ID_product, lotproduct.date_list_EXP ASC`;
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

    const sql = "SELECT DISTINCT( `Name_product` ),`ID_product`,`Production_point`,`Retail_price`,`Level_1_price`,`Level_2_price`,`Level_3_price` FROM `product`"
    db.query(sql, (err, result) => {
        if (err) return res.json({ message: "error run result all" });
        return res.json(result);

    })
}

export const Lotforproduct = (req, res) => {
    const sql = `SELECT * 
    FROM lotproduct 
    INNER JOIN product ON product.ID_product = lotproduct.ID_product
    WHERE Inventories_lot >= 1 
      AND lotproduct.ID_product = ? 
      AND date_list_EXP >= CURDATE();
    `;
    const { id } = req.params;

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.json({
                Message: "Error inside server"
            });
        }
        return res.json(result);
    });
};
export const PR_LOTID = (req, res) => {
    const sql = `SELECT * FROM lotproduct WHERE ID_product = ?`;
    const { id } = req.params;

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
    const sql = "SELECT * FROM `lotproduct` INNER JOIN sales ON sales.ID_sales = lotproduct.ID_sales INNER JOIN product ON product.ID_product = lotproduct.ID_product WHERE product.Name_product =? AND date_list_EXP >= NOW() AND lotproduct.date_list_EXP >= CURDATE() AND lotproduct.Inventories_lot  > 0 ORDER BY `ID_lot` DESC";

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
    const sql = `SELECT *
    FROM lotproduct
    INNER JOIN sales ON sales.ID_sales = lotproduct.ID_sales
    INNER JOIN product ON product.ID_product = lotproduct.ID_product
    WHERE product.Name_product = ?
      AND date_list_EXP < CURDATE()
    ORDER BY date_list_EXP DESC`;

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
    const sql = "SELECT * FROM `lotproduct` INNER JOIN sales ON sales.ID_sales = lotproduct.ID_sales INNER JOIN product ON product.ID_product = lotproduct.ID_product WHERE Name_product =?  ORDER BY `ID_lot` DESC";

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
    lotproduct.Lot_ID,
    requisition.Dete_requisition,
    lotproduct.date_import,
    requisition.remark,
    sales.fullname AS sales_fullname,
    product.Name_product AS Name_product,
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
INNER JOIN product ON requisition.ID_product = product.ID_product
WHERE ID_product = ? AND
    requisition.Dete_requisition <= CURRENT_DATE()
ORDER BY ID_requisition DESC;
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
export const ShowProductLOT = (req, res) => {
    const sql = `
    SELECT
    lotproduct.ID_lot,
    lotproduct.Lot_ID,
    lotproduct.Inventories_lot,
    lotproduct.date_list,
    lotproduct.date_import,
    requisition.Dete_requisition,
    requisition.remark,
    sales.fullname AS sales_fullname,
    product.Name_product AS Name_product,
    agent.fullname AS agent_fullname,
    requisition.Amount_products,
    requisition.Bill,
    ID_requisition
FROM
    requisition
INNER JOIN
    sales ON sales.ID_sales = requisition.ID_sales
    INNER JOIN
    product ON product.ID_product = requisition.ID_product
INNER JOIN
    agent ON agent.ID_agent = requisition.ID_agent
    INNER JOIN
    lotproduct ON lotproduct.ID_lot = requisition.ID_lot
WHERE requisition.ID_lot = ? AND
    requisition.Dete_requisition <= CURRENT_DATE()
ORDER BY ID_requisition DESC;
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
        "INSERT INTO `lotproduct`(`ID_product`, `Lot_ID`, `Inventories_lot`,`date_list`,`date_list_EXP`,`Quantity`,`remark`,`ID_sales`, date_import) VALUES (?)";
    const values = [

        req.body.ID_product,
        req.body.Lot_ID,
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
        "INSERT INTO `requisition` (`Dete_requisition`,`Amount_products`,`remark`,`ID_sales`,`ID_agent`, `ID_lot`, `Bill` , `ID_product`) VALUES (?)";
    const values = [
        
        req.body.Dete_requisition,
        req.body.Amount_products,
        req.body.remark,
        req.body.ID_sales,
        req.body.ID_agent,
        req.body.ID_lot,
        req.body.Bill,
        req.body.ID_product,
        
    ];
    db.query(sql, [values], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: "An error occurred while inserting data" });
        }
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


//! update lot
export const lotUpdate = (req, res) => {
    const id = req.params.id;
    const sql = "UPDATE lotproduct SET `Inventories_lot`=? WHERE `ID_lot` = ?";

    db.query(
        sql,
        [
            req.body.Inventories_lot,
            id,
        ],

        (err, result) => {
            if (err) {
                return res.json({ Message: " Error inside server" });
            }
            return res.json(result);
        }
    );
};