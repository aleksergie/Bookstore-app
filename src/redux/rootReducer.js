import { combineReducers } from "redux";
import booksReducer from "./books/books.reducer";
import filterBooksReducer from "./filter/filter.reducer";

const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterBooksReducer,
});

export default rootReducer;
