// import express from 'express'
// import mysql from 'mysql'
// import cors from 'cors'

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//     host: "localhost",
//     user: 'root',
//     password: '',
//     database: 'project_end'
// })

// app.get('/', (re, res) => {
//     return res.json("From BackEnd Side");
// })

// app.get('/sales', (req,res)=>{
//     const sql = "SELECT * FROM sales"
//     db.query(sql, (err, data)=>{
//         if(err) return res.json(err);
//         return res.json(data);
//     })
// })

// app.post('/addsales', (req, res) => {
//     const sql = "INSERT INTO `sales`(`ID_sales`, `fullname`, `mail`, `password`, `sex`, `IDcard`, `province`, `district`, `Address`, `Tel`, `Persistent_status`, `contact`, `picture`) VALUES (?)";
//     const values =[
//         req.body.ID_sales,
//         req.body.fullname,
//         req.body.mail,
//         req.body.password,
//         req.body.sex,
//         req.body.IDcard,
//         req.body.province,
//         req.body.district,
//         req.body.Address,
//         req.body.Tel,
//         req.body.Persistent_status,
//         req.body.contact,
//         req.body.picture
//     ];
//     db.query(sql, [values], (err, result) => {
//         if(err) return res.json(err);
//         return res.json(result);
//     });
// });

// app.get('/ReadSales/:ID_sales', (req,res)=>{
//     const sql = "SELECT * FROM sales WHERE ID_sales = ? ";
//     const ID_sales = req.params.ID_sales;
//     db.query(sql,[ID_sales], (err, dataRead)=>{
//         if(err) return res.json({Message: "Error inside server"});
//         return res.json(dataRead);
//     })
// })

// app.listen(8081, ()=> {
//     console.log("Server is running on port 8081");
// });





