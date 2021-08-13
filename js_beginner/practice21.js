/*Дана строка, состоящяя из букв a,b,c. Ваша задача поменять расположение букв a и b, но не трогать c.

Пример кода:
   switcheroo('abc') =>'bac'
   switcheroo('aaabcccbaaa') =>'bbbacccabbb'
   switcheroo('ccccc') =>'ccccc'
   switcheroo('acb') =>'bca'
   switcheroo('aabacbaa') =>'bbabcabb'*/

   function switcheroo(str) {
    const chars = {'a':'b','b':'a'};
    return console.log(str.replace(/[ab]/g, m => chars[m]));
  }
    