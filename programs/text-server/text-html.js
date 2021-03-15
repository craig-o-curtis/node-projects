import http from "http";
import util from "util";
// import * as Charley from "./files/charlie-brown.html";

const PORT = 3000;
const server = http
  .createServer((req, res) => {
    // ** write headers
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Hello world</title>
        </head>
        <body>
          <h1>Hello HTML</h1>
          <h2>Request:</h2>
          <p>method: ${req.method}</p>
          <p>url: ${req.url}</p>
          <p>statusCode: ${req.statusCode}</p>
          <p>statusMessage: ${req.statusMessage}</p>
          <h2>Response:</h2>
          <p>statusCode: ${res.statusCode}</p>
          <p>statusMessage: ${res.statusMessage}</p>
        </body>
      </html>
    `);
  })
  .listen(PORT);

util.log(`Web Server listening on port ${PORT}`);
