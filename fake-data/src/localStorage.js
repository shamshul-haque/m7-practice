const addToLocalStorage = (id) => {
  const cart = getFromLocalStorage();
  cart.push(id);
  saveToLocalStorage(cart);
};

const saveToLocalStorage = (card) => {
  const cardStringified = JSON.stringify(card);
  localStorage.setItem("cart", cardStringified);
};

const getFromLocalStorage = () => {
  const cartString = localStorage.getItem("cart");
  return cartString ? JSON.parse(cartString) : [];
};

export { addToLocalStorage, getFromLocalStorage };
