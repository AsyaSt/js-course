/*Напишите скрипт, который принимает с клавиатуры 2 числа, и если первое больше второго, то выводит на экран их сумму, 
если же наоборот - произведение. 
Если числа одинаковые, выводит на экран 'числа одинаковые'.*/

const number1 = prompt('Введите первое число');
const number2 = prompt('Введите второе число');

if (number1 === number2) {
  alert('числа одинаковые');
} else if (number1 > number2) {
  alert (number1 + number2);
} else {
  alert (number1 * number2);
}