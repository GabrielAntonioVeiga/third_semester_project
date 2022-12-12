import mysql from "mysql2/promise";

require("dotenv").config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

export default connection;

//sudo netstat -nlpt |grep 3306

//sudo service mysql stop
