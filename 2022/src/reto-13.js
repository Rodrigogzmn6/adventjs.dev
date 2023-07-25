/* eslint-disable semi */
/* eslint-disable quotes */

export const getFilesBackup = (lastBackup, changes) => {
  // Expresion regular para chequear que los numeros sean naturales
  const dateRegex = /^\d+$/;

  // Verificacion de que se mandan los parametros
  if (!lastBackup || !changes) throw new Error();

  // Verificacion de que los parametros son del tipo correcto
  if (typeof lastBackup !== "number" || typeof changes !== "object") {
    throw new Error();
  }

  if (new Date(lastBackup) > new Date()) throw new Error();

  // Verificacion de que lastBackup es un numero entero > 0
  if (!dateRegex.test(lastBackup) || lastBackup <= 0) {
    throw new Error();
  }

  const modifiedFiles = [];
  changes.forEach((change) => {
    // Verificacion de que los parametros son del tipo correcto
    if (
      change.length !== 2 ||
      typeof change[0] !== "number" ||
      typeof change[1] !== "number"
    ) {
      throw new Error();
    }

    // Verificacion de que el id y el timestamp sean un numero entero > 0
    if (!dateRegex.test(change[0]) || !dateRegex.test(change[1])) {
      throw new Error();
    }

    if (change[1] <= 0) {
      throw new Error();
    }

    if (new Date(change[1]) > new Date()) throw new Error();

    if (change[1] > lastBackup && !modifiedFiles.includes(change[0])) {
      modifiedFiles.push(change[0]);
    }
  });

  return modifiedFiles.sort((a, b) => a - b);
};
