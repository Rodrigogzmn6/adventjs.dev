/* eslint-disable semi */
/* eslint-disable quotes */

export const decorateTree = (base) => {
  const decoratedTree = [base];
  const possibleDecorations = ["B", "R", "P"];

  const getFather = (left, right) => {
    let father = "";
    possibleDecorations.forEach((decoration) => {
      if (left === right) father = left;
      else if (
        (decoration !== left && decoration !== right) ||
        (decoration === left && decoration === right)
      ) {
        father = decoration;
      }
    });
    return father;
  };

  // Número de filas del árbol
  for (let i = 0; i < base.length - 1; i += 2) {
    let nextRow = "";
    for (
      let j = 0;
      j < decoratedTree[decoratedTree.length - 1].length - 1;
      j += 2
    ) {
      nextRow +=
        getFather(
          decoratedTree[decoratedTree.length - 1][j],
          decoratedTree[decoratedTree.length - 1][j + 2]
        ) + " ";
    }
    decoratedTree.push(nextRow.slice(0, -1));
  }

  return decoratedTree.reverse();
};
