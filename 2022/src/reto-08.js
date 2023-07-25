/* eslint-disable semi */
/* eslint-disable quotes */

export const checkPart = (part) => {
  let partOk = true;

  const checkPalindrom = (word) => {
    let palindrum = true;
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== word[word.length - (i + 1)]) {
        palindrum = false;
      }
    }
    return palindrum;
  };

  partOk = checkPalindrom(part);

  if (!partOk) {
    for (let i = 0; i < part.length; i++) {
      const newWord = part.slice(0, i) + part.slice(i + 1);
      partOk = checkPalindrom(newWord);
      if (partOk) break;
    }
  }

  return partOk;
};
