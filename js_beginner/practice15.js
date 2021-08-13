/*Вы должны реализовать функцию, которая возвращает разницу между наибольшим и наименьшим значением в списке , полученном в качестве аргумента функции. 
Массив, который получает функция в качестве аргумента, может содержать положительные и отрицательные числа. 
Если массив пуст или имеет одно значение, верните ноль. 
Изначально, массив будет подан в неотсортированном виде. Пример: maxDiff([1, 2, 3, -4]); // вернет 7, потому что: 3 - (-4) == 7*/

function maxDiff(numberArr) {
  let theBiggestNum = numberArr[0];
  let theSmallestNum = numberArr[0];
  for (let i of numberArr) {
    if (i > theBiggestNum) {
      theBiggestNum = i;
    } else if(i < theSmallestNum) {
      theSmallestNum = i;
    }
  }
  const diff = (numberArr.length === 0) ? 0 : (theBiggestNum - theSmallestNum);
  console.log(diff)
  return diff;
}
maxDiff([1, 2, 3, -4]) //7