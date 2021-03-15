import http from "http";
import util from "util";

const PORT = 3000;
const server = http
  .createServer((req, res) => {
    // ** write headers
    res.writeHead(200, { "Content-Type": "text/plain" });

    res.end("Hello World!");
  })
  .listen(PORT);

util.log(`Web Server listening on port ${PORT}`);
