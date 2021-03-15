import { createServer } from "http";
import { createReadStream } from "fs";
import { decode } from "querystring";
import util from "util";

const PORT = 3000;

const sendFile = (responseStream, status, type, filePath) => {
  responseStream.writeHead(status, { "Content-Type": type });

  createReadStream(filePath).pipe(responseStream);
};

createServer((req, res) => {
  // ** handle post call
  // ** ** req is a readable stream
  if (req.method === "POST") {
    let body = "";
    req.on("data", (data) => {
      body += data;
    });
    req.on("end", () => {
      const { name, email, message } = decode(body);
      util.log({ name, email, message });
    });
  }

  // ** return files / pages
  switch (req.url) {
    case "/":
      return sendFile(
        res,
        200,
        "text/html",
        "./programs/file-server/home-page.html"
      );
    case "/contact":
      return sendFile(
        res,
        200,
        "text/html",
        "./programs/file-server/contact.html"
      );
    case "/img/profile.jpeg":
      return sendFile(
        res,
        200,
        "image/jpeg",
        "./programs/file-server/profile.jpeg"
      );
    case "/styles.css":
      return sendFile(
        res,
        200,
        "text/css",
        "./programs/file-server/styles.css"
      );
    default:
      return sendFile(res, 200, "text/html", "./programs/file-server/404.html");
  }
}).listen(PORT);

util.log(`Personal website running on port ${PORT}`);
