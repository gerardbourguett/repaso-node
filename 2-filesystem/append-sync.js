// Code: 2-filesystem\append-sync.js
const fs = require("node:fs");
const filename = "./2-filesystem/input.txt";
const content = "Y esto se agregará de forma síncrona";
fs.appendFileSync(filename, content);
console.log("Archivo actualizado exitosamente."); // Esto se agregará al archivo input.js. de forma asíncrona.Y esto se agregará de forma síncrona
