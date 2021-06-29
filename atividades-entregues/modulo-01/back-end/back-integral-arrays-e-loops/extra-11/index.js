const original = [5, 7, 13, 17, 26, 34, 118, 245];

const filtrado = [];
for (const i of original) {
    if (i >= 10 && i <=20 || i > 100){
        filtrado.push(i);
    }
}

console.log(filtrado);