const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const resp = cidades.reduce((x, y) => y.length > x.length ? y : x);

console.log(resp);