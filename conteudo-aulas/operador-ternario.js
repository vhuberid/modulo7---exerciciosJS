//Operador Ternario

// ? SE
// : SENAO

//Exemplo1: Chuva

const rain = false
const umbrella = rain ? "take umbrella" : "leave umbrella"

console.log(umbrella)

const rain2 = true
const umbrella2 = rain2 ? "take umbrella" : "leave umbrella"

console.log(umbrella2)

//Exemplo2: Transferencia

const balance = true
const accNotBlocked = true
const accExists = true

const transferOk = balance && accNotBlocked && accExists ? "Transferencia Realizada" : "Transferencia Negada"

console.log(transferOk)

//se a conta estiver bloqueada ou a conta nao existir, qualquer um dos valores const forem falsos, aparece Trans. Neg.