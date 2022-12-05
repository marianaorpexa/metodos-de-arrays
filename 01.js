//o array na ordem inversa e transforme em uma única string separada por vírgulas
//Remova o primeiro e último item do array original e adicione a fruta Melão


const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

const arrayOrdemInversa = frutas.reverse().join(', ');

console.log(arrayOrdemInversa)

//B REMOVER O PRIMEIRO
frutas.shift();
frutas.pop(); // remover ultimo
frutas.push('Melão');

console.log(frutas);