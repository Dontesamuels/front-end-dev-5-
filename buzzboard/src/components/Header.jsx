// Header.jsx
import './Header.css';

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <h1 className="logo">{storeName}</h1>

      <nav className="nav-menu">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">Shop</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Contact</a>
      </nav>

      {/* Cart Icon + Count */}
      <div className="cart-container">
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
}

export default Header;
