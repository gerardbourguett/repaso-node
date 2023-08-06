const fs = require("node:fs");
const filename = "./2-filesystem/message.txt";

const content = fs.readFileSync(filename);
console.log("Content : " + content);
