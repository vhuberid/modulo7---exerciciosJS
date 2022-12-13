//Controladores de Fluxo - Condicionais - Switch Case

/* switch (key) {
    case value:
        break;
    
    default:
        break;
} */

//Exemplo1

const bodyTemperature = 36

switch(bodyTemperature) {
    case 30: 
        console.log("Temperatura muito abaixo do normal")
        break                                               //se nao inserir o break, ele segue executando todas as próximas!       

    case 33:
        console.log("Temperatura abaixo do normal")
        break

    case 36:
        console.log("Temperatura normal")
        break

    default:                                            //quando a info nao se enquadra em nenhuma case, ele usa a default.
        console.log("Temperatura nao encontrada")       //se nao tiver default e os valores nao estiverem listados ele nao executa nada.
        break
}

//Exemplo2

const bool = false

switch(bool) {
    case true: 
        console.log("Verdadeiro")
        break
    
    case false:
        console.log("Falso")
        break

}