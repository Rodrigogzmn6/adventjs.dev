/* eslint-disable semi */
/* eslint-disable quotes */

export const fitsInOneBox = (boxes) => {
  let works = true;
  // const volumes = boxes.map((box) => box.l * box.w * box.h);
  const sortedVolumes = boxes.map((box) => box.l * box.w * box.h);
  sortedVolumes.sort((a, b) => a - b);
  console.log(sortedVolumes);

  // Si hay dos cajas con mismo volumen ya es falso
  for (let i = 0; i < sortedVolumes.length; i++) {
    let elementos = 0;
    for (let j = 0; j < sortedVolumes.length; j++) {
      if (sortedVolumes[i] === sortedVolumes[j]) {
        elementos += 1;
      }
    }
    if (elementos > 1) works = false;
  }

  // Ordeno las cajas de menor a mayor
  const sortedBoxes = [];
  sortedVolumes.forEach((sortedVolume, volumeIndex) => {
    for (let i = 0; i < boxes.length; i++) {
      const boxVolume = boxes[i].l * boxes[i].w * boxes[i].h;
      if (sortedVolume === boxVolume) {
        sortedBoxes.push(boxes[i]);
      }
    }
  });

  for (let i = 0; i < sortedBoxes.length - 1; i++) {
    if (
      sortedBoxes[i].l >= sortedBoxes[i + 1].l ||
      sortedBoxes[i].w >= sortedBoxes[i + 1].w ||
      sortedBoxes[i].h >= sortedBoxes[i + 1].h
    ) {
      works = false;
    }
  }

  return works;
};
