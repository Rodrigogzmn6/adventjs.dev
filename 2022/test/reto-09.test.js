/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable quotes */

import { describe, expect, it } from "vitest";
import { countTime } from "../src/reto-09";

const leds1 = [0, 1, 1, 0, 1];
const leds2 = [0, 0, 0, 1];
const leds3 = [0, 0, 1, 0, 0];

describe("Distribute Gifts", () => {
  it("should have an array of 1s and 0s as parammeters", () => {
    expect(() => countTime()).toThrowError();
    expect(() => countTime(1)).toThrowError();
    expect(() => countTime([1, 2])).toThrowError();
  });

  it("should return a number", () => {
    expect(countTime(leds1)).toBeTypeOf("number");
  });

  it("should return 0", () => {
    expect(countTime([1, 1, 1, 1, 1, 1])).toBe(0);
  });

  it("should return a specific time", () => {
    console.log("Intento");
    expect(countTime(leds1)).toBe(7);
    expect(countTime(leds2)).toBe(21);
    expect(countTime(leds3)).toBe(28);
  });
});
