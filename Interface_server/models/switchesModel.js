// Consultas a la base
// Credenciales de la base
const db = require("../config/db");

//Modelos
// Obtener switches de lista
exports.getSwitchesList = async () => {
    const [rows,fields] = await db.execute("select id,switch from switches");
    return rows;
};

// Obtener unico switch p/ id
exports.getUniqueSwitch = async (id) => {
    const [rows, fields] = await db.execute("select switch from switches where id = ?", [id]);
    return rows;
};

// Obtener promedio diario de switch
exports.getDailyAverageValues = async (ubicacion) => {
    const [rows,fields] = await db.execute("select medido from diario_ps where ubicacion = ?", [ubicacion]);
    return rows;
};

// Obtener promedio semanal de switch
exports.getWeeklyAverageValues = async (ubicacion) => {
    const [rows,fields] = await db.execute("select medido from semanal_ps where switch = ?", [ubicacion]);
    return rows;
};

// Obtener promedio mensual de switch
exports.getMonthlyAverageValues = async (ubicacion) => {
    const [rows, fields] = await db.execute("select medido from mensual_ps where switch = ?", [ubicacion]);
    return rows;
};