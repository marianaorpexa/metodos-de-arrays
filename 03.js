
const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

const grupoCarros = (carros, posicao) => {
    console.log(carros.splice(posicao, 3).join(' - ')); // pega do 3 as 3 posicoes seguintes

}

grupoCarros(nomes, posicao);
