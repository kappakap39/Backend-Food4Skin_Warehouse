import db from "../db.js";

//Login
// export const loginadmin = (req, res) => {
//     const sql = "SELECT * FROM `admin` WHERE `email`=? AND `password` =? ";
//     db.query(sql, [req.body.email, req.body.password ], (err, data) => {
//         if (data.length > 0) {
//             const filteredData = data.map(item => ({
//                 ID_admin: item.ID_admin,
//                 email: item.email,
//                 fullname: item.fullname,
//                 password: item.password,
//                 sex: item.sex,
//                 IDcard: item.IDcard,
//                 province: item.province,
//                 districts: item.districts,
//                 subdistricts: item.subdistricts,
//                 Address: item.Address,
//                 Tel: item.Tel,
//                 contact: item.contact,
//                 picture: item.picture,
//                 zip_code: item.zip_code,
//                 // คอลัมน์อื่นๆ ที่คุณต้องการ
//                 Success: "Success",
//             }));
//             return res.json(filteredData);
//         } else {
//             return res.json("No record");
//         }        
        
//     })
// }
export const loginadmin = (req, res) => {
    const sql = "SELECT * FROM `admin` WHERE `email`=? AND `password` =? ";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (data.length > 0) {
            const filteredData = data.map(item => {
                // เพิ่มขีด (-) ใน IDcard เพื่อสร้าง Card_ID
                const formattedIDcard = item.IDcard.replace(/(\d)(?=(\d{4})+(?!\d))/g, "$1-");
                const Card_ID = formattedIDcard.slice(0, -1) + "-" + formattedIDcard.slice(-1);

                // แยกหมายเลขโทรศัพท์ตามรูปแบบ
                const formattedTel = item.Tel.length === 9 ?
                    item.Tel.replace(/(\d{2})(\d{3})(\d{4})/, "$1-$2-$3") :
                    item.Tel.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");

                return {
                    ID_admin: item.ID_admin,
                    email: item.email,
                    fullname: item.fullname,
                    password: item.password,
                    sex: item.sex,
                    IDcard: item.IDcard,
                    Card_ID: Card_ID,
                    province: item.province,
                    districts: item.districts,
                    subdistricts: item.subdistricts,
                    Address: item.Address,
                    Tel: item.Tel,
                    PhoneNumber: formattedTel, // ใช้เบอร์โทรศัพท์ที่แยกแล้ว
                    contact: item.contact,
                    picture: item.picture,
                    zip_code: item.zip_code,
                    Success: "Success",
                };
            });

            return res.json(filteredData);
        } else {
            return res.json("No record");
        }
    });
};



//!update
export const getupdateAdmin = (req, res) => {
    const sql = `SELECT *,
        CONCAT(
            CASE
                WHEN LENGTH(Tel) = 9 THEN
                    CONCAT(
                        SUBSTRING(Tel, 1, 2), '-',
                        SUBSTRING(Tel, 3, 3), '-',
                        SUBSTRING(Tel, 6)
                    )
                ELSE
                    CONCAT(
                        SUBSTRING(Tel, 1, 3), '-',
                        SUBSTRING(Tel, 4, 3), '-',
                        SUBSTRING(Tel, 7)
                    )
            END
        ) AS PhoneNumber,
        CONCAT(
            SUBSTRING(IDcard, 1, 1), '-',
            SUBSTRING(IDcard, 2, 4), '-',
            SUBSTRING(IDcard, 6, 5), '-',
            SUBSTRING(IDcard, 11, 2), '-',
            SUBSTRING(IDcard, 13)
        ) AS Card_ID
    FROM admin
    WHERE ID_admin = ?`;

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

//update ส่วนรับค่ามาupdate
export const adminUpdate = (req, res) => {
    const id = req.params.id;
    const sql =
        "UPDATE `admin` SET `districts`=?,`fullname`=?,`email`=?,`password`=?,`sex`=?,`IDcard`=?,`province`=? ,`subdistricts`=? ,`Address`=? ,`Tel`=? , `contact`=?, `picture`=?, `zip_code`=? WHERE `ID_admin` = ?";

    db.query(
        sql,
        [
            req.body.districts,
            req.body.fullname,
            req.body.email,
            req.body.password,
            req.body.sex,
            req.body.IDcard,
            req.body.province,
            req.body.subdistricts,
            req.body.Address,
            req.body.Tel,
            req.body.contact,
            req.body.picture,
            req.body.zip_code,
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