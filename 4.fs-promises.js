const fs = require("node:fs/promises");
// Solo en modulos nativos sin promises

// const { promisify } = require("node:util");
// const readFilePromise = promisify(fs.readFile);

console.log("Leyendo el primer archivo");
fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log(text);
});

console.log("Leyendo el segundo archivo");
fs.readFile("./archivo2.txt", "utf-8").then((text) => {
  console.log(text);
});
