import db from "../db.js";

export const provinces = (req, res) => {
    const sql = "SELECT * FROM `provinces` ";
    db.query(sql, (err, result) => {
        if (err) return res.json({
            Message: "Error inside server"
        });
        return res.json(result);
    });
};

export const amphures =(req, res) => {
    const sql = "SELECT * FROM `amphures` WHERE province_id = ?";
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

export const districts = (req, res) => {
    const sql = " SELECT * FROM `districts` WHERE amphure_id = ?";
    const {amphure_id} = req.params;
    
    db.query(sql, [amphure_id], (err, result)=> {
        if (err) {
            return res.json({
                Message: "Error inside server"
            });
        }
        return res.json(result);
    });
};