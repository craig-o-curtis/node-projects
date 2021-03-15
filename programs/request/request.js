import util from "util";
import https from "https";
import fs from "fs";

const options = {
  hostname: "en.wikipedia.org",
  port: 443,
  path: "/wiki/Snoopy",
  method: "GET",
};

const request = https.request(options, (res) => {
  let resBody = "";
  res.setEncoding("UTF-8");
  // res - readable stream
  res.on("data", (data) => {
    util.log(`---chunk---${data.length}`);
    resBody += data;
  });

  res.on("end", () => {
    fs.writeFile("./files/snoopy.html", resBody, (err) => {
      if (err) throw err;
      util.log("File downloaded and written");
    });
  });
});

request.end();
