// Librerias
const mysql = require("mysql2");
require('dotenv').config('./.env');
const pool = mysql.createPool({
    /*host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database*/
    host:"localhost",
    user:"ServerDB2",
    password:"ServerClinica",
    database:"iperf"
})

module.exports = pool.promise()