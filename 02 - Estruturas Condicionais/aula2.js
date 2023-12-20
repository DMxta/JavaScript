//O Boolean representa o verdadeiro(true) e o falso(false)
const camisetaRenanAzul = true;
const camisetaLemãoAzul = false;

//Condicional é quando checamos se a situação é verdadeira ou falsa (sempre retorna um Boolean)
/*
10 > 5 = true;
10 < 5 = false;
10 >= 10 = true;
*/

/*
"<" menor
"<=" menor ou igual
">" maior
">" maior ou igual
*/

//Exemplo com resto de divisão (%)
//"===" é usado para a comparação entre duas variáveis de valor e tipo iguais
//"==" ignora o tipo, mas também funciona para igualdade
const numero = 11;

const eNumeroPar = (numero % 2) === 0;

//Estrutura Condicional com If(se) e Else(senão)
//Se eNumeroPar for true exibe "par"
if (eNumeroPar) {
    console.log('Par');
} else {
    console.log('Ímpar');
}

//Se eNumeroPar for false exibe Ímpar
/*! usado para negação antes da condição, converte o Booleano para o oposto dele
if (!eNumeroPar) {
    console.log('ímpar');
}
A sentença escrita ficaria: se eNumeroPar for par exiba "par"
Se eNumeroPar NÃO for par exiba "ímpar"*/

const novoNumero = 0;
const numeroDivisivelPor5 = (novoNumero % 5) === 0;


//Caso a primeira condição for verdadeira, ele não vai executar a condição seguinte
//Estrutura: if, else if(pode ter qunatos precisar) e por último else. Não colocar else antes de else if
if (novoNumero ===0) {
    console.log('O número é inválido, escolha um número maior')
} else if (novoNumero => 100) {
    console.log('O número é inválido, escolha um número menor');
} else if (numeroDivisivelPor5) {
    console.log('Sim');
} else {
    console.log('Não');
}

/*Em variável Booleana é recomendado colocar o prefixo "is"
Por exemplo: isNumeroPar, para simbolizar se é ou não é o nome da variável*/