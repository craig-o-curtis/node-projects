import util from "util";
import https from "https";
import fs from "fs";

const request = https.get(
  "https://en.wikipedia.org/wiki/Charlie_Brown",
  (res) => {
    let download = fs.createWriteStream("./files/charlie-brown.html");
    res.pipe(download); // ** from readable to writeable stream

    res.on("end", () => {
      util.log("File downloaded and created");
    });
  }
);

request.end();
