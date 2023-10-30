// Server
const express = require("express");
const cors = require("cors");

class Server {
    constructor(){
        this.app = express();
        this.routes();
    }
    routes(){
        this.app.use('/api/switches', require('./../routes/switchesRoute'))
    }
    middlewares(){
        this.app(express.json());
        this.app(cors());
    }
    listen(){
        this.app.listen(40780, () => {
            console.log("Servidor corriendo en puerto 40780");
        })
    }
}

module.exports = Server