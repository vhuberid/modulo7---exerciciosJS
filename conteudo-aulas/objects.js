// Objetos

// o objeto tem propriedades, e para cada propriedade ele tem um valor.
// propriedade : valor
// Ex: Televisao.
//      marca: Samsung
//      tamanho: 75"
// Ex: Pessoas
//      nome: Emilia
//      idade: 1a5m

const Person1 = {
    name: "Vanessa", //se texto, sempre colocar aspas; quando passar de uma propriedade para outra, precisa colocar vírgula.
    age: 31,
    sex: "female" //na ultima nao precisa virgula
}

//assim nao precisa criar varias const, cria somente uma const e coloca todas as informacoes do usuario/objeto etc.

console.log(Person1)

//se quiser mostrar na tela somente uma propriedade do objeto pode selecionar assim:

console.log(Person1.name)

//pode colocar objetos dentro de objetos também

const Person2 = {
    name: "Vanessa", 
    age: 31,
    sex: "female",
    address: {
        street: "xxxxx",
        number: 1,
        country: "yyyy",
    }
}

console.log(Person2.address.street)

