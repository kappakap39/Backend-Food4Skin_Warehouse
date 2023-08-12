import db from "../db.js";

// export const selectlot = (req, res) => {

//     const sql = "SELECT * FROM `lotproduct` JOIN product ON product.ID_product = lotproduct.ID_product ORDER BY `ID_lot` DESC"
//     db.query(sql, (err, result)=>{
//         if(err) return res.json({message: "error run result all Lot"});
//         return res.json(result);

//     })
// }


export const selectlot = (req, res) => {
    const sql = "SELECT * FROM `lotproduct` JOIN product ON product.ID_product = lotproduct.ID_product ORDER BY `ID_lot` DESC"
    db.query(sql, (err, result) => {
        if (err) return res.json({ message: "error run result all Lot" });

        // Convert the result to JSON string
        const resultText = JSON.stringify(result);

        return res.send(resultText);
    });
}
