const mysql = require("mysql2");
require('dotenv').config()

const sis4 = mysql.createPool({
    host: process.env.SIS4_HOST,
    user: process.env.SIS4_USER,
    password: process.env.SIS4_PASSWORD,
    database: process.env.SIS4_DATABASE
})

module.exports = sis4.promise();