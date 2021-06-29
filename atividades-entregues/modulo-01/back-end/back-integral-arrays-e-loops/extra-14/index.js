const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

let i = 0;
for (const n of arrayA) {
    if (arrayA[i]<arrayB[i]){
        console.log(arrayA[i]);
    } else {
        console.log(arrayB[i]);
    }
    i++;
}

