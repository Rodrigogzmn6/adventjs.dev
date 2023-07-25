/* eslint-disable semi */
/* eslint-disable quotes */

export const checkStepNumbers = (systemNames, stepNumbers) => {
  let isOrdered = true;
  systemNames.forEach((systemName) => {
    const stepSerie = [];
    systemNames.forEach((system, index) => {
      if (system === systemName) {
        stepSerie.push(stepNumbers[index]);
      }
    });

    for (let i = 0; i <= stepSerie.length - 1; i++) {
      if (stepSerie[i] > stepSerie[i + 1]) {
        isOrdered = false;
      }
    }
  });
  return isOrdered;
};
