const { format } = require("date-fns");
const ptBr = require("date-fns/locale/pt-br");

function formateDateA(date) {
    return format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBr });
}

function formateDateB(date) {
    return format(date, "dd/M/yyyy", { locale: ptBr });
}

function formateDateC(date) {
    return format(date, "dd MMM", { locale: ptBr });
}

function formateDateD(date) {
    return format(date, "dd MMM yyyy", { locale: ptBr });
}

function formateDateE(date) {
    return format(date, "dd 'de' MMM 'de' yyyy ", { locale: ptBr });
}

function formateDateF(date) {
    return format(date, "dd/MMM", { locale: ptBr });
}

console.log(formateDateA(new Date(2020, 9, 5)));
console.log(formateDateB(new Date(2020, 9, 5)));
console.log(formateDateC(new Date(2020, 9, 5)));
console.log(formateDateD(new Date(2020, 9, 5)));
console.log(formateDateE(new Date(2020, 9, 5)));
console.log(formateDateF(new Date(2020, 9, 5)));