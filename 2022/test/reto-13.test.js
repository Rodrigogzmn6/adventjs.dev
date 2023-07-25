/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable quotes */

import { describe, expect, it } from "vitest";
import { getFilesBackup } from "../src/reto-13";

const lastBackup = 1546300800;
const changes = [
  [3, 1546301100],
  [2, 1546300800],
  [1, 1546300800],
  [1, 1546300900],
  [1, 1546301000],
];

describe("Backup", () => {
  // it("should have two parammeters, a timestamp and an array of changes", () => {
  //   expect(() => getFilesBackup()).toThrowError();
  //   expect(() => getFilesBackup("1", 2)).toThrowError();
  //   expect(() => getFilesBackup(1, 2)).toThrowError();
  // });

  // it("should have an array of arrays [id, time] as second parammeter", () => {
  //   expect(() => getFilesBackup(1, [2])).toThrowError();
  //   expect(() =>
  //     getFilesBackup(1, [
  //       [1, 2, 3],
  //       [2, 2],
  //     ])
  //   ).toThrowError();
  // });

  // it("should return array of ids to backup", () => {
  //   expect(getFilesBackup(lastBackup, changes)).toStrictEqual([1, 2, 3]);
  // });

  // it("should return error", () => {
  //   expect(() => getFilesBackup("1", 2)).toThrowError();
  //   expect(() => getFilesBackup(0, 2)).toThrowError();
  //   expect(() => getFilesBackup(1.2, 2)).toThrowError();
  //   expect(() => getFilesBackup(1, [2])).toThrowError();
  //   expect(() => getFilesBackup(1, [[2]])).toThrowError();
  //   expect(() => getFilesBackup(1, [[1, 2.1]])).toThrowError();
  //   expect(() => getFilesBackup(1.1, [[2, 2]])).toThrowError();
  // });
  it("should return array of ids to backup", () => {
    expect(getFilesBackup(lastBackup, changes)).toStrictEqual([1, 3]);
  });
});
