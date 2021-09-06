import close from './assets/close.svg';
import cookie from './assets/cookie.svg';
import alert from './assets/alert.svg';
import './App.css';

function App() {
  return (
    <div>
      <Card
        img={cookie}
        alt='Cookies'
        btnText='Tudo bem!'
        btnClass='btn-vermelho'
        text='Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.' />
      <Card
        img={alert}
        alt='Atert'
        btnText='Extender Login'
        btnClass='btn-azul'
        text='Você será deslogado imediatamente.' />
    </div>
  );
}

function Card(props) {
  return (
    <div className='table'>
      <div className='card'>
        <div className='btn-fechar'><img src={close} alt='Botão Fechar' /></div>
        <img src={props.img} alt={props.alt} />
        <p>{props.text}</p>
        <div className={props.btnClass + ' btn-ok'} href='#'>{props.btnText}</div>
      </div>
    </div>
  );
}

export default App;