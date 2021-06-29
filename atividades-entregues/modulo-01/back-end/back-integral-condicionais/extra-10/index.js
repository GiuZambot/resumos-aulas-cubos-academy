const caractere = "i";

if (!caractere.search(/([aeiou])/gi)) { //Vogais
    console.log(caractere.search(/([aeiou])/g) ? "Vogal Maiúscula" : "Vogal Minúscula");
} else if (!caractere.search(/([0-9])/g)) { //Números
    console.log("Número");
} else if (!caractere.search(/([^aeiou])/gi)) { // Consoante
    console.log(caractere.search(/([A-Z])/g) ? "Consoante Minúscula" : "Consoante Maiúscula");
}