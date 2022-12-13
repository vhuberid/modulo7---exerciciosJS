//Else If - Mais Se

//Exemplo1
const bodytemperature =  36 //se estiver abaixo de 36 e acima de 39 aparece "A pessoa está doente"

if (bodytemperature >= 36 && bodytemperature <= 39) {
    console.log("A pessoa está saudável")
} else { 
    console.log("A pessoa está doente")
}

//Exemplo2

const bodytemperature2 = 36 //alterando este valor para: acima de 39, aparece msg 1; abaixo de 36, aparece a msg 2.

if (bodytemperature2 >= 36 && bodytemperature2 <= 39) {
    console.log("A pessoa está saudável")
} else if (bodytemperature2 > 39) {
    console.log("A pessoa está com febre")
} else {                                                //por último vem o else. Se nao tiver outro else if ele executa o else.
    console.log("A pessoa está hipotérmica")
}




