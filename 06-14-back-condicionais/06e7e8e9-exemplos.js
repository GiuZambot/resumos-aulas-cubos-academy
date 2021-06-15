const temIngresso = true,
    idade = 15,
    censura = 16
    taComOsPais = true;

// Pde usar temIngresso === true ou só temIngresso
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
if (temIngresso && idade > censura) {
    console.log("Pode entrar")
} else {
    console.log("Barrado");
}

//tópico 8
console.log("Tópico 8.");
if (temIngresso && (idade > censura || taComOsPais)) {
    console.log("Pode entrar")
} else {
    console.log("Barrado");
}

//tópico 9
console.log("Tópico 9.");
if (!temIngresso) {
    console.log("Não tem ingresso")
}