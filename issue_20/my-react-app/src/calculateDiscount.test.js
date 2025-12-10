import { describe, it, expect } from "vitest";
import { calculateDiscount } from "./calculateDiscount";

describe("calculateDiscount", () => {
  it("returns 90 when price is 100 and discount is 10%", () => {
    const result = calculateDiscount(100, 10);
    expect(result).toBe(90);
  });

  it("returns the same price when discount is 0%", () => {
    const result = calculateDiscount(200, 0);
    expect(result).toBe(200);
  });

  it("returns 0 when discount is 100%", () => {
    const result = calculateDiscount(50, 100);
    expect(result).toBe(0);
  });
});
