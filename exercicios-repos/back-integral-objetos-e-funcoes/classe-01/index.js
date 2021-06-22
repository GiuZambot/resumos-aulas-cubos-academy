// Função Corrigir Prova

const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    let totalAcertos = 0;
    for (const questao of prova.questoes) {
        totalAcertos += questao.resposta === questao.correta ? 1 : 0;
    }
    const nota = (prova.valor / prova.questoes.length) * totalAcertos;
    console.log(`O aluno(a) ${prova.aluno} acertou ${totalAcertos} questões e obteve nota ${nota}.`);
}

corrigirProva(prova);