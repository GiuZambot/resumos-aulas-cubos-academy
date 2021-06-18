const original = [1, 4, 12, 21, 53, 88, 112];
const pares = [];

for (const i of original) {
    if (i%2===0){
        pares.push(i);
    }
}

console.log(pares);