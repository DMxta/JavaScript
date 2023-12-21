function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc <= 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc <= 40) {
        return 'Obeso';
    } else {
        return 'Obesidade Grave';
    }
}

/*
Função imediatamente invocada
Ela cria e já executa imediatamente, sem precisar chamar ela, aliás quando for assim
não é necessário atribuir um nome a function, isso se chama Função Não Nomeada
Serve também para códigos que devem ser executados apenas 1 vez
*/

//Main
(function () {
    const peso = 75;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}) ()