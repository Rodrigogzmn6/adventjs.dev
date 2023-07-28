/* eslint-disable semi */
/* eslint-disable quotes */

export const selectSleigh = (distance, sleighs) => {
  let idealSleigh = {};
  const totalConsumptions = [];

  sleighs.forEach((sleigh) => {
    totalConsumptions.push(sleigh.consumption * distance);
  });

  for (let i = 0; i < totalConsumptions.length; i++) {
    if (totalConsumptions[i] > 20) {
      totalConsumptions.splice(i, 1);
      i--;
    }
  }

  if (totalConsumptions.length <= 0) return null;

  const idealConsumption = Math.max(...totalConsumptions);

  sleighs.forEach((sleigh) => {
    if (sleigh.consumption * distance === idealConsumption) {
      idealSleigh = sleigh;
    }
  });

  console.log(idealConsumption);

  return idealSleigh.name;
};
