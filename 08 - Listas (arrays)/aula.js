const alunos = ['João', 'Débora', 'Marina'];

//Como adicionar um item na lista:
alunos.push('Renan');
//Ou:       Que significa que a posição 4 recebe o item 'Vinícus'
alunos[4] = 'Vinícius'

//Para chamar um elemento/item da lista:
console.log (alunos[1]);
//O array sempre começa a contagem pelo 0

//A lista pode começar vazia
const estudantes = [];

//É possível usar diferentes tipos dentro de uma lista
estudantes.push('1', '2');
estudantes.push(3);
console.log(estudantes);

//Usando o método "pop" ele tira o último item da lista e imprime no console
console.log(estudantes.pop());
console.log(estudantes);

//Usando o método "shift" ele tira o primeiro item da lista e imprime no console
console.log(estudantes.shift());
console.log(estudantes);