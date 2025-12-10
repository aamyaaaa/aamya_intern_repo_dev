import { describe, it, expect } from "vitest";

import counterReducer, {
  increment,
  decrement,
  reset,
  incrementAsync,
} from "./counterSlice";

describe("counter reducer tests", () => {
  it("should return the initial state by default", () => {
    const result = counterReducer(undefined, { type: "unknown" });
    expect(result).toEqual({ value: 0 });
  });

  it("should handle increment", () => {
    const initialState = { value: 0 };
    const result = counterReducer(initialState, increment());
    expect(result.value).toBe(1);
  });

  it("should handle decrement", () => {
    const initialState = { value: 5 };
    const result = counterReducer(initialState, decrement());
    expect(result.value).toBe(4);
  });

  it("should handle reset", () => {
    const initialState = { value: 10 };
    const result = counterReducer(initialState, reset());
    expect(result.value).toBe(0);
  });
});

describe("counter async thunk tests", () => {
  it("should handle incrementAsync.fulfilled", () => {
    const initialState = { value: 0 };

    const result = counterReducer(initialState, {
      type: incrementAsync.fulfilled.type,
      payload: 3,
    });

    expect(result.value).toBe(3);
  });
});
