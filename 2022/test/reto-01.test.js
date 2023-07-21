/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable quotes */
import { describe, expect, it } from "vitest";
import { Wrapping } from "../src/reto-01";

describe("Wrapping", () => {
  it("should have an array as parammeter", () => {
    expect(Wrapping()).toBe(false);
    expect(Wrapping("gifts")).toBe(false);
  });

  it("should have an array with strings only", () => {
    expect(Wrapping([1, 2])).toBe(false);
    expect(Wrapping([1, "2"])).toBe(false);
  });

  it("should return an array", () => {
    expect(Wrapping(["1", "2"])).toBeTypeOf("object");
  });

  it("should return an array of wrapped gifts", () => {
    expect(Wrapping(["1", "2"])).toStrictEqual([
      "***\n*1*\n***",
      "***\n*2*\n***",
    ]);
  });
});
