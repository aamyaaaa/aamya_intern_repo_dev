// issue_20/my-react-app/src/utils/math.test.js
import { test, expect } from "vitest";
import { addNumbers } from "./math";

test("adds two numbers correctly", () => {
  expect(addNumbers(2, 3)).toBe(5);
  expect(addNumbers(-1, 1)).toBe(0);
  expect(addNumbers(10, 5)).toBe(15);
});