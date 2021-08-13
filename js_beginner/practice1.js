/*Практика JS 1.
Создайте переменную с помощью camelCase, snake_case и PascalCase и присвойте им значения от 0-я до 2-х. 
Выведите значения этих переменных на экран с помощью метода alert и console.log. 
Скажите, чем кардинально отличается alert и console.log?*/

let myFirstVariable = 0;
let my_second_variable = 1;
let MyThirdVariable = 2;

alert(myFirstVariable);
alert(my_second_variable);
alert(MyThirdVariable);

console.log(myFirstVariable);
console.log(my_second_variable);
console.log(MyThirdVariable);

/*alert() - модальное окно, оно останавливает все взаимодействие с браузером до тех пор, пока сообщение не будет отклонено, 
в то время как console. log() просто печатает сообщение на консоли. 

alert() преобразует переданный ему объект в строку с использованием метода toString(). 
А console.log() может позволить вам взаимодействовать с переданным им объектом, 
например, позволяя вам проверять его свойства.*/