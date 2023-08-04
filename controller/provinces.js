import db from "../db.js";

export const provinces = (req, res) => {
    const sql = "SELECT * FROM `provinces`";
    db.query(sql, (err, result) => {
        if (err) return res.json({
            Message: "Error inside server"
        });
        return res.json(result);
    });
};

export const districts =(req, res) => {
    const sql = "SELECT * FROM `districts` WHERE `province_id` = ?";
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

export const subdistricts = (req, res) => {
    const sql = "SELECT * FROM `subdistricts` WHERE `district_id` = ?";
    const {district_id} = req.params;
    
    db.query(sql, [district_id], (err, result)=> {
        if (err) {
            return res.json({
                Message: "Error inside server"
            });
        }
        return res.json(result);
    });
};