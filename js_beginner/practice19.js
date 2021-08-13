/*Если число четное, преобразуйте его в двоичное. Если число нечетное, преобразуйте его в шестнадцатеричное.

Пример кода:
   evensAndOdds(2) => '10'
   evensAndOdds(13) => 'd'*/

function evensAndOdds(num) {
   num % 2 === 0 ? console.log(num.toString(2)) : console.log(num.toString(16));
}