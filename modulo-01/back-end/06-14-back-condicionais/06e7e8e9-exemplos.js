const temIngresso = true,
    idade = 15,
    censura = 16
    taComOsPais = true;

// Pide usar temIngresso === true ou só temIngresso
// Tópico 6
console.log("Tópico 6.");
if (temIngresso) {
    if (idade >= censura) {
        console.log("Pode entrar.");
    } else {
        console.log("Não tem idade.")
    }
} else {
    console.log("Barrado!")
}

// Tópico 7
console.log("Tópico 7.");
if (temIngresso && idade > censura) { // as cuas condições devem ser true
    console.log("Pode entrar")
} else {
    console.log("Barrado");
}

//tópico 8
console.log("Tópico 8.");
if (temIngresso && (idade > censura || taComOsPais)) { //temIngresso precisa ser true &&=e idade precisa ser maior que a censura ||=ou estar acompanhado dos pais 
    console.log("Pode entrar")
} else {
    console.log("Barrado");
}

//tópico 9
console.log("Tópico 9.");
if (!temIngresso) { // se não for true, a condição é aceita
    console.log("Não tem ingresso")
}