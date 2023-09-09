import db from "../db.js";
//show Agent
export const showTableagent = (req, res) => {
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
FROM agent ORDER BY ID_agent DESC`;

    const ID_agent = req.params.ID_agent;

    db.query(sql, [ID_agent], (err, dataRead) => {
        if (err) {
            return res.json({ Message: "Error inside server" });
        }
        return res.json(dataRead);
    });
};

// adda gent
export const addagent = (req, res) => {
    const sql =
        "INSERT INTO `agent`(`ID_agent`,`fullname`,`level`,`sex`,`IDcard`,`province`,`districts`,`subdistricts`,`Address`,`Tel`,`contact`,`picture`,`zip_code`,`ID_sales`,`email`) VALUES (?)";
    const values = [
        req.body.ID_agent,
        req.body.fullname,
        req.body.level,
        req.body.sex,
        req.body.IDcard,
        req.body.province,
        req.body.districts,
        req.body.subdistricts,
        req.body.Address,
        req.body.Tel,
        req.body.contact,
        req.body.picture,
        req.body.zip_code,
        req.body.ID_sales,
        req.body.email,
    ];
    db.query(sql, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
};


//show one agent
export const getAgent = (req, res) => {
    const sql = `SELECT a.*,
    CONCAT(
        CASE
            WHEN LENGTH(a.Tel) = 9 THEN
                CONCAT(
                    SUBSTRING(a.Tel, 1, 2), '-',
                    SUBSTRING(a.Tel, 3, 3), '-',
                    SUBSTRING(a.Tel, 6)
                )
            ELSE
                CONCAT(
                    SUBSTRING(a.Tel, 1, 3), '-',
                    SUBSTRING(a.Tel, 4, 3), '-',
                    SUBSTRING(a.Tel, 7)
                )
        END
    ) AS PhoneNumber,
    CONCAT(
        SUBSTRING(a.IDcard, 1, 1), '-',
        SUBSTRING(a.IDcard, 2, 4), '-',
        SUBSTRING(a.IDcard, 6, 5), '-',
        SUBSTRING(a.IDcard, 11, 2), '-',
        SUBSTRING(a.IDcard, 13)
    ) AS Card_ID,
    s.fullname AS Sales_Fullname
FROM agent a
INNER JOIN sales s ON a.ID_sales = s.ID_sales
WHERE a.ID_agent = ?;
`;

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
//show one agent
export const getupdateAgent = (req, res) => {
    const sql = `SELECT a.*,
    CONCAT(
        CASE
            WHEN LENGTH(a.Tel) = 9 THEN
                CONCAT(
                    SUBSTRING(a.Tel, 1, 2), '-',
                    SUBSTRING(a.Tel, 3, 3), '-',
                    SUBSTRING(a.Tel, 6)
                )
            ELSE
                CONCAT(
                    SUBSTRING(a.Tel, 1, 3), '-',
                    SUBSTRING(a.Tel, 4, 3), '-',
                    SUBSTRING(a.Tel, 7)
                )
        END
    ) AS PhoneNumber,
    CONCAT(
        SUBSTRING(a.IDcard, 1, 1), '-',
        SUBSTRING(a.IDcard, 2, 4), '-',
        SUBSTRING(a.IDcard, 6, 5), '-',
        SUBSTRING(a.IDcard, 11, 2), '-',
        SUBSTRING(a.IDcard, 13)
    ) AS Card_ID,
    s.fullname AS Sales_Fullname
FROM agent a
INNER JOIN sales s ON a.ID_sales = s.ID_sales
WHERE a.ID_agent = ?;
`;

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

//! update agent
export const agentUpdate = (req, res) => {
    const id = req.params.id;
    const sql =
        "UPDATE `agent` SET `districts`=?,`fullname`=?,`email`=?,`sex`=?,`IDcard`=?,`province`=? ,`subdistricts`=? ,`Address`=? ,`Tel`=? ,`level`=?, `contact`=?, `picture`=?, `zip_code`=? WHERE `ID_agent` = ?";

    db.query(
        sql,
        [
            req.body.districts,
            req.body.fullname,
            req.body.email,
            req.body.sex,
            req.body.IDcard,
            req.body.province,
            req.body.subdistricts,
            req.body.Address,
            req.body.Tel,
            req.body.level,
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

//select all NameAgent
export const NameAgent = (req, res) => {

    const sql = "SELECT DISTINCT(  `fullname`  ),`ID_agent` FROM agent"
    db.query(sql, (err, result) => {
        if (err) return res.json({ message: "error run result all" });
        return res.json(result);

    })
}