/* eslint-disable semi */
/* eslint-disable quotes */

export const createCube = (size) => {
  let cube = "";
  // Creacion de linea de cara lateral
  let lineaLatSup = "";
  let lineaLatInf = "";
  for (let i = 0; i < size; i++) {
    lineaLatSup += "_\\";
    lineaLatInf += "_/";
  }

  // Crear líneas de la mitad para arriba
  for (let i = 1; i <= size; i++) {
    cube += " ".repeat(size - i) + "/\\".repeat(i) + lineaLatSup + "\n";
  }

  // Crear líneas de la mitad para abajo
  for (let i = size; i > 0; i--) {
    cube += " ".repeat(size - i) + "\\/".repeat(i) + lineaLatInf;
    if (i !== 1) {
      cube += "\n";
    }
  }

  return cube;
};
