class Pessoa {
    nome;
    idade;
    anoDeNascimento;

        constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

/*A gente fez uma função que ao invés de receber um valor literal a gente
tá recebendo um objeto e os objetos são essa coleção de valores*/

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`)
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}.`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

const debora = new Pessoa('Débora Mota', 19);
const renan = new Pessoa('Renan J Paula', 30);

compararPessoas(debora, renan);