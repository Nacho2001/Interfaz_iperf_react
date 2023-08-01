// Librerias
const mysql = require("mysql2");
const config = require("./../config");
const pool = mysql.createPool({
    /*host: config.host,
    user: config.user,
    password: config.password,
    database: config.datebase */
    host: "localhost",
    user:"",
    password:"",
    database: "iperf"
})

module.exports = pool.promise()