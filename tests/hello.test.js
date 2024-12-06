import { helloWorld } from "../src/hello.js";

test("to be string", () => {
  expect(helloWorld()).toBe("Hello, world!");
});
