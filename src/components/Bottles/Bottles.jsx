import { useState } from "react";
import { useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch("bottles.json")
      .then((response) => response.json())
      .then((data) => setBottles(data));
  }, []);

  const handleCart = (allClickedBottle) => {
    const newCart = [...cart, allClickedBottle]
    setCart(newCart)
  }

  return (
    <div>
        <div>
            <h2>Cart Item: {cart.length}</h2>
        </div>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleCart={handleCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
