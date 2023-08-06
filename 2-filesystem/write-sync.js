const fs = require("node:fs");
const filename = "./2-filesystem/message.txt";

const content = "this is the content in the file";

fs.writeFileSync(filename, content);
console.log("It's saved!");
