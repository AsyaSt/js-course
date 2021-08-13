/*Напишите функцию, которая принимает в себя массив, а возвращает произведение элементов массива, умноженных по порядку друг на друга.*/

function multiply (numbers) {
  let result = 1;
  for (let num of numbers) {
    result *= num;
  }
  //console.log(result)
  return result;
}
multiply([1, 2, 3, 4])
