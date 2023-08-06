const fs = require("node:fs");
const filename = "./2-filesystem/input.txt";

new_data = "Esto se agregará al archivo input.js. de forma asíncrona.";

fs.appendFile(filename, new_data, (err) => {
  if (err) throw err;
  console.log("Archivo actualizado exitosamente.");
});
