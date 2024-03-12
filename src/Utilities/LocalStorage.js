
const getStoredCart = () =>{
    const storedCartString = localStorage.getItem('cart')
    if(storedCartString) {
        return JSON.parse(storedCartString)
    }
    return [];
}

const addToLS = (id) => {
    const cart = getStoredCart();
    cart.push(id);
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}

const removeFromLS = (id) => {
    const cart = getStoredCart()
    const remaining = cart.filter(idx => idx !== id);
    const cartStringified = JSON.stringify(remaining)
    localStorage.setItem('cart', cartStringified)
}


export {addToLS, getStoredCart, removeFromLS}