/* eslint-disable semi */
/* eslint-disable quotes */

export const sortToys = (toys, positions) => {
  const sortedToys = [];
  for (
    let i = Math.min(...positions);
    i < Math.min(...positions) + toys.length;
    i++
  ) {
    sortedToys.push(toys[positions.indexOf(i)]);
  }

  return sortedToys();
};
