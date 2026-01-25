import './App.css';
import { useState } from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import CartItem from './components/CartItem';
function App() {

  //  Product Data Array
  const products = [
    {
      id: 1,
      name: "🍎 MacBook Air",
      price: 899.50,
      image: "https://placehold.co/600x400",
      description: "One of the newer MacBook Airs for a low price!"
    },
    {
      id: 2,
      name: "Skullcandy Headphones 🎧",
      price: 50,
      image: "https://placehold.co/600x400",
      description: "Banging headphones with powerful bass!"
    },
    {
      id: 3,
      name: "Pringles 🥔",
      price: 20000,
      image: "https://placehold.co/600x400",
      description: "One of God's greatest gifts on Earth."
    }
  ];

  // Cart State
  const [cart, setCart] = useState([]);

  // Add to Cart Function
  function addToCart(product) {
    setCart([...cart, product]);
  }

  // Remove from Cart Function
  function removeFromCart(id) {
    setCart(cart.filter(item => item.id !== id));
  }

  // Cart Total
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">

      {/*  Header gets cart count */}
      <Header storeName="Dono-Mart 👾" cartCount={cart.length} />

      <Hero
        title="Welcome to Dono-Mart"
        subtitle="Your one stop for major tech and snacks!"
        ctaText="Come shop now!"
      />

      <main className="main-content">

        {/* Render products dynamically */}
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}

        {/* art Section */}
        <section className="cart-section">
          <h2>Your Cart 🛒</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeFromCart}
              />
            ))
          )}

          {cart.length > 0 && (
            <h3>Total: ${total.toFixed(2)}</h3>
          )}
        </section>

        <Footer
          storeName="Dono-Mart 👾"
          email="support@donomart.com"
          year={2026}
        />

      </main>
    </div>
  );
}

export default App;
