import { useState } from "react";
import { useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../Utilities/LocalStorage";
import Cart from "../Cart/Cart";


const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch("bottles.json")
      .then((response) => response.json())
      .then((data) => setBottles(data));
  }, []);


  useEffect(() => {
    if (bottles.length > 0) {
      const storedCart = getStoredCart();
      const savedCart = [];
      for(let id of storedCart) {
        const bottle = bottles.find((bottle)=> bottle.id === id);
        if(bottle) {
          savedCart.push(bottle)
        }
      }
      setCart(savedCart);
    }
  }, [bottles]);


  const handleCart = (allClickedBottle) => {
    const newCart = [...cart, allClickedBottle]
    setCart(newCart);
    addToLS(allClickedBottle.id);
  }


  const handleRemoveFromCart = (id) => {
    const remainingCart = cart.filter(bottle => bottle.id !== id)
    setCart(remainingCart);
    removeFromLS(id);
  }

  return (
    <div>
      <div>
        <Cart
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
          key={cart.id}
        ></Cart>
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
