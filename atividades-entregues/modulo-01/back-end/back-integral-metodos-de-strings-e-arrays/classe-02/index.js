function validarCPF(cpf) {
    if (cpf.length != 11) {
        console.log("CPF inválido");
    } else {
        let arr = cpf.split("");
        arr.splice(3, 0, ".");
        arr.splice(7, 0, ".");
        arr.splice(11, 0, "-");
        console.log(arr.join(""));
    }
}

function validarCNPJ(cnpj) {
    if (cnpj.length != 14) {
        console.log("CNPJ inválido");
    } else {
        let arr = cnpj.split("");
        arr.splice(2, 0, ".");
        arr.splice(6, 0, ".");
        arr.splice(10, 0, "/");
        arr.splice(15, 0, "-");
        console.log(arr.join(""));
    }
}

validarCPF("12345678900");
validarCPF("112345678900");

validarCNPJ("12345678900");
validarCNPJ("12345678000199")
