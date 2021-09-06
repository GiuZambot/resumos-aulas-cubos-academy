import model from './assets/model.png';
import products from './assets/products.png';
import './App.css';

function App() {
  return (
    <div className="wrap">

      <header>
        <div className="quadro">
          <h1>O presente da felicidade</h1>
          <p>Demonstre sua gratidão com nosso pacote de presentes, grandes e pequenos, especialmente feito para espalhar alegria para aqueles que você ama.</p>
          <div className="btn-comprar">Comprar</div>
        </div>
      </header>

      <main>

        <Card
          h1='Pronto para a coleção de outono'
          p='Teste a nossa nova coleção de outono - todas com as maravilhosas cores a sua volta.'
          imgf={model}
        />
        <Card
          h1='Itens exclusivos da moda'
          p='Não fique de fora, conheça nossas peças e assine a newsletter, saiba primeiro.'
          imgf={products}
        />

      </main>
    </div>
  );
}

function Card(props) {
  return (
    <div className="table">
      <div className="card">
        <h1>{props.h1}</h1>
        <p>{props.p}</p>
        <div className="btn-comprar">Comprar</div>
        <img src={props.imgf} alt="Alerta" />
      </div>
    </div>
  );
}

export default App;


