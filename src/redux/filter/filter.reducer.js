import filterActionTypes from "../filter/filter.types";

const initialState = {
  searchQuery: "",
  filteredBy: "all",
};

const filterBooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case filterActionTypes.SET_FILTER:
      return {
        ...state,
        filteredBy: action.payload,
      };
    case filterActionTypes.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

export default filterBooksReducer;
