/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable quotes */

import { describe, expect, it } from "vitest";
import { distributeGifts } from "../src/reto-03";

describe("Distribute Gifts", () => {
  it("should have two parammeters", () => {
    expect(() => distributeGifts()).toThrowError();
  });

  // it("should have an array as first parammeters", () => {
  //   expect(distributeGifts(1, 2)).toBe(false);
  // });

  it("should have an array of string as first parammeters", () => {
    expect(() => distributeGifts(1, 2)).toThrowError();
    expect(() => distributeGifts([1], 2)).toThrowError();
  });

  it("should have an array of string as second parammeters", () => {
    expect(() => distributeGifts(["1"], 2)).toThrowError();
    expect(() => distributeGifts(["1"], [2])).toThrowError();
  });

  // it("should return 12", () => {
  //   expect(
  //     distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"])
  //   ).toBe(12);
  // });

  // it("should return 24", () => {
  //   expect(
  //     distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"])
  //   ).toBe(24);
  // });

  it("should return 2", () => {
    expect(
      distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"])
    ).toBe(2);
  });
});
