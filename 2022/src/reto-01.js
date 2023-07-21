/* eslint-disable semi */
/* eslint-disable quotes */

export const Wrapping = (gifts) => {
  if (typeof gifts !== "object") return false;

  let areAllStrings = true;
  gifts.forEach((gift) => {
    if (typeof gift !== "string") areAllStrings = false;
  });
  if (!areAllStrings) return false;

  let wrappedGifts = [];
  gifts.forEach((gift) => {
    let wrappedGift = "";

    // Wrapping the top of the gift
    for (let i = 0; i <= gift.length + 1; i++) {
      wrappedGift = wrappedGift + `*`;
    }

    // Wrapping the left of the gift
    wrappedGift = wrappedGift + `\n*`;

    // Puttin the gift inside
    wrappedGift = wrappedGift + gift;

    // Wrapping the right of the gift
    wrappedGift = wrappedGift + `*\n`;

    // Wrapping the top of the gift
    for (let i = 0; i <= gift.length + 1; i++) {
      wrappedGift = wrappedGift + `*`;
    }

    wrappedGifts.push(wrappedGift);
  });

  return wrappedGifts;
};
