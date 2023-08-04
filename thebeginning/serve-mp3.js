const http = require("node:http");
const fs = require("node:fs");

const localhost = "127.0.0.1";
const port = 3000;
console.log("Server is listening on http://" + localhost + ":" + port);

http
  .createServer((req, res) => {
    // Cambia el type por "audio/mp3"
    res.writeHead(200, { "Content-Type": "audio/mp3" });
    // Lee el contenido del archivo data.json
    fs.existsSync("./thebeginning/audio.mp3", (existsSync) => {
      if (existsSync) {
        fs.createReadStream("./thebeginning/audio.mp3").pipe(res);
      } else {
        res.send("Error: 404");
        res.end();
      }
    });
  })
  .listen(port);
