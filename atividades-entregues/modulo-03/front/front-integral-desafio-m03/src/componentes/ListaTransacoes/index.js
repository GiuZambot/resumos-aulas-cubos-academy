import { useState } from 'react';
import DeleteIcon from '../../assets/delete-icon.svg';
import EditIcon from '../../assets/edit-icon.svg';
import {
  centavosParaFormatoDinheiro,
  pegarDataSemanaFormatada
} from '../../ferramentas';
import ConfirmaDelete from '../ConfirmaDelete';
import HeaderTransacoes from '../HeaderTransacoes';
import './styles.css';

export default function ListaTransacoes({
  transactions,
  handleEditItem,
  handleAtualizaListaTransactions,
  refreshTransactions,
  setRefreshTransactions
}) {
  const [itemToDelete, setItemToDelete] = useState(null);

  function handleDeleteItem(id) {
    setItemToDelete(id)
  }

  async function handleChooseToDelete() {
    try {
      const url = `http://localhost:3334/transactions/${itemToDelete}`;

      const response = await fetch(url, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Falha ao excluir transação!')
      }

      setRefreshTransactions(!refreshTransactions);
    } catch (error) {

    } finally {
      setItemToDelete(null);
    }
  }

  return (
    <div>
      <div className="table">
        <HeaderTransacoes
          transactions={transactions}
          handleAtualizaListaTransactions={handleAtualizaListaTransactions}
        />
        <div className="table-body">
          {transactions.map(transaction => (
            <div key={transaction.id} className="table-line">
              <div className="line-items bold">{pegarDataSemanaFormatada(transaction.date).data}</div>
              <div className="line-items">{pegarDataSemanaFormatada(transaction.date).semana}</div>
              <div className="line-items"><span>{transaction.description}</span></div>
              <div className="line-items">{transaction.category}</div>
              <div
                className={transaction.type === 'credit' ? 'purple line-items bold' : 'orange line-items bold'}>
                {centavosParaFormatoDinheiro(transaction.type === 'credit' ? transaction.value : transaction.value * (-1))}
              </div>
              <div className="line-items action-buttons">
                <img
                  onClick={() => handleEditItem(transaction)}
                  className="edit-icon"
                  src={EditIcon}
                  alt="Icon edit"
                />
                <img
                  onClick={() => handleDeleteItem(transaction.id)}
                  className="delete-icon"
                  src={DeleteIcon}
                  alt="Delete edit"
                />
                <ConfirmaDelete
                  show={itemToDelete === transaction.id}
                  setItemToDelete={setItemToDelete}
                  handleChooseToDelete={handleChooseToDelete}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
