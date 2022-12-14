//Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO

const Person = {
    name: "Vanessa",
    nationality: "brasileira"
}

//const nationality = "brasileira"
//OU
console.log(Person.nationality == "brasileira")

//OU

if(Person.nationality === "brasileira"){
    console.log("Ele é brasileiro")
} else {
    console.log("Ele é estrangeiro")
}
