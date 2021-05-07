import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <nav className="header">
      <h1>Math Magicians</h1>
      <div className="header__menu">
        <Link className="header__link" to="/"> Home </Link>
        <Link className="header__link" to="/calculator"> Calculator </Link>
        <Link className="header__link" to="/quote"> Quote </Link>
      </div>
    </nav>
  );
}

export default Header;
