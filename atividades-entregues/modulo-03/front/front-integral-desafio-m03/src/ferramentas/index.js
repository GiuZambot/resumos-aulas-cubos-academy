import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function centavosParaFormatoDinheiro(valor) {
  return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

export function pegarDataSemanaFormatada(data) {
  const dataAFormatar = new Date(`${data}`);

  return {
    data: format(dataAFormatar, 'dd/MM/yyyy'),
    semana: primeiraLetraMaiuscula(format(dataAFormatar, 'eee', { locale: ptBR }))
  };
}

export function primeiraLetraMaiuscula(palavra) {
  return `${palavra[0].toUpperCase()}${palavra.slice(1)}`;
}