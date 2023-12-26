/*O "console" é um objeto e "log" é um dos métodos do objeto
Como declarar um objeto literal.
Ele funciona atravé de chave{} e valor e é uma "coleção de dados", como
por exemplo: 
*/

const debora = {
    nome: 'Débora Mota',
    idade: 19
};
//Como incrementar dinâmicamente o objeto literal

debora.altura = 1.64
console.log(debora);
/*Resultado no console: { nome: 'Débora Mota', idade: 19, altura: 1.64 }
O objeto foi incrementado dinâmicamente, sem a necessidade de colocarmos
dentro da const
É possível deletar um objeto também, usando "delete" e logo após o que será deletado*/

/*Como acesar um dado/valor de dentro do objeto:
console.log(debora.nome);
console.log(debora.idade);

Quando imprime o objeto inteiro no consle e fica assim: { nome: 'Débora Mota', idade: 19 }
console.log(debora);
*/

/*
Como utilizar funções dentro de objetos, chamado de método
Como o método (descrever) está dentro do objeto, podemos usar
os valores que também estão dentro do objeto

"this" diz respeito ao contexto onde a função esta sendo executada.
Como a função está dentro de um objeto, o "this" assume o objeto
*/

const pessoa = {
    nome: 'Débora Mota',
    idade: 19,
    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};
//Invocando a função
pessoa.descrever();

/*Acessando os valores com uma sintaxe mais dinâmica
const atributo = 'idade';
console.log(pessoa[atributo]);

Acessamos o valor de idade usando a const atributo e o valor dela
Esta é uma notação de coleção
Outra forma mais rápida de se fazer isso é:*/
console.log(pessoa['nome']);

//Para reatribuir o valor a um objeto dinâmicamente:
pessoa['nome'] = 'teste';
console.log(pessoa['nome']);

//O mesmo, mas com acesso direto:
pessoa.nome = 'teste';