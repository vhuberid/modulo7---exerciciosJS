//Estruturas de Repeticao - For Of

let myName = "Vanessa"
let allNames = ["Maria", "Joao", "Pedro", "Gilberto"]

for(let name of myName) {       //aqui a variável nao precisa ter valor, pois ela assume os valores na passagem dos ciclos
    console.log(name)
}

//string = cadeia de caracteres; o for of se repete passando caracter por caracter até acabarem os caracteres da string.

for(let names of allNames) {
    console.log(names)
}

//a vantagem do for of é que nao precisa de um ponto para ele parar, ele executa enquanto tiverem caracteres para serem lidos.