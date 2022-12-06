// agendarPaciente add ao final da fila o paciente informado 
// atenderPaciente sua função é remover o paciente atendido da fila
// cancelarAtendimento remover o paciente que deseja cancelar da fila 
// Cada função deverá imprimir a lista atualizada, separada por vírgulas.

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

const agendarPaciente = (lista, nome) => {
    lista.push(nome);
    console.log(lista.join(', '));
}

const atenderPaciente = (lista) => {
    lista.shift();
    console.log(lista.join(', '));

}

const cancelarAtendimento = (lista, nome) => {
    lista.splice(lista.indexOf(nome), 1);
    console.log(lista.join(', '));

}

agendarPaciente(pacientes, 'Mariana');
atenderPaciente(pacientes);
cancelarAtendimento(pacientes, 'Ana');
