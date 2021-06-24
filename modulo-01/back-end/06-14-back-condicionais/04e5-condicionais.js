const idade = 9;

if (idade < 18){ 
    console.log("É menor de idade"); // só entra aqui se idade que é 9 for menor que 18
} else if (idade < 65){
    console.log("É maior adulto"); // só entra aqui se idade tiver de 18 até 65 anos
} else {
    console.log("É idoso"); // qualquer outro valor, que será de 65 para cima, é idoso.
}