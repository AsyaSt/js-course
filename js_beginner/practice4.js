/*Дан массив ['Саша', 'Петя', 'Оксана'], сделайте из него ['Оксанa', 'Олег', 'Саша']. 
Реализуйте эту задачу, двумя способами. 
В первом исходный массив должен быть изменен, во втором - не должен быть изменен.*/

//Исходный массив изменяется
const arr = ['Саша', 'Петя', 'Оксана'];
arr[1] = "Олег";
alert(arr.reverse());

//Перезаписываю в новый массив данные. Исходный массив не изменяется.
const arr1 = ['Саша', 'Петя', 'Оксана'];
const arrChanged = arr1.slice(0).reverse();
arrChanged[1] = 'Олег'
console.log(arrChanged)
console.log(arr1)