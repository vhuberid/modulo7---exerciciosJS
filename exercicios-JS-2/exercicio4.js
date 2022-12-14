//Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

const firstNumber = 10
const secondNumber = 20
const thirdNumber = 30

if (firstNumber < secondNumber) {
    console.log("Este é o menor número")
}

if (thirdNumber > secondNumber) {
    console.log("Este é o maior número")
}

//OU

if(firstNumber > secondNumber && firstNumber > thirdNumber) {
    console.log("O primeiro é o maior")
} else if (secondNumber > thirdNumber) {
    console.log("O segundo é o maior")
} else {
    console.log("o terceiro é o maior")
}

if(firstNumber < secondNumber && firstNumber < thirdNumber) {
    console.log("O primeiro é o menor")
} else if (secondNumber < thirdNumber) {
    console.log("O segundo é o menor")
} else {
    console.log("o terceiro é o menor")
}
