import db from "../db.js";

//Login
export const loginadmin = (req, res) => {
    const sql = "SELECT * FROM `admin` WHERE `email`=? AND `password` =? ";
    db.query(sql, [req.body.email, req.body.password ], (err, data) => {
        if (data.length > 0) {
            const filteredData = data.map(item => ({
                ID_admin: item.ID_admin,
                email: item.email,
                fullname: item.fullname,
                password: item.password,
                sex: item.sex,
                IDcard: item.IDcard,
                province: item.province,
                districts: item.districts,
                subdistricts: item.subdistricts,
                Address: item.Address,
                Tel: item.Tel,
                contact: item.contact,
                picture: item.picture,
                zip_code: item.zip_code,
                // คอลัมน์อื่นๆ ที่คุณต้องการ
                Success: "Success",
            }));
            return res.json(filteredData);
        } else {
            return res.json("No record");
        }        
        
    })
}
// export const loginadmin = (req, res) => {
//     const sql = "SELECT * FROM `admin` WHERE `email`=? AND `password` =? ";
//     db.query(sql, [req.body.email, req.body.password ], (err, data) => {
//         if(err) return res.json("Error login");
//         if(data.length > 0){
//             return res.json("Success");
//         } else {
//             return res.json("No record");
//         }
        
//     })
// }
