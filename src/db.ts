import mysql from "mysql2/promise";
import "dotenv/config";

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "testenode",
});

export default connection;
