const fs = require("node:fs"); // fs = FileSystem

const stats = fs.statSync("./archivo.txt");

console.log(stats.isFile()); // true
