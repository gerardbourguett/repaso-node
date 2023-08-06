const os = require("node:os"); // Información del Sistema Operativo

console.log("Información del Sistema Operativo");

console.log("Nombre del SO", os.platform()); // Nombre del SO win32
console.log("Versión del SO", os.release()); // Versión del SO 10.0.19041
console.log("Arquitectura del SO", os.arch()); // Arquitectura del SO x64
console.log("Memoria total", os.totalmem()); // Memoria total 16456818688
console.log("Memoria libre", os.freemem()); // Memoria libre 7676354560
console.log("CPUs", os.cpus()); // CPUs
console.log("IP de la máquina", os.networkInterfaces()); // IP de la máquina
console.log("Directorio principal", os.homedir()); // Directorio principal C:\Users\josea
console.log("uptime", os.uptime()); // uptime 1000.0
