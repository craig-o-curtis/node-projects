import express, { Router } from "express";
import { saveToJsonFile } from "./lib.js";
import skiTerms from "../data/skiTerms.json";

let localSkiTerms = skiTerms;

const dictionaryRoutes = new Router();

// ** GET endpoint for JSON file
dictionaryRoutes.get("/", (req, res) => {
  res.json(localSkiTerms);
});

// ** POST endpoint - (optional express.json() here or as middleware)
dictionaryRoutes.post("/", express.json(), (req, res) => {
  const updatedSkiTerms = [...localSkiTerms];
  updatedSkiTerms.push(req.body);
  localSkiTerms = [...updatedSkiTerms];
  saveToJsonFile(updatedSkiTerms);
  res.json({ status: "success", term: req.body }); // reloads page
  // res.sendStatus(200); // doesn't reload page
});

// ** DELETE endpoint
dictionaryRoutes.delete("/:term", (req, res) => {
  // ** Jest incorrectly fails here looking for a spread operator
  localSkiTerms = Array.isArray(localSkiTerms) ? localSkiTerms : [];
  let newTerms = localSkiTerms.filter((def) => def.term !== req.params.term);
  localSkiTerms = newTerms;

  saveToJsonFile(newTerms);

  res.json({
    status: "success",
    remove: req.params.term,
    newLength: skiTerms.length,
  });
});

export default dictionaryRoutes;
