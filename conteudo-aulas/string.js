let myFirstString = "com aspas duplas"
let mySecondString = 'com aspas simples'
let myThirdString = `com crase` //template literals ou template strings

//Nao pode repetir aspas dentro de uma string. Variar os sinais/acentos:

let string = "Fulano falou 'blablabla'"

//com a crase: 

//* pode quebrar linhas 

//* pode usar referencias dentro da frase:

let numberOfPeopleClass = 34

let myString = `Tinham ${numberOfPeopleClass} pessoas na aula hoje`

console.log(myString)

//pode fazer conta

let myStringWithMath = `Tinham ${10+20+4} pessoas na aula hoje`

console.log(myStringWithMath)