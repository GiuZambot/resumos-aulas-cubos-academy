import close from './assets/close.svg';
import cookie from './assets/cookie.svg';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Card
        img={cookie}
        alt='Cookies'
        btnText='Tudo bem!'
        btnClass='btn-vermelho'
        text='Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.' />
    </div>
  );
}

function Card(props) {
  const [state, setstate] = useState(true);

  const handleFechar = () => {
    setstate(state ? false : true);
  }

  if (!state) return (<div></div>);
  return (
    <div className='table'>
      <div className='card'>
        <div onClick={handleFechar} className='btn-fechar' ><img src={close} alt='Botão Fechar' /></div>
        <img src={props.img} alt={props.alt} />
        <p>{props.text}</p>
        <div onClick={handleFechar} className={props.btnClass + ' btn-ok'} href='#'>{props.btnText}</div>
      </div>
    </div>
  );
}

export default App;