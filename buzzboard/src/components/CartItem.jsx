import "./CartItem.css";

function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>${item.price.toFixed(2)}</p>
      <button onClick={() => onRemove(item.id)}>
        Remove ✖️ 
      </button>
    </div>
  );
}

export default CartItem;
