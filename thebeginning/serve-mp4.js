const http = require("node:http");
const fs = require("node:fs");

const localhost = "127.0.0.1";
const port = 3000;
console.log("Server is listening on http://" + localhost + ":" + port);

http
  .createServer((req, res) => {
    // Cambia el type por "video/mp4"
    res.writeHead(200, { "Content-Type": "video/mp4" });
    // Lee el contenido del archivo data.json
    fs.existsSync("./thebeginning/video.mp4", (existsSync) => {
      if (existsSync) {
        fs.createReadStream("./thebeginning/video.mp4").pipe(res);
      } else {
        res.send("Error: 404");
        res.end();
      }
    });
  })
  .listen(port);
