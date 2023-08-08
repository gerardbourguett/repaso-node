const fs = require("node:fs"); // A partir de node 16 se recomienda usar node:

const stats = fs.statSync("./archivo.txt");

console.log(
  `El archivo tiene un tamaño de ${stats.size} bytes y fue modificado el ${stats.mtime}`,
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink()
); // El archivo tiene un tamaño de 38 bytes y fue modificado el Tue Aug 08 2023 11:17:06 GMT-0400 (hora estándar de Chile) true false false
