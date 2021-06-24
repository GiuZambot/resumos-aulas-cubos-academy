const celular = 7199918888;
let celStr = `${celular}`.split("");

if (celStr.length === 10) {
    celStr.splice(0, 0, "(");
    celStr.splice(3, 0, ")");
    celStr.splice(4, 0, " ");
    celStr.splice(5, 0, "9");
    celStr.splice(6, 0, " ");
    celStr.splice(11, 0, "-");
    console.log(celStr.join(""));
} else if (celStr.length === 8) {
    celStr.splice(0, 0, "9");
    celStr.splice(1, 0, " ");
    celStr.splice(6, 0, "-");
    console.log(celStr.join(""));
} else {
    console.log("Número de celular inválido");
}