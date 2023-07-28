/* eslint-disable semi */
/* eslint-disable quotes */

export const checkJump = (heights) => {
  const maxHeight = Math.max(...heights);
  const firstHalf = heights.slice(0, heights.indexOf(maxHeight) + 1);
  const secondHalf = heights.slice(heights.indexOf(maxHeight) + 1);

  if (firstHalf.length <= 1 || secondHalf.length === 0) return false;

  let hasJump = false;
  let isParable = true;

  const checkSlope = (section, isUpward) => {
    for (let i = 0; i < section.length - 1; i++) {
      if (
        (isUpward && section[i] > section[i + 1]) ||
        (!isUpward && section[i] < section[i + 1])
      ) {
        isParable = false;
      } else if (
        (isUpward && section[i] < section[i + 1]) ||
        (!isUpward && section[i] > section[i + 1])
      ) {
        hasJump = true;
      }
    }
  };

  checkSlope(firstHalf, true);
  checkSlope(secondHalf, false);

  return isParable && hasJump;
};
