import {
  platform,
  release,
  arch,
  totalmem,
  freemem,
  cpus,
  networkInterfaces,
  homedir,
  uptime,
} from "node:os"; // Información del Sistema Operativo

console.log("Información del Sistema Operativo");

console.log("Nombre del SO", platform()); // Nombre del SO win32
console.log("Versión del SO", release()); // Versión del SO 10.0.19041
console.log("Arquitectura del SO", arch()); // Arquitectura del SO x64
console.log("Memoria total", totalmem()); // Memoria total 16456818688
console.log("Memoria libre", freemem()); // Memoria libre 7676354560
console.log("CPUs", cpus()); // CPUs
console.log("IP de la máquina", networkInterfaces()); // IP de la máquina
console.log("Directorio principal", homedir()); // Directorio principal C:\Users\josea
console.log("uptime", uptime()); // uptime 1000.0
