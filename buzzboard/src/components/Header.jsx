// Header.jsx
import './Header.css';
import { Link } from "react-router-dom";

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <h1>{storeName}</h1>

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart🛒 ({cartCount})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
