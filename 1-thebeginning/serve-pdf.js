const http = require("node:http");
const fs = require("node:fs");

const localhost = "127.0.0.1";
const port = 3000;
console.log("Server is listening on http://" + localhost + ":" + port);

http
  .createServer((req, res) => {
    // Cambia el type por "application/pdf"
    res.writeHead(200, { "Content-Type": "application/pdf" });
    // Lee el contenido del archivo data.json
    fs.readFile("./1-thebeginning/index.pdf", (err, data) => {
      if (err) {
        res.json({ status: "error", message: err });
      } else {
        res.write(data);
        res.end();
      }
    });
  })
  .listen(port);
