//Operadores TypeOf e Delete

//typeof
const myNumber = 10
const myString = "Hi there!"
const myObject = {
    name: "Object",
    age: 1
}

console.log(typeof myNumber)
console.log(typeof myString)
console.log(typeof myObject)

//delete

delete myObject.age
console.log(myObject) //deixa de mostrar a idade sem deletar a informacao no código
