import mysql from 'mysql2/promise';

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "carteira_acoes",
});

export default connection;