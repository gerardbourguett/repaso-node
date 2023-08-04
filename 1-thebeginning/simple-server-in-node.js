const http = require("node:http");

const localhost = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  res.end();
});

server.listen(port, localhost, (error) => {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log("Server is listening on http://" + localhost + ":" + port);
  }
});
