function solucao(a, b) {
    let vet = [];
    let mdc = 1;

    if (isNaN(a) || a == "" || a == 0) a = 1;
    if (isNaN(b) || b == "" || b == 0) b = 1;

    for (let i = 2; i <= 100; i++) {
        while (a % i === 0 || b % i === 0) {
            if (a % i === 0) { a = a / i; }
            if (b % i === 0) { b = b / i; }
            vet.push(i);
        }
    }

    for (let i of vet) {
        mdc = mdc * i;
    }

    console.log(mdc);
}