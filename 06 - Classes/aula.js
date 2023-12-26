/*
O "constructor é o que acontece quando uma pessoa é instanciada"
*/

/*Responsabilidade dessa classe: Definir como são pessoas, para que elas
possam ser instanciadas

Aqui o método é uma function, porém dentro da class não é necesário
colocar o termo function antes do método, que nesse exemplo seria
o "descrever". Assim:*/

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    //Isso obriga a, sempre que uma pessoa for instanciada, ele peça o nome e a idade
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

/*O que é uma instância dessa pessoa? É a "Débora", por que?
Pessoa é uma classe que descreve como tem que ser uma pessoa e ali em
baixo nós explicamos que uma pessoa específica é a Débora que tem 19
anos de idade.


const debora = {
    nome: 'Débora Mota',
    idade: 19,

    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};


Então, classe é uma definição do que deveria ser e uma instância é uma
ocorrência de uma pessoa

Exemplo: Carro, a definição dele é que ele tem uma cor e um ano e o
carro branco de 2017 é uma instância*/

//Como instanciar uma pessoa nova

const debora = new Pessoa('Débora', 19);
//debora.nome = 'Débora Mota';
//debora.idade = 19;

//Usando "constructor:"

const renan = new Pessoa('Renan', 30);

/*E assim podemos fazer com quantas pessoas(ou instâncias)
forem necessárias

Podemos chamar para aparecer no console de 2 formas:*/

//1 console: Pessoa { nome: 'Débora Mota', idade:19 }
console.log(debora);
console.log(renan);

//2 console: Meu nome é Débora Mota e minha idade é 19
debora.descrever();
renan.descrever();