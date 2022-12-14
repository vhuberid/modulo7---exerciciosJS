//Crie 5 objetos nesse formato {nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
//Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo, a pessoa deve ser maior de idade e brasileira 
//para ser aprovada.

const firstPerson = {
    nome: "Vanessa", 
    idade: 31,
    sexo: "female", 
    profissão: "programadora",
    nacionalidade: "brasileira"
}

if(firstPerson.idade >= 18 && (firstPerson.nacionalidade === "brasileira"  || firstPerson.nacionalidade === "brasileiro")) {
    console.log("Voce foi aprovado")
}   else{
    console.log("Voce NAO foi aprovado")
}
    

const secondPerson = {
    nome: "Daniel", 
    idade: 31,
    sexo: "male", 
    profissão: "programador", 
    nacionalidade: "alemao"
}
if(secondPerson.idade >= 18 && (secondPerson.nacionalidade === "brasileira"  || secondPerson.nacionalidade === "brasileiro")) {
    console.log("Voce foi aprovado")
}   else{
    console.log("Voce NAO foi aprovado")
}

const thirdPerson = {
    nome: "Fulano", 
    idade: 12,
    sexo: "female", 
    profissão: "programadora", 
    nacionalidade: "brasileira",
}
if(thirdPerson.idade >= 18 && (thirdPerson.nacionalidade === "brasileira"  || thirdPerson.nacionalidade === "brasileiro")) {
    console.log("Voce foi aprovado")
}   else{
    console.log("Voce NAO foi aprovado")
}

const fourthPerson = {
    nome: "Ciclano", 
    idade: 56,
    sexo: "male", 
    profissão: "programador", 
    nacionalidade: "argentina",
}
if(fourthPerson.idade >= 18 && (fourthPerson.nacionalidade === "brasileira"  || fourthPerson.nacionalidade === "brasileiro")) {
    console.log("Voce foi aprovado")
}   else{
    console.log("Voce NAO foi aprovado")
}

const fifthPerson = {
    nome: "Beltrano", 
    idade: 45,
    sexo: "male", 
    profissão: "programador", 
    nacionalidade: "croata"
}
if(fifthPerson.idade >= 18 && (fifthPerson.nacionalidade === "brasileira"  || fifthPerson.nacionalidade === "brasileiro")) {
    console.log("Voce foi aprovado")
}   else{
    console.log("Voce NAO foi aprovado")
}
