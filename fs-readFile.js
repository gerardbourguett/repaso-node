const fs = require("node:fs/promises"); // fs = FileSystem

/* const text = fs.readFileSync("./archivo.txt", "utf-8"); // utf-8 is the encoding

console.log(text); // Hello World */

/* 
Sin Promises
const textAsync = fs.readFile("./archivo.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log(textAsync); // undefined

 */

fs.readFile("./archivo.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
