import db from "../db.js";

//select all sales
// export const selectSales = (req, res) => {

//     const sql = "SELECT * FROM `sales` ORDER BY `ID_sales` DESC"
//     db.query(sql, (err, result)=>{
//         if(err) return res.json({message: "error run result all"});
//         return res.json(result);

//     })
// }

export const selectSales = (req, res) => {
    const sql = `
        SELECT
            ID_sales,
            fullname,
            email,
            password,
            sex,
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
            ) AS Card_ID,
            province,
            districts,
            subdistricts,
            AddressSale,
            Persistent_status,
            contact,
            picture,
            zip_code
        FROM
            sales
        ORDER BY
            ID_sales DESC`;

    db.query(sql, (err, result) => {
        if (err) {
            return res.json({ message: "error running query" });
        }
        return res.json(result);
    });
};

//add sales
export const addsales = (req, res) => {
    const sql =
        "INSERT INTO `sales`(`districts`, `ID_sales`, `fullname`, `email`, `password`, `sex`, `IDcard`, `province`, `subdistricts`, `AddressSale`, `Tel`, `Persistent_status`, `contact`, `picture`, `zip_code`) VALUES (?)";
    const values = [
        req.body.districts,
        req.body.ID_sales,
        req.body.fullname,
        req.body.email,
        req.body.password,
        req.body.sex,
        req.body.IDcard,
        req.body.province,
        req.body.subdistricts,
        req.body.AddressSale,
        req.body.Tel,
        req.body.Persistent_status,
        req.body.contact,
        req.body.picture,
        req.body.zip_code,
    ];
    db.query(sql, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
};

//show one sales
export const showdatasale = (req, res) => {
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
    FROM sales
    WHERE ID_sales = ?`;

    const ID_sales = req.params.ID_sales;

    db.query(sql, [ID_sales], (err, dataRead) => {
        if (err) {
            return res.json({ Message: "Error inside server" });
        }
        return res.json(dataRead);
    });
};


//update
// export const getupdateSale = (req, res) => {
//     const sql = "SELECT * FROM `sales` WHERE `ID_sales` = ?";
//     const id = req.params.id;

//     db.query(sql, [id], (err, result) => {
//         if (err)
//             return res.json({
//                 Message: "Error inside server",
//             });
//         return res.json(result);
//     });
// };

export const getupdateSale = (req, res) => {
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
    FROM sales
    WHERE ID_sales = ?`;

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


export const saleUpdate = (req, res) => {
    const id = req.params.id;
    const sql =
        "UPDATE `sales` SET `districts`=?,`fullname`=?,`email`=?,`password`=?,`sex`=?,`IDcard`=?,`province`=? ,`subdistricts`=? ,`AddressSale`=? ,`Tel`=? ,`Persistent_status`=?, `contact`=?, `picture`=?, `zip_code`=? WHERE `ID_sales` = ?";

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
            req.body.AddressSale,
            req.body.Tel,
            req.body.Persistent_status,
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

//delete
export const deleteSales = (req, res) => {
    const sql = "DELETE FROM `sales` WHERE `ID_sales` = ?";
    const ID_sales = req.params.ID_sales;
    db.query(sql, [ID_sales], (err, result) => {
        if (err) return res.json({ Message: "Error inside server" });
        return res.json(result);
    });
};

//login Sales
export const loginsales = (req, res) => {
    // const sql = "SELECT * FROM `sales` WHERE `email`=? AND `password`=? ";
    // db.query(sql, [req.body.email, req.body.password], (err, data) => {
    //     if (err) return res.json("Error login");
    //     if (data.length > 0) {
    //         return res.json("Success");
    //     } else {
    //         return res.json("No record");
    //     }
    // });
    const sql = "SELECT * FROM `sales` WHERE `email`=? AND `password`=? AND `Persistent_status`='กำลังดำเนินงานอยู่'";

    db.query(sql, [req.body.email, req.body.password ], (err, data) => {
        if (data.length > 0) {
            const filteredData = data.map(item => ({
                ID_sales: item.ID_sales,
                email: item.email,
                fullname: item.fullname,
                password: item.password,
                sex: item.sex,
                IDcard: item.IDcard,
                province: item.province,
                districts: item.districts,
                subdistricts: item.subdistricts,
                AddressSale: item.AddressSale,
                Tel: item.Tel,
                contact: item.contact,
                picture: item.picture,
                zip_code: item.zip_code,
                Persistent_status: item.Persistent_status,
                // คอลัมน์อื่นๆ ที่คุณต้องการ
                Success: "Success",
            }));
            return res.json(filteredData);
        } else {
            return res.json("No record");
        } 

    })
};
