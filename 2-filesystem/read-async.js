const fs = require("node:fs");

fs.readFile("./2-filesystem/message.txt", (err, data) => {
  if (err) throw err;
  console.log("Content : " + data);
});
