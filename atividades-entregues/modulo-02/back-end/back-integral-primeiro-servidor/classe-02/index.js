const alunos = [
    {
        nome: "Paula",
        apelido: "Paulete",
        idade: 26,
        signo: "Áries",
        bandaFavorita: "Rolling Stones",
        email: "paulete123@gmail.com",
        serieFavorita: "Dark",
        curso: "PDZ",
        roupaDeDormir: "pijama"
    },
    {
        nome: "Felisberto",
        apelido: "Betinho",
        idade: 20,
        signo: "Sargitário",
        bandaFavorita: "Madonna",
        email: "betinho.felis@gmail.com",
        serieFavorita: "Um maluco no pedaço",
        curso: "PDZ",
        roupaDeDormir: "só cueca"
    }
];

const alunosResumido = [];
for (let { nome, idade, email, curso } of alunos) {
    // alunosResumido.push({ nome, idade, email, curso });
    // alunosResumido.push({ nome: nome, idade: idade, email: email, curso: curso });
}

const alunosResumido2 = alunos.map(({ nome, idade, email, curso }) => ({ nome, idade, email, curso }));

const alunosResumido3 = alunos.map(resumo);
function resumo(aluno) {
    const { nome, idade, email, curso } = aluno;
    return { nome, idade, email, curso };
}

console.log(alunosResumido);
console.log(alunosResumido2);
console.log(alunosResumido3);