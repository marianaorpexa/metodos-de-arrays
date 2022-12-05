//agendar, o paciente em questão deverá ser adicionado ao final da lista. 
// atender, o próximo (primeiro) paciente da fila deverá ser removido
// não é obrigatório informar o nome do paciente na função.
// Por fim, imprimir a lista atualizada, separada por vírgula.


const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

const atendimento = (lista, tipoOperacao, nome) => {
    if (tipoOperacao === 'atender') {
        lista.shift();
        // REMOVE O PRIMEIRO DA FILA

    }
    if (tipoOperacao === 'agendar') {
        lista.push(nome);
        // ADICIONA NOME NO FINAL DA FILA

    }

    console.log(lista.join(', '));

}

atendimento(pacientes, 'atender');
atendimento(pacientes, 'agendar', 'Mariana');


