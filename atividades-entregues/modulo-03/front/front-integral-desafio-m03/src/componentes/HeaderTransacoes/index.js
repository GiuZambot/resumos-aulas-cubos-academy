import { useEffect, useState } from 'react';
import TriangleDown from '../../assets/triangle-down.svg';
import TriangleUp from '../../assets/triangle-up.svg';
import './styles.css';

export default function HeaderTransacoes({ transactions, handleAtualizaListaTransactions }) {
  const [filter, setFilter] = useState('data');
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    if (order === 'desc') {
      OrdenaTransacoesDescPor(filter);
      return;
    }
    OrdenaTransacoesAscPor(filter);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order, filter]);

  function OrdenaTransacoesAscPor(ordenarPor) {
    const localTransactions = [...transactions];

    localTransactions.sort((a, b) => ordenarColunaAsc(a, b, ordenarPor));

    handleAtualizaListaTransactions(localTransactions);
  }

  function OrdenaTransacoesDescPor(ordenarPor) {
    const localTransactions = [...transactions];
    localTransactions.sort((a, b) => ordenarColunaDesc(a, b, ordenarPor));

    handleAtualizaListaTransactions(localTransactions);
  }

  function handleTrocaFiltro(type) {
    if (type === filter)
      return setOrder(order === 'asc' ? 'desc' : 'asc');
    setFilter(type);
  }

  return (
    <div className="table-head">
      <div
        id="date"
        className="column-title cursor-pointer"
        onClick={() => handleTrocaFiltro('data')}
      >
        <span>Data</span>
        {filter === 'data' && <img src={order === 'asc' ? TriangleUp : TriangleDown} alt="triangle" />}
      </div>
      <div
        id="week-day"
        className="column-title cursor-pointer"
        onClick={() => handleTrocaFiltro('diaDaSemana')}
      >
        <span>Dia da semana</span>
        {filter === 'diaDaSemana' && <img src={order === 'asc' ? TriangleUp : TriangleDown} alt="triangle" />}
      </div>
      <div
        id="description"
        className="column-title cursor-pointer"
        onClick={() => handleTrocaFiltro('descricao')}
      >
        <span>Descrição</span>
        {filter === 'descricao' && <img src={order === 'asc' ? TriangleUp : TriangleDown} alt="triangle" />}
      </div>
      <div
        id="category"
        className="column-title cursor-pointer"
        onClick={() => handleTrocaFiltro('categoria')}>
        <span>Categoria</span>
        {filter === 'categoria' && <img src={order === 'asc' ? TriangleUp : TriangleDown} alt="triangle" />}
      </div>
      <div
        id="value"
        className="column-title cursor-pointer"
        onClick={() => handleTrocaFiltro('valor')}
      >
        <span>Valor</span>
        {filter === 'valor' && <img src={order === 'asc' ? TriangleUp : TriangleDown} alt="triangle" />}
      </div>
      <div className="column-title"></div>
    </div>
  )
}

const diasDaSemana = {
  "domingo": 1,
  "segunda": 2,
  "terça": 3,
  "quarta": 4,
  "quinta": 5,
  "sexta": 6,
  "sábado": 7
}

export function ordenarColunaAsc(a, b, ordenarPor) {
  switch (ordenarPor) {
    case 'data':
      return new Date(a.date) - new Date(b.date);
    case 'diaDaSemana':
      return diasDaSemana[a.week_day] - diasDaSemana[b.week_day];
    case 'descricao':
      return a.description.localeCompare(b.description);
    case 'categoria':
      return a.category.localeCompare(b.category);
    case 'valor':
      return a.value - b.value;
    default:
      break;
  }
}

export function ordenarColunaDesc(a, b, ordenarPor) {
  switch (ordenarPor) {
    case 'data':
      return new Date(b.date) - new Date(a.date);
    case 'diaDaSemana':
      return diasDaSemana[b.week_day] - diasDaSemana[a.week_day];
    case 'descricao':
      return b.description.localeCompare(a.description);
    case 'categoria':
      return b.category.localeCompare(a.category);
    case 'valor':
      return b.value - a.value;
    default:
      break;
  }
}