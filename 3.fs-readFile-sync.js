const fs = require("node:fs"); // A partir de node 16 se recomienda usar node:

console.log("Leyendo el primer archivo");
const text = fs.readFileSync("./archivo.txt", "utf-8");
console.log(text);

console.log("Leyendo el segundo archivo");
const secondText = fs.readFileSync("./archivo2.txt", "utf-8");
console.log(secondText);
