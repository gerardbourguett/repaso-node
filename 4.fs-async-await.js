// Solo en modulos nativos sin promises

// const { promisify } = require("node:util");
// const readFilePromise = promisify(fs.readFile);

const { readFile } = require("node:fs/promises");

async function main() {
  console.log("Leyendo el primer archivo");
  const text = await readFile("./archivo.txt", "utf-8");
  console.log(text);

  console.log("Leyendo el segundo archivo");
  const secontText = await readFile("./archivo2.txt", "utf-8");
  console.log(secontText);
}

main();

//IIFE = Immediately Invoked Function Expression
/* (async () => {
  console.log("Leyendo el primer archivo");
  const text = await readFile("./archivo.txt", "utf-8");
  console.log(text);

  console.log("Leyendo el segundo archivo");
  const secontText = await readFile("./archivo2.txt", "utf-8");
  console.log(secontText);
})(); */

// Leyendo el primer archivo
// Y esto se agregará de forma síncrona
// Leyendo el segundo archivo
// Y esto se agregará de forma síncrona
