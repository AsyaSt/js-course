/*Завершите функцию, которая принимает два целых числа ( a, b, где a <  b) 
и возвращает массив всех целых чисел между входными параметрами, включая их.*/

function between (a, b) {
    const result = [];
    for (a; a <= b; a += 1) {
      result.push(a)
    }
    return console.log(result);
  }

between(1, 4) // [1, 2, 3, 4]
between(-2, 2) //[-2, -1, 0, 1, 2]