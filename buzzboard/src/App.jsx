import './App.css';
import Hero from './components/hero';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header storeName="Dono-Mart 👾" />
      <Hero
      title = "Welcome to Dono-Mart"
      subtitle = "your one stop for some major tech, and even some snacks!"
      ctaText= "come one and Shop now"
      />
      <main className="main-content">
        <ProductCard
          name="🍎 MacBook Air"
          price="$899.95"
          image="https://placehold.co/600x400"
          description="one of the newer macbooks airs for such a low price of 899.95 by it before it too! late!!"
        />

        <ProductCard
          name="Skullcandy Headphones 🎧"
          price="$50"
          image="https://placehold.co/600x400"
          description="some banging headphones that give that good bass like no other!!"
        />

        <ProductCard
          name="Pringles"
          price="$20,000"
          image="https://placehold.co/600x400"
          description="one of Gods great gifits on this earth, if you havent tried them then you need to!!"
        />
        <Footer
        storeName="Dono-Mart 👾"
        email="support@donomart.com"
        year={2026}
/>

      </main>
    </div>
  )
}