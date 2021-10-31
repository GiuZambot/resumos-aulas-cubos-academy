import { useEffect, useState } from 'react';
import Header from '../componentes/Header';
import Filtros from '../componentes/Filtros';
import ListaTransacoes from '../componentes/ListaTransacoes';
import Resumo from '../componentes/Resumo';
import ModalTransacoes from '../componentes/ModalTransacoes';
import './styles.css';

function Dindin() {
  const [editItem, setEditItem] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [refreshTransactions, setRefreshTransactions] = useState(false);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchAllTransactions() {
      try {
        const respostaFetch = await fetch(`http://localhost:3334/transactions`);
        if (!respostaFetch.ok)
          throw new Error('Não foi possível carregar as transações!');
        const transacoes = await respostaFetch.json();
        setTransactions(transacoes);
      } catch (error) { };
    }

    fetchAllTransactions();
  }, [refreshTransactions]);


  function handleEditItem(transaction) {
    setEditItem(transaction);
    setOpenModal(true);
  }

  function handleClose() {
    setOpenModal(false);
    setEditItem(null);
  }

  function handleAtualizaListaTransactions(newTransactions) {
    setTransactions([...newTransactions]);
  }

  return (
    <div className="container-dashboard">
      <Header />
      <main>
        <div>
          <Filtros
            refreshTransactions={refreshTransactions}
            setRefreshTransactions={setRefreshTransactions}
            handleAtualizaListaTransactions={handleAtualizaListaTransactions}
          />
          <ListaTransacoes
            transactions={transactions}
            handleEditItem={handleEditItem}
            handleAtualizaListaTransactions={handleAtualizaListaTransactions}
            refreshTransactions={refreshTransactions}
            setRefreshTransactions={setRefreshTransactions}
          />
        </div>
        <aside className="aside-right">
          <Resumo transactions={transactions} setOpenModal={setOpenModal} />
        </aside>
      </main>
      <ModalTransacoes
        refreshTransactions={refreshTransactions}
        setRefreshTransactions={setRefreshTransactions}
        openModal={openModal}
        handleClose={handleClose}
        editItem={editItem}
        transactions={transactions}
      />
    </div>
  );
}

export default Dindin;