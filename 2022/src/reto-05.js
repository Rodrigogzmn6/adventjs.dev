/* eslint-disable semi */
/* eslint-disable quotes */

export const getGiftsToRefill = (a1, a2, a3) => {
  if (!a1 || !a2 || !a3) throw new Error();

  if (
    typeof a1 !== "object" ||
    typeof a2 !== "object" ||
    typeof a3 !== "object"
  )
    throw new Error();

  const giftsToRefill = [];

  a1.forEach((gift) => {
    if (typeof gift !== "string") throw new Error();
    if (
      !a2.includes(gift) &&
      !a3.includes(gift) &&
      !giftsToRefill.includes(gift)
    )
      giftsToRefill.push(gift);
  });

  a2.forEach((gift) => {
    if (typeof gift !== "string") throw new Error();
    if (
      !a1.includes(gift) &&
      !a3.includes(gift) &&
      !giftsToRefill.includes(gift)
    )
      giftsToRefill.push(gift);
  });

  a3.forEach((gift) => {
    if (typeof gift !== "string") throw new Error();
    if (
      !a1.includes(gift) &&
      !a2.includes(gift) &&
      !giftsToRefill.includes(gift)
    )
      giftsToRefill.push(gift);
  });

  return giftsToRefill;
};
