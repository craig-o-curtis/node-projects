//  ** lib.js for helper functions
import fs from "fs";
import path from "path";
import { info, log } from "clear-logs";

export const saveToJsonFile = async (argSkiTerms) => {
  // ** null 2 - format JSON to nest at 2 indentations

  const written = await fs.writeFileSync(
    path.join(__dirname, "..", "data", "skiTerms.json"),
    JSON.stringify(argSkiTerms, null, 2)
  );
  return written;
};

export const logger = (req, res, next) => {
  log(`${req.method} request for ${req.url}`);

  info(req.body);

  if (
    req.body !== undefined &&
    req.body !== null &&
    Object.keys(req.body).length
  ) {
    log(req.body);
  }
  next();
};
