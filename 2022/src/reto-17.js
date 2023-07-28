/* eslint-disable semi */
/* eslint-disable quotes */

export const printTable = (gifts) => {
  let giftColumnLength = "Gift".length;
  let quantityColumnLength = "Quantity".length;

  gifts.forEach((gift) => {
    if (gift.name.length > giftColumnLength) {
      giftColumnLength = gift.name.length;
    }
    if (gift.quantity.toString().length > quantityColumnLength) {
      quantityColumnLength = gift.quantity.toString().length;
    }
  });

  const firstRow =
    "+".repeat(giftColumnLength + quantityColumnLength + 7) + "\n";

  const spacesAfterGift = " ".repeat(giftColumnLength - 3);
  const spacesAfterQuantity = " ".repeat(quantityColumnLength - 7);
  const secondRow =
    "| Gift" + spacesAfterGift + "| Quantity" + spacesAfterQuantity + "|\n";

  const giftDashes = "-".repeat(giftColumnLength);
  const quantityDashes = "-".repeat(quantityColumnLength);
  const thirdRow = "| " + giftDashes + " | " + quantityDashes + " |\n";

  let table = firstRow + secondRow + thirdRow;

  gifts.forEach((gift) => {
    const spacesAfterName = " ".repeat(giftColumnLength - gift.name.length);
    const spacesAfterQuantity = " ".repeat(
      quantityColumnLength - gift.quantity.toString().length
    );
    const giftRow =
      "| " +
      gift.name +
      spacesAfterName +
      " | " +
      gift.quantity +
      spacesAfterQuantity +
      " |\n";
    table += giftRow;
  });

  table += "*".repeat(giftColumnLength + quantityColumnLength + 7);

  return table;
};
