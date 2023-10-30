const mysql = require("mysql2");
require('dotenv').config()

const chac = mysql.createPool({
    host: process.env.CHAC_HOST,
    user: process.env.CHAC_USER,
    password: process.env.CHAC_PASSWORD,
    database: process.env.CHAC_DATABASE
})

module.exports = chac.promise();