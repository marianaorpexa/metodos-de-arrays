

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];

const separacaoGrupos = (lista, tamanho) => {
    const resultado = [];

    let numGrupo = 1;
    for (i = 0; i < lista.length; i += tamanho) {
        const grupo = `Grupo ${numGrupo}: ${lista.slice(i, (i + tamanho)).join(', ')}`;
        console.log(grupo);
        numGrupo++;


    }

}

separacaoGrupos(nomes, 4);

