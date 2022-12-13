//Estruturas de repeticao - For

//Estrutura específica:

//insere nos parenteses os parametros separados por ; 
//primeiro inicia com uma variável e atribui um valor; geralmente se usa i que é abrev. para index
//segundo parametro é até quanto o for vai contar - por ser uma estrut. de rep.
//terceiro parametro é o que vai ocorrer a cada ciclo

//Exemplo1: contando até 10
for (let i = 0; i<=10; i++) {
    console.log(i)
}

//Exemplo2:

const students = ["Bruna", "Ana", "Maria", "Joao", "Pedro"]

for(let i = 0; i < students.length; i++) {                      // para saber o tamanho do array usa console.log(nomeDoArray.lenght)
    console.log(`${students[i]} está presente na aula`)         // uso da crase formando a frase = "poderes mágicos"
}

//QUANDO USAR FOR: se usa o for quando voce quer/consegue prever quando o evento inicia e quando ele TERMINA.
//QUANDO USAR WHILE: se usa o while quando voce nao sabe quando o evento termina.



