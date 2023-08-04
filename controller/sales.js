import db from "../db.js";


//select all sales
export const selectSales = (req, res) => {

    const sql = "SELECT * FROM `sales` ORDER BY `ID_sales` DESC"
    db.query(sql, (err, result)=>{
        if(err) return res.json({message: "error run result all"});
        return res.json(result);

    })
}


//add sales
export const addsales = (req, res) => {
    const sql = "INSERT INTO `sales`(`districts`, `ID_sales`, `fullname`, `mail`, `password`, `sex`, `IDcard`, `province`, `subdistricts`, `AddressSale`, `Tel`, `Persistent_status`, `contact`, `picture`, `zip_code`) VALUES (?)";
    const values =[
        req.body.districts,
        req.body.ID_sales,
        req.body.fullname,
        req.body.mail,
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
        req.body.zip_code
    ];
    db.query(sql, [values], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    });
}

//show one sales
export const showdatasale =(req, res) => {

    const sql = "SELECT * FROM sales WHERE ID_sales = ? ";
    const ID_sales = req.params.ID_sales;
    db.query(sql,[ID_sales], (err, dataRead)=>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(dataRead);
    })

}

//update
export const getupdateSale = (req, res) => {
    
    const sql = "SELECT * FROM `sales` WHERE `ID_sales` = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if(err) return res.json({
            Message:"Error inside server"
        });
        return res.json(result);
    });
};

export const saleUpdate =(req, res) => {
    const id =req.params.id;
    const sql = "UPDATE `sales` SET `districts`=?,`fullname`=?,`mail`=?,`password`=?,`sex`=?,`IDcard`=?,`province`=? ,`subdistricts`=? ,`AddressSale`=? ,`Tel`=? ,`Persistent_status`=?, `contact`=?, `picture`=?, `zip_code`=? WHERE `ID_sales` = ?";

    db.query(
        sql,[
        req.body.districts,
        req.body.fullname,
        req.body.mail,
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
                return res.json({Message:" Error inside server"});
            }
            return res.json(result);
        }
    )
};

//delete
export const deleteSales = (req, res) => {
    const sql = "DELETE FROM `sales` WHERE `ID_sales` = ?";
    const ID_sales = req.params.ID_sales;
    db.query(sql, [ID_sales], (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
}





