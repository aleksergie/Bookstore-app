import { combineReducers } from "redux";
import booksReducer from "./books/books.reducer";
import filterBooksReducer from "./filter/filter.reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterBooksReducer,
  cart: cartReducer,
});

export default rootReducer;
