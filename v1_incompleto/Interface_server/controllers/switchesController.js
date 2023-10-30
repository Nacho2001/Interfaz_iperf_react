// Realiza la peticion al model
const switchesModel = require("../models/switchesModel");

// Obtener lista de switches
exports.getSwitchesList = async(req,res) => {
    // Ejecuta el metodo del model para obtener la lista, si presenta error devolverá un error 500
    try {
        const switches = await switchesModel.getSwitchesList();
        res.status(200).json({
            sucess: true,
            data: switches,
            message: `Lista obtenida exitosamente`
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message:`Error al obtener la lista de switches:
            ${{error}}`,
            data:null
        })
        console.log(error)
    }
};

// Obtener switch unico
exports.getUniqueSwitch = async (req,res) => {
    // Obtiene un unico switch por id, si hay error, devuelve mensaje con el mismo
    try {
        const id = req.params.id
        const ubicacion = await switchesModel.getUniqueSwitch(id);
        if (ubicacion == ""){
            res.status(404).json({
                success: false,
                message: `Error: No se encontró el switch "${{ubicacion}}"`,
                data:null
            })
        } else {
            res.status(200).json({
                success: true,
                data: ubicacion,
                message: `Switch obtenido!`
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `No fue posible obtener el switch "${{ubicacion}}":
            ${{error}}`
        })
    }
};

//Obtener valores diarios
exports.getDailyAverageValues = async (req,res) => {
    try {
        const ubicacion = req.params.ubicacion;
        const dailyValues = await switchesModel.getDailyAverageValues(ubicacion);
        if (dailyValues == "") {
            res.status(404).json({
                success:false,
                message:`No se encontraron valores del switch ingresado: "${{ubicacion}}"`,
                data:null
            })
        } else {
            res.status(200).json({
                success:true,
                data:dailyValues,
                message:`Promedios obtenidos exitosamente!`
            })
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            message:`Error, no fue posible obtener los datos:
            ${{error}}`,
            data:null
        })
    }
}

// Obtener valores de promedio semanal
exports.getWeeklyAverageValues = async (req,res) => {
    const ubicacion = req.params.ubicacion;
    try {
        const weeklyValues = await switchesModel.getWeeklyAverageValues(ubicacion);
        if (weeklyValues == "") {
            res.status(404).json({
                success:false,
                message:`No se encontraron valores del switch ingresado: "${{ubicacion}}"`,
                data:null
            })
        } else {
            res.status(200).json({
                success:true,
                data:weeklyValues,
                message:`Promedios obtenidos con exito!`
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            data:null,
            message:`Ocurrió un error al realizar la operacion:
            ${{error}}`
        })
    }
}

// Obtiene promedios mensuales
exports.getMonthlyAverageValues = async (req,res) => {
    try {
        const ubicacion = req.params.ubicacion;
        const monthlyValues = await switchesModel.getMonthlyAverageValues(ubicacion);
        if (monthlyValues == "") {
            res.status(404).json({
                success:false,
                data:null,
                message:`No se encontraron resultados con el switch "${{ubicacion}}"`
            })
        } else {
            res.status(200).json({
                success:true,
                data:monthlyValues,
                message:`Operación exitosa!`
            })
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            data:null,
            message:`Error al obtener los datos:
            ${{error}}`
        })
    }
}