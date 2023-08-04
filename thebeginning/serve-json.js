const http = require("node:http");
const fs = require("node:fs");

const localhost = "127.0.0.1";
const port = 3000;
console.log("Server is listening on http://" + localhost + ":" + port);

http
  .createServer((req, res) => {
    // Cambia el type por "application/json"
    res.writeHead(200, { "Content-Type": "application/json" });
    // Crea un JSON
    let json_res = {
      status: 200,
      message: "Successful",
      result: ["sunday", "monday", "tuesday", "wednesday"],
      code: 2000,
    };
    // Enviar la respuesta
    res.end(JSON.stringify(json_res)); /* 
  // Lee el contenido del archivo data.json
  fs.readFile("./thebeginning/data.json", (err, data) => {
    if (err) throw err;
    console.log("Exito");
    res.end(data);
  }); */
  })
  .listen(port);
