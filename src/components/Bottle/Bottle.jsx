import './Bottle.css'

const Bottle = ({ bottle, handleCart }) => {
  const { name, price, img } = bottle;
  return (
    <div className="bottle">
      <h3>
        Name: <small style={{ color: "green" }}>{name}</small>
      </h3>
      <img src={img} alt="" />
      <p>Price: $ {price}</p>
      <button onClick={()=> {
        handleCart(bottle);
      }}>Add to Cart</button>
    </div>
  );
};

export default Bottle;