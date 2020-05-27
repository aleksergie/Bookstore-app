import cartActionTypes from "./cart.types";

export const addToCart = (item) => ({
  type: cartActionTypes.ADD_BOOK_TO_CART,
  payload: item,
});

export const removeFromCart = (id) => ({
  type: cartActionTypes.REMOVE_BOOK_FROM_CART,
  payload: id,
});
