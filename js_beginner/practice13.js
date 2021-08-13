/*Напишите функцию, которая преобразует шестнадцатеричное число
(заданное в виде строки) в десятичное число.*/

function hexToDec(x, base = 16) {
    const parsed = parseInt(x, base);
    if (isNaN(parsed)) { return 0; }
    console.log(parsed);
    return parsed;
  }
