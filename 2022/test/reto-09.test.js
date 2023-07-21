/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable quotes */

import { describe, expect, it } from "vitest";
import { getGiftsToRefill } from "../src/reto-07";

const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];

describe("Distribute Gifts", () => {
  it("should have three parammeters", () => {
    expect(() => getGiftsToRefill()).toThrowError();
    expect(() => getGiftsToRefill(1)).toThrowError();
    expect(() => getGiftsToRefill(1, 2)).toThrowError();
  });

  it("should have an array as each parammeters", () => {
    expect(() => getGiftsToRefill(1, 2, 3)).toThrowError();
    expect(() => getGiftsToRefill([1], 2, 3)).toThrowError();
    expect(() => getGiftsToRefill(1, [2], 3)).toThrowError();
    expect(() => getGiftsToRefill(1, 2, [3])).toThrowError();
  });

  it("should have an array of strings as each parammeters", () => {
    expect(() => getGiftsToRefill([1], [2], [3])).toThrowError();
  });

  it("should return an array", () => {
    expect(getGiftsToRefill(["1"], ["1"], ["1"])).toBeTypeOf("object");
  });

  it("should return an specific array", () => {
    expect(getGiftsToRefill(a1, a2, a3)).toStrictEqual(["muñeca", "pc"]);
  });
});
