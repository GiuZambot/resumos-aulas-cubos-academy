import { useEffect, useState } from 'react';
import { centavosParaFormatoDinheiro } from '../../ferramentas';
import './styles.css';

export default function Resumo({ transactions, setOpenModal }) {
  const [resume, setResume] = useState({ credito: 0, debito: 0, saldo: 0 });

  useEffect(() => {
    const somarCreditos = transactions.reduce((acum, item) => {
      return item.type === 'credit' ? acum + item.value : acum + 0;
    }, 0);

    const somarDebitos = transactions.reduce((acum, item) => {
      return item.type === 'debit' ? acum + item.value : acum + 0;
    }, 0);

    setResume({
      credito: somarCreditos,
      debito: somarDebitos,
      saldo: somarCreditos - somarDebitos
    });
  }, [transactions]);

  return (
    <div className="container-resume">
      <h3>Resumo</h3>
      <div >
        <span>Entradas</span>
        <strong className="in">{centavosParaFormatoDinheiro(resume.credito)}</strong>
      </div>
      <div >
        <span>Saídas</span>
        <strong className="out">{centavosParaFormatoDinheiro(resume.debito)}</strong>
      </div>
      <div>
        <strong>Saldo</strong>
        <strong className="balance">{centavosParaFormatoDinheiro(resume.saldo)}</strong>
      </div>
      <button
        className="btn-add"
        onClick={() => setOpenModal(true)}
      >
        Adicionar Registro
      </button>
    </div>

  );
}
