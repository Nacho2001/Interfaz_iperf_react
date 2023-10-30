const iperfModel = require("./../models/iperfModel");

// Obtener lista de switches
exports.getSwitchesList = async(req,res) => {
    try {
        const switches = await iperfModel.getSwitchesList();
        res.status(200).json({
            sucess:true,
            message: "Lista obtenida exitosamente",
            data: switches
        })
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:`Error al obtener switches: ${error}`
        })
    }
}

// Obtener lista de hosts
exports.getHostsList = async(req,res) => {
    try {
        const hosts = await iperfModel.getHostsList();
        res.status(200).json({
            sucess:true,
            message: "Lista de host obtenida",
            data: hosts
        })
    } catch (error){
        res.status(500).json({
            sucess:false,
            message: `Error al obtener hosts: ${error}`
        })
    }
}

// Obtener mediciones de host unico
exports.getValuesByHostname = async(req,res) => {
    try {
        const host = req.params.host
        const values = await iperfModel.getValuesByHostname(host);
        if (values == null) {
            res.status(404).json({
                sucess:false,
                message:"No hay mediciones del equipo solicitado"
            })
        } else {
            res.status(200).json({
                sucess:true,
                message:"Operación exitosa",
                data:values
            })
        }
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:`Error al obtener mediciones: ${error}`
        })
    }
}

// Obtener mediciones por ip
exports.getValuesByIp = async(req,res) => {
    try {
        const values = await iperfModel.getValuesByIp(ip);
        if (values == null) {
            res.status(404).json({
                sucess:false,
                message:"No hay mediciones del equipo solicitado"
            })
        } else {
            res.status(200).json({
                sucess:true,
                message:"Operación exitosa",
                data:values
            })
        }
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:`Error al obtener mediciones: ${error}`
        })
    }
}