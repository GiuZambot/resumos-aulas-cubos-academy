const cpf = "011.022.033-44";

function removerPontua(str) {
    const result = str.replace(/\W+/g, "");
    console.log(result);
}

removerPontua(cpf);