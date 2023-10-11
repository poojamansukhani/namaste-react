import { loadCart } from './cartSlice'; // Import the action you use to load cart data

const loadCartFromLocalStorage = () => {
  return (dispatch) => {
    // Check if cart data exists in local storage
    const cartDataFromLocalStorage = localStorage.getItem('cart');

    if (cartDataFromLocalStorage) {
      // If cart data exists, parse it and dispatch it to the Redux store
      const parsedCartData = JSON.parse(cartDataFromLocalStorage);
      dispatch(loadCart(parsedCartData)); // Use the appropriate action to load cart data
    }
  };
};

export default loadCartFromLocalStorage;