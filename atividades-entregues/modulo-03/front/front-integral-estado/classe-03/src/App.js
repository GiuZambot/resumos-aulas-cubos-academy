import { useState } from 'react';
import lanche from './assets/hamburguer.png';
import './App.css';

function App() {
  return (
    <div className="table">
      <Card
        img={lanche}
        name='Hamburguer'
        user='Delicioso hamburguer de minhoca de lixo'
      />
    </div>
  );
}

function Card(props) {
  const [state, setstate] = useState(0);

  const handleClick = (value) => {
    if (state === 0 && value === -1) return;
    setstate(state + value);

  }

  return (
    <div>
      <div className="card">
        <img src={props.img} alt="Foto do Perfil" />
        <h1>{props.name}</h1>
        <p className="arroba">{props.user}</p>
        <div className='controle'>
          <div onClick={() => handleClick(-1)}>-</div>
          <div>{state}</div>
          <div onClick={() => handleClick(1)}>+</div>
        </div>
      </div>
    </div>

  );
}

export default App;

