import booksActionTypes from "./books.types";
import filterActionTypes from "../filter/filter.types";

const initialState = {
  isReady: false,
  filteredBy: "all",
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
    case filterActionTypes.SET_FILTER:
      return {
        ...state,
        filteredBy: action.payload,
      };
    default:
      return state;
  }
};

export default booksReducer;
