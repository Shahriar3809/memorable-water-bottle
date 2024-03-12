const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h1>Cart: {cart.length}</h1>
      <div>
        {cart.map((bottle) => (
          <div key={bottle.id}>
            <img
              style={{ width: "100px", margin: "15px" }}
              src={bottle.img}
            ></img>
            <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;