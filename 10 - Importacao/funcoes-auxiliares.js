/* Houv algum erro aqui, por mais que eu não saiba qual e por ter tentado todas as possívei soluções
que me passaram e ter feito o código exatamente igual ao do prof, não consegui executar.
Caso você saiba qual seja o problema, sinta-se a vonte para me ajudar*/

const entradas = [5, 50, 10, 98, 23];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };