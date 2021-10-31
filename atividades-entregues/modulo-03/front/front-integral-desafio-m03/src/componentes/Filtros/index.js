import { useEffect, useState } from 'react';
import FilterIcon from '../../assets/filter-icon.svg';
import BtnFiltros from '../BtnFiltros';
import './styles.css';

export default function Filtros({
  handleAtualizaListaTransactions,
  refreshTransactions,
  setRefreshTransactions
}) {
  const [open, setOpen] = useState(false);
  const [transactionsParaFiltro, setTransactionsParaFiltro] = useState([]);
  const [minValueFiltro, setMinValueFiltro] = useState('');
  const [maxValueFiltro, setMaxValueFiltro] = useState('');
  const [categoriesFiltros, setCategoriesFiltros] = useState([]);
  const [weeksDayFiltros, setWeeksDayFiltros] = useState([...weekDays]);

  useEffect(() => {
    async function fetchAllTransactions() {
      try {
        const dadosFetch = await fetch(`http://localhost:3334/transactions`);
        if (!dadosFetch.ok) {
          throw new Error('Falha ao carregar transações!')
        }
        const transactions = await dadosFetch.json();
        setTransactionsParaFiltro([...transactions]);
        const categorias = gerarCategorias(transactions, categoriesFiltros);
        setCategoriesFiltros([...categorias]);
      } catch (error) {
        console.log("Erro inesperado.");
      }
    }

    fetchAllTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSelectWeekDay(weekDay) {
    const localWeekDays = [...weeksDayFiltros];
    const item = localWeekDays.find(day => day.nome === weekDay);
    item.aplicar = !item.aplicar;

    setWeeksDayFiltros([...localWeekDays]);
  }

  function handleSelectCategory(category) {
    const tempCategories = [...categoriesFiltros];
    const categoriaSelecionada = tempCategories.find(categoria => categoria.nome === category);
    categoriaSelecionada.aplicar = !categoriaSelecionada.aplicar;

    setCategoriesFiltros([...tempCategories]);
  }

  function handleApplyFilter() {
    const weekDaysNomes = nomesDosDiasSelecionados(weeksDayFiltros);
    const categoriesNomes = nomesCategoriasSelecionadas(categoriesFiltros);

    if (!weekDaysNomes.length && !categoriesNomes.length && !minValueFiltro && !maxValueFiltro) {
      setRefreshTransactions(!refreshTransactions);
      return;
    }

    let tempTransactions = [...transactionsParaFiltro];
    if (minValueFiltro)
      tempTransactions = tempTransactions.filter(t => Math.abs(t.value) >= minValueFiltro);
    if (maxValueFiltro)
      tempTransactions = tempTransactions.filter(t => Math.abs(t.value) <= maxValueFiltro);
    if (weekDaysNomes.length)
      tempTransactions = tempTransactions.filter(t => weekDaysNomes.includes(t.week_day));
    if (categoriesNomes.length)
      tempTransactions = tempTransactions.filter(t => categoriesNomes.includes(t.category.toLowerCase()));

    handleAtualizaListaTransactions(tempTransactions);
  }

  function handleClearAllFilters() {
    const tempWeekDays = [...weeksDayFiltros];
    tempWeekDays.map((dia) => dia.aplicar = false);
    setWeeksDayFiltros([...tempWeekDays]);

    const tempCategoriesFilter = [...categoriesFiltros];
    tempCategoriesFilter.map((categoria) => categoria.aplicar = false);
    setCategoriesFiltros([...tempCategoriesFilter]);

    setRefreshTransactions(!refreshTransactions);
    setMinValueFiltro(0);
    setMaxValueFiltro(0);
  }

  return (
    <>
      <button
        className="open-filters-button"
        onClick={() => setOpen(!open)}
      >
        <img src={FilterIcon} alt="Filter icon" />
        Filtrar
      </button>
      {open &&
        <div className="container-filters">
          <div className="filter-item">
            <strong>Dia da semana</strong>
            <div className="container-chips">
              {weeksDayFiltros.map(day => (
                <BtnFiltros
                  key={day.nome}
                  title={day.nome}
                  selected={day.aplicar}
                  handleSelectFilter={handleSelectWeekDay}
                />
              ))}
            </div>
          </div>
          <div className="vertical-line custom-line"></div>
          <div className="filter-item">
            <strong>Categoria</strong>
            <div className="container-chips">
              {categoriesFiltros.map(categoria => (
                <BtnFiltros
                  key={categoria.nome}
                  title={categoria.nome}
                  selected={categoria.aplicar}
                  handleSelectFilter={handleSelectCategory}
                />
              ))}
            </div>
          </div>
          <div className="vertical-line custom-line"></div>
          <div className="filter-item">
            <strong>Valor</strong>
            <div className="container-input-filter">
              <label htmlFor='min-value'>Min.
                <input
                  id="min-value"
                  type="number"
                  onChange={(e) => setMinValueFiltro(e.target.value)}
                  value={minValueFiltro}
                />
              </label>
            </div>

            <div className="container-input-filter">
              <label htmlFor='max-value'>Max.
                <input
                  id="max-value"
                  type="number"
                  onChange={(e) => setMaxValueFiltro(e.target.value)}
                  value={maxValueFiltro}
                />
              </label>
            </div>
          </div>
          <div className="container-actions">
            <button className="btn-clear-filters" onClick={() => handleClearAllFilters()}>
              Limpar filtros
            </button>
            <button
              onClick={() => handleApplyFilter()}
              className="btn btn-apply-filters"
            >
              Aplicar filtros
            </button>
          </div>
        </div>
      }
    </>
  )
}

const weekDays = [
  {
    nome: 'Domingo',
    aplicar: false
  },
  {
    nome: 'Segunda',
    aplicar: false
  },
  {
    nome: 'Terça',
    aplicar: false
  },
  {
    nome: 'Quarta',
    aplicar: false
  },
  {
    nome: 'Quinta',
    aplicar: false
  },
  {
    nome: 'Sexta',
    aplicar: false
  },
  {
    nome: 'Sábado',
    aplicar: false
  },
];

export function nomesDosDiasSelecionados(weeksDays) {
  const diasSelecionados = weeksDays
    .filter((dia) => dia.aplicar)
    .map((dia) => dia.nome.toLocaleLowerCase());
  return diasSelecionados;
}

export function nomesCategoriasSelecionadas(categorias) {
  const categoriasSelecionadas = categorias
    .filter((cateoria) => cateoria.aplicar)
    .map((cateoria) => cateoria.nome.toLocaleLowerCase());
  return categoriasSelecionadas;
}

export function gerarCategorias(categorias, categoriesFilters) {
  const categoriasAtuais = categorias.map((transacoes) => transacoes.category);
  const categoriasAnterioes = categoriesFilters.map((categoria) => categoria.aplicar);

  const categoriasunificadas = [...new Set(categoriasAtuais)];

  const categoriasUnicas = categoriasunificadas.map(
    categoria => {
      return {
        nome: categoria,
        aplicar: categoriasAnterioes.includes(categoria)
      }
    }
  )

  return categoriasUnicas;
}
