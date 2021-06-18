// Taxa de juros aplicada.
const montante = 90000,
    capital = 60000,
    tempo = 24;

const taxa = (((montante / capital) ** (1 / tempo) - 1) * 100).toFixed(3);

console.log(`A rentabilidade será de ${taxa}% ao mês.`);