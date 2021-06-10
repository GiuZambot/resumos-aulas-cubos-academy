// x++ e ++x
let x = 10;

x++;
console.log(x); //11

let y = x++; //retorna e depois soma, ficando 12
console.log(y); //11

y = ++x; //soma e depois retorna
console.log(y); //13