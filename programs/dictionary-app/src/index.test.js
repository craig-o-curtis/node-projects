import "./index.js";
import app, { PORT } from "./app.js"; // ** app is mock here

// ** mock out the module, has listeners
jest.mock("./app");

describe("dictionary app", () => {
  it("should call listen on app", () => {
    expect(app.listen).toHaveBeenCalled();
  });
});
