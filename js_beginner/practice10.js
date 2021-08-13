/*Напишите функцию, которая будет принимать в себя массив c именами, и возвращать массив, но уже с удаленными нежелательными именами. 
Массив с нежелательными именами должен быть внутри вашей функции: const unwantedNames = [“Дима”, “Саша”, ”Ольга”, ‘Никита”].*/

function cleanName (names) {
    const unwantedNames = ['Дима', 'Саша', 'Ольга', 'Никита'];
    const wantedNames = [];
    for (const name of names) {
      if (!unwantedNames.includes(name)) {
        wantedNames.push(name)
      }
    }
    //console.log(wantedNames)
    return wantedNames;
  }
  cleanName (['Алишер', 'Ольга', ])