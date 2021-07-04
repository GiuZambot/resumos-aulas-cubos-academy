// o que é considerado true ou false pelo JS

let x = 10;

console.log("x:10");
if (x) {
    console.log("Truthy"); //aqui
} else {
    console.log("Falsy");
}

console.log("x:0");
x = 0; 
if (x) {
    console.log("Truthy");
} else {
    console.log("Falsy");//aqui
}

console.log("x:''");
x = "";
if (x) {
    console.log("Truthy");
} else {
    console.log("Falsy");//aqui
}

console.log("x:'algo'");
x = "Algo";
if (x) {
    console.log("Truthy");//aqui
} else {
    console.log("Falsy");
}

console.log("x:null");
x = null;
if (x) {
    console.log("Truthy");
} else {
    console.log("Falsy");//aqui
}

console.log("x:undefined");
x = undefined;
if (x) {
    console.log("Truthy");
} else {
    console.log("Falsy");//aqui
}

console.log("x:NaN");
x = NaN;
if (x) {
    console.log("Truthy");
} else {
    console.log("Falsy");//aqui
}