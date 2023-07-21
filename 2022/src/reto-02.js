/* eslint-disable semi */
/* eslint-disable quotes */

export const countHours = (year, holidays) => {
  if (!year || !holidays) return false;
  if (typeof year !== "number") return false;
  if (typeof holidays !== "object") return false;

  let holidaysAreValidDate = true;
  const dateFormatRegex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|[1-2][0-9]|3[0-1])$/;
  // Explicacion del regex
  // 0?[1-9] indica que el 0 es opcional y luego va un valor del 1 al 9
  // Es decir, se puede escribir 1, 2, 3 ó 01, 02, 03
  // | esto undica un OR
  // 1[0-2] Coincide con los dígitos 10, 11 o 12
  // \/ Escapa el caracter /
  // Luego se escribe del 1 al 9 (con 0 opcional) ó
  // del 10 al 29 ó
  // del 30 al 31
  holidays.forEach((holiday) => {
    if (!dateFormatRegex.test(holiday)) holidaysAreValidDate = false;
  });
  if (!holidaysAreValidDate) return false;

  let hours = 0;
  holidays.forEach((holiday) => {
    const date = new Date(holiday);
    date.setFullYear(year);
    if (date.getDay() >= 1 && date.getDay() <= 5) hours += 2;
  });

  return hours;
};
