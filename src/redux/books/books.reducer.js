import booksActionTypes from "./books.types";

const initialState = {
  isReady: false,
  items: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case booksActionTypes.SET_BOOKS:
      return {
        ...state,
        items: action.payload,
        isReady: true,
      };
    default:
      return state;
  }
};

export default booksReducer;
