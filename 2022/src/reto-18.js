/* eslint-disable semi */
/* eslint-disable quotes */

export const dryNumber = (dry, numbers) => {
  const compromisedNumbers = [];

  for (let n = 1; n <= numbers; n++) {
    if (`${n}`.includes(`${dry}`)) {
      compromisedNumbers.push(n);
    }
  }

  return compromisedNumbers;
};
