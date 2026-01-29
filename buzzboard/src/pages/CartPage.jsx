import CartItem from "../components/CartItem";

function CartPage({cart,removeFromCart}){
  const total =cart.reduce ((sum,item)=> sum+item.price,0);
  
  return(
    <main className="main content">
      <h2>Your Cart 🛒</h2>
      {cart.length === 0 ? (
        <p>Your cart is currently empty</p>
      ) : (
        <>
          {cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={removeFromCart}
            />
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
        </>
      )}

    </main>
  );
  
}

export default CartPage;