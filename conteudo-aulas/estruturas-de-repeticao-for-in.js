//Estruturas de repeticao - For In

const student = {
    name: "Fulana",
    age: 12,
    sex: "female"
}

for(let property in student){
    console.log(property)
}

for(let property in student){
    console.log(student[property])
}