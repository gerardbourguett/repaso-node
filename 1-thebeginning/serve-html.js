const http = require("node:http");
const fs = require("node:fs");

const localhost = "127.0.0.1";
const port = 3000;

http
  .createServer((req, res) => {
    // Cambia el type por "text/html"
    res.writeHead(200, { "Content-Type": "text/html" });
    // Lee el contenido del archivo index.html
    fs.readFile("./1-thebeginning/index.html", (err, data) => {
      if (err) throw err;
      console.log("Exito");
      // Enviar la respuesta
      res.end(data);
    });
  })
  .listen(port);
