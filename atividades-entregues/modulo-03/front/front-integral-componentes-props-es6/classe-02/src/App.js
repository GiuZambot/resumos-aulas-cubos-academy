import ana from './assets/anna-bia.png';
import santos from './assets/charles-santos.png';
import kelvin from './assets/kelvin-costa.png';
import mario from './assets/mario-hisashi.png';
import './App.css';

function App() {
  const users = [
    {
      img: kelvin,
      name: 'Kelvin Costa',
      user: 'costa',
      seguidores: '140',
      seguindo: '207'
    },
    {
      img: santos,
      name: 'Charles Santos',
      user: 'charles.santos',
      seguidores: '302',
      seguindo: '419',
    },
    {
      img: ana,
      name: 'Anna Bia',
      user: 'anab',
      seguidores: '842',
      seguindo: '150'
    },
    {
      img: mario,
      name: 'Mario Hisashi',
      user: 'hisashi',
      seguidores: '28',
      seguindo: '17'
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
  return (
    <div className="card">
      <img src={props.img} alt="Foto do Perfil" />
      <h1>{props.name}</h1>
      <p className="arroba">@{props.user}</p>
      <p className="status">{props.seguidores} seguidores</p>
      <p className="status">{props.seguindo} seguindo</p>
    </div>
  );
}

export default App;
