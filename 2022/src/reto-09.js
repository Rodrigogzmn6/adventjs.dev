/* eslint-disable semi */
/* eslint-disable quotes */

export const countTime = (leds) => {
  if (!leds || typeof leds !== "object") throw new Error();
  leds.forEach((led) => {
    if (led !== 0 && led !== 1) throw new Error();
  });

  let time = 0;

  if (!leds.includes(0)) {
    return 0;
  }

  const newLeds = [];
  let hasChange = false;
  leds.forEach((led, index) => {
    if (led === 0 && leds[index - 1] === 1) {
      hasChange = true;
      newLeds.push(1);
    } else if (index === 0 && leds[leds.length - 1] === 1) {
      hasChange = true;
      newLeds.push(1);
    } else {
      newLeds.push(leds[index]);
    }
  });

  if (hasChange) {
    time += 7;
    time += countTime(newLeds);
  }

  return time;
};
