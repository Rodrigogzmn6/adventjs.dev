/* eslint-disable semi */
/* eslint-disable quotes */

export const getOptimalPath = (path) => {
  for (let i = path.length - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      path[i][j] += Math.min(path[i + 1][j], path[i + 1][j + 1]);
    }
  }
  return path[0][0];
};
