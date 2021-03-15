import express from "express";
import { logger } from "./lib.js";
import dictionaryRoutes from "./dictionary-routes";

const app = express();
export const PORT = 3000;

// ** middleware
// app.use(express.json());
app.use(logger);
// ** Serve up built client app
app.use(express.static("./client"));
//** router */
app.use("/dictionary", dictionaryRoutes);

export default app;
