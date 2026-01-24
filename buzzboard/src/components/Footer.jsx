// Footer.jsx
import './Footer.css';

function Footer({ storeName, email, year }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-title">{storeName}</h3>

        <nav className="footer-links">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <p className="footer-contact">
          Contact us: <a href={`mailto:${email}`}>{email}</a>
        </p>

        <p className="footer-copy">
          © {year} {storeName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
