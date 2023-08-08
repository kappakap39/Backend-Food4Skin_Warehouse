import db from "../db.js";

//Login
export const loginadmin = (req, res) => {
    const sql = "SELECT * FROM `admin` WHERE `email`=? AND `password` =? ";
    db.query(sql, [req.body.email, req.body.password ], (err, data) => {
        if(err) return res.json("Error login");
        if(data.length > 0){
            return res.json("Success");
        } else {
            return res.json("No record");
        }
        
    })
}
