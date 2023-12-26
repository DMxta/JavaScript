/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de comcustível
    por KM rodado.
    Crie um método que dado a quantidade de KM e o preço do cobustível
    nos dê o valor gasto em reais para realizar este percurso.
*/

const combustivel = 5.79;

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }

    //descrever() {
    //    console.log(`A marca do carro é ${this.marca}, a cor é ${this.cor} e gasta ${this.gastoMedioPorKm} litros por KM.`)
    //}
}

const lancer = new Carro ('Mitsubishi', 'Black Piano', 1 / 8);
console.log(lancer.calcularGastoDePercurso(70, 5));

const palio = new Carro ('Fiat', 'Preto', 1 / 10);
console.log(palio.calcularGastoDePercurso(70, 5));
