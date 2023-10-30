//Enrutador por peticion

const express = require("express");
const router = express.Router();
const switchesController = require('./../controllers/switchesController');

// Obtiene lista de switches
router.get('/', switchesController.getSwitchesList);

// Obtener unico switch por id
router.get('/:id', switchesController.getUniqueSwitch);

//Obtener promedio diario de switch solicitado
router.get('/average/daily/:ubicacion',switchesController.getDailyAverageValues);

// Obtener promedio semanal
router.get('/average/weekly/:ubicacion',switchesController.getWeeklyAverageValues);

// Obtener promedio mensual
router.get('/average/monthly/:ubicacion', switchesController.getMonthlyAverageValues);

//Exportar enrutador
module.exports = router;