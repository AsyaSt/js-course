/*Удалите n восклицательных знаков в предложении слева направо. n - положительное целое число.*/

function remove(phrase, number) {
  let phraseArr = phrase.split('');
  let counter = 1;
  for (let i in phraseArr) {
    if (phraseArr[i] === '!' && counter <= number) {
      delete phraseArr[i]
      counter += 1;
    }
  }
  return console.log(phraseArr.join(""))
}
remove("!!!Hi !!hi!!! !hi",1) // "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) // "Hi !!hi!!! !hi"