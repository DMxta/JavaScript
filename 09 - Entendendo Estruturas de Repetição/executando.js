//Percorrendo todas as letras do nome q se identifica como um array de caracteres
/*const nome = 'Débora Mota do Nascimento';


for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}*/


//Exibindo média de notas
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
    
}
const media = soma / notas.length;

console.log(media);