import './styles.css';
import Logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <header className="container-header">
      <img src={Logo} alt="logo Dindin" />
    </header>
  );
}