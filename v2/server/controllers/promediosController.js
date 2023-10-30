const promediosModel = require("./../models/promediosModel");

// Obtener promedio diario por host
exports.getDailyAverageValuesByHost = async(req,res) => {
    try {
        const host = req.params.host
        const promedio = await promediosModel.getDailyAverageValuesByHost(host)
        if (promedio == null) {
            res.status(404).json({
                sucess:false,
                mesagge:"No existen los datos solicitados"
            })
        } else {
            res.status(200).json({
                sucess:true,
                message:"Operación exitosa",
                data:promedio
            })
        }
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:`Error al obtener promedio: ${error}`
        })
    }
}

// Obtener promedio semanal por host
exports.getWeeklyAverageValuesByHost = async(req,res) => {
    try {
        const host = req.params.host
        const promedio = await promediosModel.getWeeklyAverageValuesByHost(host)
        if (promedio == null) {
            res.status(404).json({
                sucess:false,
                mesagge:"No existen los datos solicitados"
            })
        } else {
            res.status(200).json({
                sucess:true,
                message:"Operación exitosa",
                data:promedio
            })
        }
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:`Error al obtener promedio: ${error}`
        })
    }
}

// Promedio mensual por host
exports.getMonthlyAverageValuesByHost = async(req,res) => {
    try {
        const host = req.params.host
        const promedio = await promediosModel.getMonthlyAverageValuesByHost(host)
        if (promedio == null) {
            res.status(404).json({
                sucess:false,
                mesagge:"No existen los datos solicitados"
            })
        } else {
            res.status(200).json({
                sucess:true,
                message:"Operación exitosa",
                data:promedio
            })
        }
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:`Error al obtener promedio: ${error}`
        })
    }
}

// Promedio diario por switch
exports.getDailyAverageValuesBySwitch = async(req,res) => {
    try {
        const ubicacion = req.params.ubicacion
        const promedio = await promediosModel.getDailyAverageValuesBySwitch(ubicacion)
        if (promedio == null) {
            res.status(404).json({
                sucess:false,
                mesagge:"No existen los datos solicitados"
            })
        } else {
            res.status(200).json({
                sucess:true,
                message:"Operación exitosa",
                data:promedio
            })
        }
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:`Error al obtener promedio: ${error}`
        })
    }
}

// Promedio semanal por switch
exports.getWeeklyAverageValuesBySwitch = async(req,res) => {
    try {
        const ubicacion = req.params.ubicacion
        const promedio = await promediosModel.getWeeklyAverageValuesBySwitch(ubicacion)
        if (promedio == null) {
            res.status(404).json({
                sucess:false,
                mesagge:"No existen los datos solicitados"
            })
        } else {
            res.status(200).json({
                sucess:true,
                message:"Operación exitosa",
                data:promedio
            })
        }
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:`Error al obtener promedio: ${error}`
        })
    }
}

// Promedio mensual por switch
exports.getMonthlyAverageValuesBySwitch = async(req,res) => {
    try {
        const ubicacion = req.params.ubicacion
        const promedio = await promediosModel.getMonthlyAverageValuesBySwitch(ubicacion)
        if (promedio == null) {
            res.status(404).json({
                sucess:false,
                mesagge:"No existen los datos solicitados"
            })
        } else {
            res.status(200).json({
                sucess:true,
                message:"Operación exitosa",
                data:promedio
            })
        }
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:`Error al obtener promedio: ${error}`
        })
    }
}
