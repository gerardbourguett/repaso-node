const fs = require("node:fs"); // A partir de node 16 se recomienda usar node:

console.log("Leyendo el primer archivo");
fs.readFile("./archivo.txt", "utf-8", (error, text) => {
  if (error) {
    console.log(`Error: ${error}`);
    return;
  }

  console.log(text);
});

console.log("Leyendo el segundo archivo");
fs.readFile("./archivo2.txt", "utf-8", (error, text) => {
  if (error) {
    console.log(`Error: ${error}`);
    return;
  }

  console.log(text);
});

// Leyendo el primer archivo
// Leyendo el segundo archivo
// Y esto se agregará de forma síncrona
// Y esto se agregará de forma síncrona
