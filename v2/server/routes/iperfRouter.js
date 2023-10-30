const express = require('express');
const router = express.Router();
const iperfController = require('../controllers/iperfController');
const promediosController = require("../controllers/promediosController");

//Obtener lista de switches
router.get('/switches', iperfController.getSwitchesList);

// Obtener lista de hosts
router.get('/hosts', iperfController.getHostsList);

// Mediones de host
router.get('/mediciones/:host', iperfController.getValuesByHostname);

// Mediciones por ip
router.get('/mediciones/:ip', iperfController.getValuesByIp);

// Promedios

//Promedio diario por host
router.get('/promedios/diario/hosts/:host', promediosController.getDailyAverageValuesByHost);

// Promedio semanal por host
router.get('/promedios/semanal/hosts/:host', promediosController.getWeeklyAverageValuesByHost);

// Promedio mensual por host 
router.get('/promedios/mensual/hosts/:host', promediosController.getMonthlyAverageValuesByHost);

//Promedio diario por switch
router.get('/promedios/diario/switches/:ubicacion', promediosController.getDailyAverageValuesBySwitch);

// Promedio semanal por host
router.get('/promedios/semanal/switches/:ubicacion', promediosController.getWeeklyAverageValuesBySwitch);

// Promedio mensual por host 
router.get('/promedios/mensual/switches/:ubicacion', promediosController.getMonthlyAverageValuesBySwitch);

module.exports = router;