/*Вес записан в переменную weight. Рекомендацию записывай строкой в переменную recommendation. 
Если вес до 4 кг (не включая это значение), рекомендация – 'Пора перекусить'. 
Если вес от 4 кг включительно до 5.5 кг включительно – 'Вес в норме'.
Если вес больше 5.5 кг – 'Пора на тренировку'.
 В качестве условий, используй значения weight 1, 3, 4, 5, 10. Рекомендацию выводи в консоль.*/

 const weight = 5;
 let recommendation;
 
 if (weight < 4) {
     recommendation = 'Пора перекусить';
 } else if (weight <= 5.5) {
   recommendation = 'Вес в норме';
 } else {
   recommendation = 'Пора на тренировку';
 }
 
 console.log(recommendation)