/*Никаких разговоров. Никаких объяснений. 
Только ТЗ и результат, который должен быть. 
Посмотрите, что должно получиться на выходе и напишите эту функцию.

Пример кода:
   spacey(['kevin', 'has','no','space']) => [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']
   spacey(['this','cheese','has','no','holes']) => ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']*/


   function spacey(arr) {
    newArr = [];
    let a = new String();
    for (let i of arr) {
      a += i
      newArr.push(a)
    }
    return console.log(newArr)
  }