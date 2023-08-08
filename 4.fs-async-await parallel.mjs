// Solo en modulos nativos sin promises

// const { promisify } = require("node:util");
// const readFilePromise = promisify(fs.readFile);

const { readFile } = require("node:fs/promises");

Promise.all([
  readFile("./archivo.txt", "utf-8"),
  readFile("./archivo2.txt", "utf-8"),
]).then(([text, secondText]) => {
  console.log("Primer texto", text);
  console.log("Segundo texto", secondText);
});

// Leyendo el primer archivo
// Y esto se agregará de forma síncrona
// Leyendo el segundo archivo
// Y esto se agregará de forma síncrona
