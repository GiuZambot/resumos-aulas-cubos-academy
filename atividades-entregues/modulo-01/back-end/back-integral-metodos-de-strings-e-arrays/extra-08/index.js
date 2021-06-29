const email = "aluno@cubos.academy";

function validarEmail(email) {
    // não funciona com todos do mundo
    if (/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)) {
        console.log(`${email} é um e-mail válido`);
    } else {
        console.log(`${email} é um e-mail inválido`);
    }
}

validarEmail("jose@cubos.academy"); //E-mail válido
validarEmail("jose@cubos.academy.br");	//E-mail válido
validarEmail("jose.messias@cubos.academy");	//E-mail válido
validarEmail("jose.messias@cubos.io");	//E-mail válido
validarEmail("jose@cubos");	//E-mail inválido
validarEmail("jose.messias@cubos");	//E-mail válido?? <= perguntar
validarEmail("jose.messias@.");	//E-mail inválido
validarEmail("jose.@cubos");	//E-mail válido
validarEmail(".@");	//E-mail inválido
validarEmail("@.");	//E-mail inválido
validarEmail("jose.messias@cubos.");	//E-mail inválido
validarEmail(".messias@cubos.");	//E-mail inválido
validarEmail(".messias@cubos");	//E-mail inválido