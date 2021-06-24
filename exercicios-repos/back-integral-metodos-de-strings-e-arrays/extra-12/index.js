const nomes = ['Juninho Jr', 'Guido Cerqueira', 'Dina', 'Vitinho', 'Nanda'];

function nickName(nome) {
    // Separados par acompanhar os processos
    let result = nome.toLowerCase();
    result = result.replace(/\s+/, "");
    result = result.slice(0, 12);
    result = "@" + result;
    console.log(result);
}

for (const i of nomes) {
    nickName(i);
}