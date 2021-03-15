import dictionaryRoutes from "./dictionary-routes";
import express from "express";
import request from "supertest";
import { saveToJsonFile } from "./lib";

const app = express();
app.use("/dictionary", dictionaryRoutes);

const mockData = [
  { term: "a", defined: "a" },
  { term: "b", defined: "b" },
];

// ** arg1 file to mock, arg2 redefine
jest.mock("../data/skiTerms.json", () => mockData);

// ** mock for save function
jest.mock("./lib", () => {
  {
    saveToJsonFile: jest.fn();
  }
});

describe("dictionary-routes", () => {
  it("should GET /dictionary success", async () => {
    const { body } = await request(app).get("/dictionary");
    expect(body).toEqual(mockData);
  });

  it("should DELETE /dictionary/:term", async () => {
    const { body } = await request(app).delete(`/dictionary/a`);

    expect(body).toEqual({
      status: "success",
      removed: "a",
      newLength: 1,
    });

    // ** imported saveToJson is mocked now
    expect(saveToJson).toHaveBeenCalledWith({ term: "b", defined: "b" });
  });
});
