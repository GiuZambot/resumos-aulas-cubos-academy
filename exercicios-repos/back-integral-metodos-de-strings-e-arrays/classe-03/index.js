const texto = "Aprenda programar do zero na Cubos Academy";

//Sem replace
let arr = texto.toLowerCase().split(" ");
const iFor = (arr.length - 1) * 2;

for (let i = 1; i < iFor; i += 2) {
    arr.splice(i, 0, "-");
}

console.log(arr.join(""));

//Regex
arr = texto.toLowerCase().replace(/\s/g, "-");
console.log(arr);