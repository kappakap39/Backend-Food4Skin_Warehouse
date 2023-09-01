import db from "../db.js";

export const lot = (req, res) => {

    const sql = "SELECT * FROM `lotproduct`"
    db.query(sql, (err, result)=>{
        if(err) return res.json({message: "error run result all Lot"});
        return res.json(result);

    })
}


export const selectlot = (req, res) => {
    const sql = "SELECT * FROM `lotproduct` INNER JOIN sales ON sales.ID_sales = lotproduct.ID_sales INNER JOIN product ON product.ID_product = lotproduct.ID_product ORDER BY `ID_lot` DESC";

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



export const ShowProduct = (req, res) => {
    const sql = "SELECT * FROM `lotproduct` INNER JOIN sales ON sales.ID_sales = lotproduct.ID_sales INNER JOIN product ON product.ID_product = lotproduct.ID_product WHERE product.Name_product =? ORDER BY `ID_lot` DESC";

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
        "INSERT INTO `lotproduct`(`ID_product`,`Inventories_lot`,`date_list`,`date_list_EXP`,`Quantity`,`remark`,`ID_sales`) VALUES (?)";
    const values = [
        
        req.body.ID_product,
        req.body.Inventories_lot,
        req.body.date_list,
        req.body.date_list_EXP,
        req.body.Quantity,
        req.body.remark,
        req.body.ID_sales,
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