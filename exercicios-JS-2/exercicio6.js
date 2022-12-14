//Faça um programa onde os jurados vão dar a explicação para cada nota dada. 
//São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

const suaNota = Math.ceil(Math.random() * (10 - 0) +0)

if(suaNota === 1) {
    console.log(1)
}   else if(suaNota == 2){
    console.log(2)
}   else if(suaNota == 3){
    console.log(3)
}   else if(suaNota == 4){
    console.log(4)
}   else if(suaNota == 5){
    console.log(5)
}   else if(suaNota == 6){
    console.log(6)
}   else if(suaNota == 7){
    console.log(7)
}   else if(suaNota == 8){
    console.log(8)
}   else if(suaNota == 9){
    console.log(9)
}   else if(suaNota == 10){
    console.log(10)
}   else if(suaNota == 0){
    console.log(0)
}

//OU
const score = 10

switch (score) {
    case 0:
        console.log("Muito ruim")
        break;                              //aqui insere as notas entre 0 e 10
    case 10:
        console.log("Muito bem")
        break;
}