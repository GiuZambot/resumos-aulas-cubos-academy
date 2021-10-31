import './styles.css';

export default function ConfirmaDelete({ show, handleChooseToDelete, setItemToDelete }) {
  return (
    <>
      {show &&
        <div className="container-confirm-delete">
          <div className="arrow-up">
          </div>

          <span>Apagar item?</span>

          <button
            className="btn-actions-confirm-delete blue"
            onClick={() => handleChooseToDelete()}
          >
            Sim
          </button>
          <button
            className="btn-actions-confirm-delete red"
            onClick={() => setItemToDelete(false)}
          >
            Não
          </button>
        </div>
      }
    </>
  );
}