import db from "../db.js";

// export const selectlot = (req, res) => {

//     const sql = "SELECT * FROM `lotproduct` JOIN product ON product.ID_product = lotproduct.ID_product ORDER BY `ID_lot` DESC"
//     db.query(sql, (err, result)=>{
//         if(err) return res.json({message: "error run result all Lot"});
//         return res.json(result);

//     })
// }


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

    const sql = "SELECT DISTINCT( `Name_product` ) FROM `product`"
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