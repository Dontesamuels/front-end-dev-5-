import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";

function App() {
  const products = [
    {
      id: 1,
      name: "🍎 MacBook Air",
      price: 899.5,
      image: "https://techtoschool.com/cdn/shop/files/MRXV3LLA_1728x.jpg?v=1728685922",
      description: "One of the newer MacBook Airs for a low price!",
    },
    {
      id: 2,
      name: "Skullcandy Headphones 🎧",
      price: 50,
      image: "https://www.skullcandy.com/cdn/shop/files/crusher_anc_2_buy_box_1_preppy-summer_2.png?v=1752695170",
      description: "Banging headphones with powerful bass!",
    },
    {
      id: 3,
      name: "Pringles 🥔",
      price: 20000,
      image: "https://www.kroger.com/product/images/xlarge/front/0003800018371",
      description: "One of God's greatest gifts on Earth.",
    },
  ];

  // Load cart from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(id) {
    setCart(cart.filter(item => item.id !== id));
  }

  return (
    <div className="app">
      <Header storeName="Dono-Mart 👾" cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route
          path="/products"
          element={
            <ProductsPage
              products={products}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProductDetailsPage
              products={products}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>

      <Footer
        storeName="Dono-Mart 👾"
        email="support@donomart.com"
        year={2026}
      />
    </div>
  );
}

export default App;
