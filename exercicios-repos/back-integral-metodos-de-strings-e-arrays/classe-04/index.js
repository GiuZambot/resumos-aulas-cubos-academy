let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

identificador = identificador.padStart(6, 0);
console.log(identificador);

let arr = nome.split(" ");
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
nome = arr.join(" ");

console.log(nome);

email = email.trim();
console.log(email);

tags = tags.join(", ");
console.log(tags);