import mysql from "mysql2";

// meta-object
let pool = mysql.createPool({
    connectionLimit: 100,
    user: "root",
    password: "raj9340649145",
    database: "eshop",
    host: "localhost"
});

export default pool;