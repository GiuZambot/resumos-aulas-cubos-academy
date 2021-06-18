const disjuntores = [false, false, true, false, false, true, false, false];

let i = 0;
for (const d of disjuntores) {
    if (d) {
        console.log(i);
    }
    i++;
}