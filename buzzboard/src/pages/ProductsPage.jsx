import ProductCard from "../components/ProductCard";
import "./ProductsPage.css";
import { Link } from "react-router-dom";

function ProductsPage({ products, addToCart }) {
  return (
    <main className="main-content">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              <h3>{product.name}</h3>
            </Link>
            <ProductCard product={product} onAddToCart={addToCart} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default ProductsPage;
