import cartActionTypes from "./cart.types";

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_BOOK_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case cartActionTypes.REMOVE_BOOK_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
