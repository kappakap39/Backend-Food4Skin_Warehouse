// import db from "../db.js";

// export const selectlot = (req, res) => {

//     const sql = "SELECT * FROM `lotproduct` JOIN product ON product.ID_product = product.ID_product"
//     db.query(sql, (err, result)=>{
//         if(err) return res.json({message: "error run result all Lot"});
//         return res.json(result);

//     })
// }