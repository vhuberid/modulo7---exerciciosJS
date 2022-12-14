//Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.

const myNumber = 11

if (myNumber % 2 === 0) {

    if (myNumber % 5 === 0) console.log("Número par e divisível por 5")
        else console.log ("Número par e nao divisível por 5")
} else {
    for ( let i = 2; i < myNumber; i++)
    if (myNumber % i === 0) {
        console.log("Número ímpar mas nao primo")
        break
    } else {
        if (i === myNumber - 1) console.log("Número primo")
    }
    
}

