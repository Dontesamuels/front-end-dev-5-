// Header.jsx
import './Header.css';

function Header({ storeName }) {
  return (
    <header className="header">
      <h1 className="logo">{storeName}</h1>

      <nav className="nav-menu">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">Shop</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
