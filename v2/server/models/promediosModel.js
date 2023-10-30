const sis4 = require("../config/sis4");

// Promedio diario p/ host
exports.getDailyAverageValuesByHost = async(host) => {
    const [rows,fields] = await sis4.execute("select dia,medido from promedio_diario_ph where host = ?", [host])
    return rows;
}
// Promedio semanal p/host
exports.getWeeklyAverageValuesByHost = async(host) => {
    const [rows, fields] = await sis4.execute("select semana,medido from promedio_semanal_ph where host = ?", [host])
    return rows;
}
// Promedio mensual p/host
exports.getMonthlyAverageValuesByHost = async(host) => {
    const [rows, fields] = await sis4.execute("select mes,medido from promedio_mensual_ph where host = ?", [host]);
    return rows;
}
// Promedio diario p/ switch
exports.getDailyAverageValuesBySwitch = async(ubicacion) => {
    const [rows,fields] = await sis4.execute("select dia,medido from promedio_diario_ps where ubicacion = ?", [ubicacion])
    return rows;
}
// Promedio semanal p/ switch
exports.getWeeklyAverageValuesBySwitch = async(ubicacion) => {
    const [rows, fields] = await sis4.execute("select semana,medido from promedio_semanal_ps where ubicacion = ?", [ubicacion])
    return rows;
}
// Promedio mensual p/ switch
exports.getMonthlyAverageValuesBySwitch = async(ubicacion) => {
    const [rows, fields] = await sis4.execute("select mes,medido from promedio_mensual_ps where ubicacion = ?", [ubicacion]);
    return rows;
}