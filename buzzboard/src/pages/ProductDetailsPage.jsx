import { useParams } from "react-router-dom";

function ProductDetailsPage({ products, addToCart }) {
  const { id } = useParams(); // grabs the product ID from the URL
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <main className="main-content">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ maxWidth: "600px" }} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart 🛒</button>
    </main>
  );
}

export default ProductDetailsPage;

