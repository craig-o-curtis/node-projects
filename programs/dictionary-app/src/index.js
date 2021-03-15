import app, { PORT } from "./app.js";
import dotenv from "dotenv";
import { log } from "clear-logs";

dotenv.config();

app.listen(PORT, () => {
  log(`Ski Dictionary on port ${PORT}, ${process.env.TEST_VAR}`);
});
