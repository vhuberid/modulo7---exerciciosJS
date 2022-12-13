// Operadores de Comparacao

// ==      Igual: compara o valor mas nao o tipo
// ===     Totalmente igual: compara o valor e o tipo                !!!!!GERALMENTE SE USA ESSE!!!!!

// !=      Diferente: compara o valor mas nao o tipo
// !==     Totalmente diferente: compara o valor e o tipo            !!!!!GERALMENTE SE USA ESSE!!!!!

const firstPerson = "Joao" //o sinal de igual significa que estou atribuindo valor
const secondPerson = "Maria" 

console.log(firstPerson == secondPerson) //questiona se o valor de um é igual ao valor de outro

const firstNumber = 23
const secondNumber = 23

console.log(firstNumber == secondNumber) //compara os dois valores e afirma que sao iguais.
console.log(firstNumber === secondNumber) //compara valores e tipos e afirma que sao iguais.

const thirdNumber = "23"
const fourthNumber = 23

console.log(thirdNumber == fourthNumber) //compara os dois valores e afirma que sao iguais.
console.log(thirdNumber === fourthNumber) //compara valores e tipos e afirma que nao sao iguais.

console.log(firstNumber != secondNumber) //compara os dois e afirma que sao iguais.
console.log(thirdNumber !== fourthNumber) //compara os dois e afirma que eles sao totalmente diferentes.