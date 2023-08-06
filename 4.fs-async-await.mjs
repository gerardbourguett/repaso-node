import { readFile } from "node:fs/promises";
// Solo en modulos nativos sin promises

// const { promisify } = require("node:util");
// const readFilePromise = promisify(fs.readFile);

Promise.all([
  readFile("./archivo.txt", "utf-8"),
  readFile("./archivo2.txt", "utf-8"),
]).then((results) => {
  console.log(results);
});

// Leyendo el primer archivo
// Y esto se agregará de forma síncrona
// Leyendo el segundo archivo
// Y esto se agregará de forma síncrona
