import { useEffect, useState } from 'react';
import { primeiraLetraMaiuscula } from '../../ferramentas';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import InputMask from 'react-input-mask';
import CloseIcon from '../../assets/close-icon.svg';
import './styles.css';

const emptyForm = {
  value: '',
  category: '',
  date: '',
  description: ''
}

export default function ModalTransacoes({
  openModal,
  handleClose,
  editItem,
  refreshTransactions,
  setRefreshTransactions
}) {
  const [activeButton, setActiveButton] = useState('debit');
  const [inputsForm, setInputsForm] = useState(emptyForm);

  useEffect(() => {
    return () => {
      setInputsForm(emptyForm);
    }
  }, [openModal])

  useEffect(() => {
    if (editItem) {
      const formatEditItem = {
        value: editItem.value,
        category: editItem.category,
        description: editItem.description,
        type: editItem.type,
        date: format(new Date(editItem.date), 'dd/MM/yyyy')
      };

      setActiveButton(formatEditItem.type);
      setInputsForm({ ...formatEditItem });
    }
  }, [editItem]);

  function handleChange({ target }) {
    setInputsForm({ ...inputsForm, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const [day, month, year] = inputsForm.date.split('/');

      const selectedDate = new Date(`${month}/${day}/${year}`);

      if (!inputsForm.description || !inputsForm.value || !inputsForm.category || !activeButton) {
        return;
      }

      const data = {
        date: selectedDate,
        week_day: format(selectedDate, 'eee', {
          locale: ptBR
        }),
        description: primeiraLetraMaiuscula(inputsForm.description),
        value: parseFloat(inputsForm.value),
        category: primeiraLetraMaiuscula(inputsForm.category),
        type: activeButton
      }

      const method = editItem ? 'PUT' : 'POST';
      const url = editItem
        ? `http://localhost:3334/transactions/${editItem.id}`
        : `http://localhost:3334/transactions`;

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Falha ao adicionar transação!')
      }

      setRefreshTransactions(!refreshTransactions);
      handleClose();
    } catch (err) {

    }
  }

  return (
    <div className="backdrop" style={{ display: !openModal && 'none' }}>
      <div className="modal-container">
        <img
          className="close-icon"
          src={CloseIcon}
          alt="Close icon"
          onClick={() => handleClose()}
        />

        <h2>{editItem ? 'Editar Registro' : 'Adicionar Registro'}</h2>

        <div className="container-buttons">
          <button
            id="credit-button"
            className={`btn-new-transaction ${activeButton === 'credit' && 'credit'}`}
            onClick={() => setActiveButton('credit')}>
            Entrada
          </button>

          <button
            id="debit-button"
            className={`btn-new-transaction ${activeButton === 'debit' && 'debit'}`}
            onClick={() => setActiveButton('debit')}>
            Saída
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='value'>Valor
              <input
                onChange={(e) => handleChange(e)}
                value={inputsForm.value}
                name='value'
                id='imputValue'
                title='Valor da transação em reais'
                type='number'
                placeholder='99,99'
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor='category'>Categoria
              <input
                onChange={(e) => handleChange(e)}
                value={inputsForm.category}
                name='category'
                id='imputCategory'
                title='Categoria da transação'
                placeholder='Mercado'
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor='date'>Data
              <InputMask
                mask="99/99/9999"
                onChange={(e) => handleChange(e)}
                value={inputsForm.date}
                name="date"
                id="imputDate"
                title='Data da transação'
                placeholder='10/10/2021'
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor='description'>Descrição
              <input
                onChange={(e) => handleChange(e)}
                value={inputsForm.description}
                name="description"
                id="imputDescription"
                title='Descrição da transação'
                placeholder='Compra de comida'
                required
              />
            </label>
          </div>
          <div className="container-btn-insert">
            <button className='btn-insert'>Confirmar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
