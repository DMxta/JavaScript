/*
Estrutura da funcão:

function nomeDaFuncao() {
    aqui se coloca o que será executado quando a function for chamada
}

Os "()" são usados para colocar um parâmetro dentro.
No exemplo, "name" é o parâmetro, se quando a function for chamada não
tiver um parâmetro dá erro.
Exemplo, levantdo em conta o bloco de código abaixo:
Se chamar sayMyName(); o resultado no console será: "Your name is:undefined"
Para adicionar um nome basta colocar uma string no parâmetro da function
quando ela for chama e assim no console exibirá o nome no console.
*/

function sayMyName(name) {
    console.log('Your name is: ' + name)
}

//A function só é executada quando é chamada fora do bloco de código.

sayMyName('Débora');
sayMyName('Renan');

/*Essas funções não estão devolvendo nada, então chamadas de "procedimento"
porque não tem retorno.
Nessa função nã é exibido nada no console, porque ela só fez a conta e não
tem como ou onde exibir o resultado.
Se der um console.log ele vai devolver o valor no console, mas e se eu
quiser usar "quadrado" em outra conta?
Podemos dar um "return" que serve para nos retornar o valor e armazenarmos
na variável.
Se torna um pedaço de código que podemos chamar/usar várias vezes.
*/

function quadrado(valor) {
    return valor * valor
}

//Criamos uma const para chamar a function e só depois chamar no console

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

/*
Neste teste ele exibe no console a function e o nome dela.
Assim: [Function: quadrado], e não é isso que queremos

quadrado(10);
console.log(quadrado);
*/

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}
/*Aqui chamamos no console a function e no parâmetro dela colocamos
que queremos incrementarJuros em cima de 100 reais, juros de 10%
ou em cima de 100 reais, juros de 15%
*/
console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));

/*
Como organizar o código
Vamos sempre colocar nosso código principal dentro de uma função que
vai se chamar "main"
Quando precisar de mais funções, criar elas fora da function main e
para usá-las chamar na main
*/

function main() {
    console.log('Programa principal');
}

main();