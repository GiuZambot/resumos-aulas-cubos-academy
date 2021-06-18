// Juros Compostos.
const capital = 1000,
    taxa = 12.5,
    periodo = 5;

const montante = (capital * ((1 + (taxa / 100)) ** periodo)).toFixed(0);

console.log(`Você obterá um montante de ${montante}, aplicando ${capital} por ${periodo} meses, a uma taxa de ${taxa}.`);