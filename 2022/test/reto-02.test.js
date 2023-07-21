/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable quotes */

import { describe, expect, it } from "vitest";
import { countHours } from "../src/reto-02";

describe("CountHours", () => {
  it("should have two parammeters", () => {
    expect(countHours("a")).toBe(false);
  });

  it("should have a number as first parammeter", () => {
    expect(countHours("a", "b")).toBe(false);
  });

  it("should have an array as second parammeter", () => {
    expect(countHours(1, 2)).toBe(false);
  });

  it("should have an array of valid dates (MM/DD) as second parammeter", () => {
    expect(countHours(1, ["2"])).toBe(false);
    expect(countHours(1, ["25/9"])).toBe(false);
  });

  it("should return a number", () => {
    expect(countHours(2022, ["1/1"])).toBeTypeOf("number");
  });

  it("should return 4 hours", () => {
    expect(countHours(2022, ["01/06", "04/01", "12/25"])).toBe(4);
  });
});
