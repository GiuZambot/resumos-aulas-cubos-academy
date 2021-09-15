import { useState } from 'react';
import kelvin from './assets/kelvin-costa.png';
import './App.css';

function App() {
  const users = [
    {
      img: kelvin,
      name: 'Kelvin Costa',
      user: 'costa',
      seguidores: '140',
      seguindo: '207'
    }
  ];

  const cards = users.map(u =>
    <Card
      img={u.img}
      name={u.name}
      user={u.user}
      seguidores={u.seguidores}
      seguindo={u.seguindo}
    />
  );

  return (
    <div className="table">
      {cards}
    </div>
  );
}

function Card(props) {
  const [state, setstate] = useState(140);
  const [btn, setbtn] = useState('Seguir');

  const handleClick = () => {
    setstate(btn === "Seguir" ? state + 1 : state - 1);
    setbtn(btn === "Seguir" ? 'Seguindo' : 'Seguir');
  }

  return (
    <div>
      <div className="card">
        <img src={props.img} alt="Foto do Perfil" />
        <h1>{props.name}</h1>
        <p className="arroba">@{props.user}</p>
        <p className="status">{state} seguidores</p>
        <p className="status">{props.seguindo} seguindo</p>
      </div>
      <p onClick={handleClick} className="btnSeguir">{btn}</p>
    </div>

  );
}

export default App;

