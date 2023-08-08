import { readFile } from "node:fs/promises";
// Solo en modulos nativos sin promises

// const { promisify } = require("node:util");
// const readFilePromise = promisify(fs.readFile);

console.log("Leyendo el primer archivo");
const text = await readFile("./archivo.txt", "utf-8");
console.log(text);

console.log("Leyendo el segundo archivo");
const secondText = await readFile("./archivo2.txt", "utf-8");
console.log(secondText);

// Leyendo el primer archivo
// Y esto se agregará de forma síncrona
// Leyendo el segundo archivo
// Y esto se agregará de forma síncrona
