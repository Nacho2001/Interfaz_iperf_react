// Acceso a credenciales de DB
const chac = require("../config/chac");
const sis4 = require("../config/sis4");
// Models
// Obtener lista de switches
exports.getSwitchesList = async() => {
    const [rows,fields] = await sis4.execute("select switch from switches");
    return rows;
}

// Lista de hosts
exports.getHostsList = async() => {
    const [rows, fields] = await sis4.execute("select * from hosts");
    return rows;
}

// Mediciones p/hostname
exports.getValuesByHostname = async(host) => {
    const [rows, fields] = await chac.execute("select fecha,medido from iperf where host = ?", [host]);
    return rows;
}

// Mediciones p/ip
exports.getValuesByIp = async(ip) => {
    const [rows,fields] = await chac.execute("select fecha,medido from iperf where ip = ?", [ip]);
    return rows;
}