/* eslint-disable semi */
/* eslint-disable quotes */

export const distributeGifts = (packOfGifts, reindeers) => {
  if (!packOfGifts || !reindeers) throw new Error();

  if (typeof packOfGifts !== "object") throw new Error();
  packOfGifts.forEach((gift) => {
    if (typeof gift !== "string") throw new Error();
  });

  if (typeof reindeers !== "object") throw Error();
  reindeers.forEach((reindeer) => {
    if (typeof reindeer !== "string") throw Error();
  });

  let boxWeight = 0;

  packOfGifts.forEach((gift) => {
    boxWeight += gift.length;
  });

  let reindeersStrength = 0;

  reindeers.forEach((reindeer) => {
    reindeersStrength += 2 * reindeer.length;
  });

  return Math.floor(reindeersStrength / boxWeight);
};
