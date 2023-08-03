const fs = require("node:fs"); // fs = FileSystem

const stats = fs.statSync("./cjs/index.js");

console.log(stats.isFile()); // true
