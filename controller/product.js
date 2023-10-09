import db from "../db.js";

//select all Showproduct
export const Showproduct = (req, res) => {

    const sql = "SELECT * FROM `product` ORDER BY `ID_product` DESC"
    db.query(sql, (err, result) => {
        if (err) return res.json({ message: "error run result all" });
        return res.json(result);

    })
}

//add product
export const addproduct = (req, res) => {
    const sql =
        "INSERT INTO `product`(`Name_product`,`Production_point`,`Retail_price`,`Level_1_price`,`Level_2_price`,`Level_3_price`,`ID_sales`) VALUES (?)";
    const values = [
        
        req.body.Name_product,
        req.body.Production_point,
        req.body.Retail_price,
        req.body.Level_1_price,
        req.body.Level_2_price,
        req.body.Level_3_price,
        req.body.ID_sales,
    ];
    db.query(sql, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
};


//show one product
export const productOne = (req, res) => {
    const sql = `SELECT * FROM product WHERE ID_product = ?`;

    const ID_product = req.params.ID_product;

    db.query(sql, [ID_product], (err, dataRead) => {
        if (err) {
            return res.json({ Message: "Error inside server" });
        }
        return res.json(dataRead);
    });
};


//update showone product
export const productOneUP = (req, res) => {
    const sql = `SELECT * FROM product
    INNER JOIN sales ON sales.ID_sales = product.ID_sales
    WHERE  ID_product = ?`;

    const ID_product = req.params.ID_product;

    db.query(sql, [ID_product], (err, dataRead) => {
        if (err) {
            return res.json({ Message: "Error inside server" });
        }
        return res.json(dataRead);
    });
};

//update product
export const productUpdate = (req, res) => {
    const ID_product = req.params.ID_product;
    const sql =
        "UPDATE `product` SET `ID_product`=?,`Name_product`=?,`Production_point`=?,`Retail_price`=?,`Level_1_price`=?,`Level_2_price`=?,`Level_3_price`=?,`ID_sales`=? WHERE `ID_product` = ?";

    db.query(
        sql,
        [
            req.body.ID_product,
            req.body.Name_product,
            req.body.Production_point,
            req.body.Retail_price,
            req.body.Level_1_price,
            req.body.Level_2_price,
            req.body.Level_3_price,
            req.body.ID_sales,
            ID_product,
        ],

        (err, result) => {
            if (err) {
                return res.json({ Message: " Error inside server" });
            }
            return res.json(result);
        }
    );
};

//delete
export const deleteproduct = (req, res) => {
    const sql = "DELETE FROM `product` WHERE `ID_product` = ?";
    const ID_product = req.params.ID_product;
    db.query(sql, [ID_product], (err, result) => {
        if (err) return res.json({ Message: "Error inside server" });
        return res.json(result);
    });
};


//!show table product
export const Showtableproduct = (req, res) => {

    const sql = "SELECT product.ID_product,product.Name_product,product.Production_point,product.Retail_price,product.Level_1_price,product.Level_2_price,product.Level_3_price, sales.fullname FROM `product` INNER JOIN sales ON product.ID_sales = sales.ID_sales ORDER BY `ID_product` DESC"
    db.query(sql, (err, result) => {
        if (err) return res.json({ message: "error run result all" });
        return res.json(result);

    })
}
export const ShowtableproductReport = (req, res) => {

    // const sql = "SELECT product.ID_product,product.Name_product,product.Production_point,product.Retail_price,product.Level_1_price,product.Level_2_price,product.Level_3_price, sales.fullname FROM `product` INNER JOIN sales ON product.ID_sales = sales.ID_sales ORDER BY `ID_product` DESC"
    const sql = `SELECT product.Name_product,
    product.Production_point,
    product.Retail_price,
    product.Level_1_price,
    product.Level_2_price,
    product.Level_3_price,
    SUM(lotproduct.Inventories_lot) AS TotalInventories,
    product.ID_product
    FROM lotproduct
    INNER JOIN sales ON sales.ID_sales = lotproduct.ID_sales
    INNER JOIN product ON product.ID_product = lotproduct.ID_product
    WHERE lotproduct.date_list_EXP >= NOW() 
      AND lotproduct.date_list_EXP >= CURDATE() 
      AND lotproduct.Inventories_lot  > 0
    GROUP BY lotproduct.ID_product
    ORDER BY TotalInventories ASC;`
    db.query(sql, (err, result) => {
        if (err) return res.json({ message: "error run result all" });
        return res.json(result);

    })
}
export const productReport = (req, res) => {

    // const sql = "SELECT product.ID_product,product.Name_product,product.Production_point,product.Retail_price,product.Level_1_price,product.Level_2_price,product.Level_3_price, sales.fullname FROM `product` INNER JOIN sales ON product.ID_sales = sales.ID_sales ORDER BY `ID_product` DESC"
    const sql = `SELECT product.Name_product,
    product.Production_point,
    product.Retail_price,
    product.Level_1_price,
    product.Level_2_price,
    product.Level_3_price,
           SUM(lotproduct.Inventories_lot) AS TotalInventories
    FROM lotproduct
    INNER JOIN sales ON sales.ID_sales = lotproduct.ID_sales
    INNER JOIN product ON product.ID_product = lotproduct.ID_product
    WHERE lotproduct.date_list_EXP >= NOW() 
      AND lotproduct.date_list_EXP >= CURDATE() 
      AND lotproduct.Inventories_lot  > 0
      AND product.Name_product = ?
    GROUP BY lotproduct.ID_product
    ORDER BY lotproduct.ID_product ASC;`
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