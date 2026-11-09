import "./Cart.css";

function Cart({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeItem
}) {

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart" id="cart">

      <h2>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">
          Your cart is empty!
        </p>
      ) : (

        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>

            <div>
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
            </div>

            <div className="quantity">

              <button onClick={() => decreaseQuantity(item.id)}>
                -
              </button>

              <span>{item.quantity}</span>

              <button onClick={() => increaseQuantity(item.id)}>
                +
              </button>

            </div>

            <button
              className="remove-btn"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>

          </div>
        ))
      )}

      <div className="cart-total">

        <h3>Total Amount: ₹{total}</h3>

        <button disabled={cartItems.length === 0}>
          Proceed to Bill
        </button>

      </div>

    </div>
  );
}

export default Cart;