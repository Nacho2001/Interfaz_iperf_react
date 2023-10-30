const express = require("express");
const cors = require("cors");

class Server {
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }
    routes(){
        this.app.use('/iperf', require('./../routes/iperfRouter'))
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }
    listen(){
        let puerto = 40700
        this.app.listen(puerto, () => {
            console.log(`servidor corriendo en puerto ${puerto}`)
        })
    }
}

module.exports = Server