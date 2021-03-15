import app, { PORT } from "./app.js";
import { log } from "clear-logs";

app.listen(PORT, () => {
  log(`Ski Dictionary on port ${PORT}`);
});
