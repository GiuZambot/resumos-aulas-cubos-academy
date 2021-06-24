const nomes = ["Maria", "João", "Pedro", "José", "André"];

// Adicionando ao final
nomes.push("Rachel");

console.log(nomes);

//usando propagação
const outrosNomes = ["Fábio", "Gabliela", "Tainá"];
nomes.push(...outrosNomes);
console.log(nomes);

//Tirando do final
nomes.pop();
console.log(nomes);